using LehrerZitateApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace LehrerZitateApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LehrerZitateController : ControllerBase
    {
        private readonly LehrerZitateContext _context;

        public LehrerZitateController(LehrerZitateContext context)
        {
            _context = context;
        }


    }
}
