﻿using Xunit;
using System.Collections.Generic;
using Moq;
using CustomerPortal.Models.Repository;
using CustomerPortal.Models;

namespace CustomerPortal.BusinessLogic.Tests
{
    public class UserLogicTests
    {
        readonly UserLogic _target;
        readonly Mock<IUserRepository> _mockUserRepository;

        public UserLogicTests()
        {
            _mockUserRepository = new Mock<IUserRepository>();
            _target = new UserLogic(_mockUserRepository.Object);
        }

        [Fact()]
        public void UserLogic_GetAll_Should_Call_UserRepository_GetAll_Method()
        {
            _mockUserRepository.Setup(x => x.GetAll()).Returns(It.IsAny<IEnumerable<User>>());
            _target.GetAll();
            _mockUserRepository.Verify(x => x.GetAll(), Times.Once());
        }

        [Fact()]
        public void UserLogic_GetById_Should_Call_UserRepository_GetById_Method()
        {
            int userId = It.IsAny<int>();
            _mockUserRepository.Setup(x => x.GetById(userId)).Returns(It.IsAny<User>());
            _target.GetById(userId);
            _mockUserRepository.Verify(x => x.GetById(userId), Times.Once());
        }

        [Fact()]
        public void UserLogic_Create_Should_Call_UserRepository_GetById_Method()
        {
            User user = It.IsAny<User>();
            string password = It.IsAny<string>();
            _mockUserRepository.Setup(x => x.Create(user, password)).Returns(It.IsAny<User>());
            _target.Create(user, password);
            _mockUserRepository.Verify(x => x.Create(user, password), Times.Once());
        }
    }
}