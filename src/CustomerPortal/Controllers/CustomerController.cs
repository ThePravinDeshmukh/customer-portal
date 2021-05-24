using CustomerPortal.BusinessLogic;
using AutoMapper;
using CustomerPortal.Helpers;
using CustomerPortal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Serilog;

namespace CustomerPortal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerLogic _cryptoLogic;
        private readonly AppSettings _appSettings;

        public CustomerController(
            ICustomerLogic customerLogic,
            IOptions<AppSettings> appSettings)
        {
            _cryptoLogic = customerLogic;
            _appSettings = appSettings.Value;
        }


        [HttpGet("all")]
        public IActionResult GetAll()
        {
            try
            {
                var model = _cryptoLogic.GetAll();
                return Ok(model);
            }
            catch (BadResponseException ex)
            {
                Log.Error(ex.ToString());
                return BadRequest(new
                {
                    message = ex.Message
                });
            }
        }


        [HttpPost("create")]
        public IActionResult Create([FromBody] Customer model)
        {
            //var customer = _mapper.Map<Customer>(model);

            try
            {
                Customer customer = _cryptoLogic.Create(model);
                return Ok(customer);
            }
            catch (ValidationException ex)
            {
                Log.Error(ex.ToString());
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}
