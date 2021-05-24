using System.Threading.Tasks;
using Xunit;

namespace CustomerPortal.IntegrationTests
{
    public class CryptoControllerTests: CustomerPortalTestsBase
    {

        [Fact]
        public async Task Get_basket_and_response_ok_status_code()
        {
            using (var server = CreateServer())
            {
                var response = await server.CreateClient()
                   .GetAsync($"api/user/unauthenticated");

                
            }
        }
    }
}
