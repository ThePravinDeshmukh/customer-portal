﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using CustomerPortal.Helpers;
using CustomerPortal.Models;
using CustomerPortal.Models.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Serilog;

namespace CustomerPortal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly AppSettings _appSettings;
        private readonly SecurityTokenHandler _tokenHandler;

        public UserController(
            IUserRepository userRepository,
            IMapper mapper,
            IOptions<AppSettings> appSettings,
            SecurityTokenHandler tokenHandler)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _appSettings = appSettings.Value;
            _tokenHandler = tokenHandler;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            var user = _userRepository.Authenticate(model.Username, model.Password);

            if (user == null)
                return BadRequest(new { message = Constants.USERNAME_INCORRECT });

            
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = _tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = _tokenHandler.WriteToken(token);

            return Ok(new
            {
                user.Id,
                user.Username,
                user.FirstName,
                user.LastName,
                Token = tokenString
            });
        }


        [HttpGet("authenticate")]
        public IActionResult Authenticate()
        {
            return Ok();
        }
        [AllowAnonymous]
        [HttpGet("unauthenticated")]
        public IActionResult Unauthenticated()
        {
            return Ok();
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModel model)
        {
            var user = _mapper.Map<User>(model);

            try
            {
                _userRepository.Create(user, model.Password);
                return Ok();
            }
            catch (ValidationException ex)
            {
                Log.Error(ex.ToString());
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            var users = _userRepository.GetAll();
            var model = _mapper.Map<IList<UserModel>>(users);
            return Ok(model);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user = _userRepository.GetById(id);
            var model = _mapper.Map<UserModel>(user);
            return Ok(model);
        }
    }
}
