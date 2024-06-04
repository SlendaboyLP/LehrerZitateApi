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


        [HttpGet]
        [Route("random")]
        public ActionResult<LehrerZitat> GetRandomQuote()
        {
            var zitat = _context.LehrerZitate.OrderBy(x => Guid.NewGuid()).FirstOrDefault();
            if (zitat == null)
            {
                return NotFound();
            }
            return zitat;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<LehrerZitat> GetQuoteById(int id)
        {
            var zitat = _context.LehrerZitate.Find(id);
            if (zitat == null)
            {
                return NotFound();
            }
            return zitat;
        }


        [HttpGet]
        public ActionResult<IEnumerable<LehrerZitat>> GetAllQuote()
        {
            return _context.LehrerZitate.ToList();
        }


        [HttpPost]
        public ActionResult<LehrerZitat> AddQuote(LehrerZitat zitat)
        {
            _context.LehrerZitate.Add(zitat);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetQuoteById), new { id = zitat.Id }, zitat);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<LehrerZitat> UpdateQuote(int id, LehrerZitat zitat)
        {
            if (id != zitat.Id)
            {
                return BadRequest();
            }
            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult<LehrerZitat> DeleteQuote(int id)
        {
            var zitat = _context.LehrerZitate.Find(id);
            if (zitat == null)
            {
                return NotFound();
            }
            _context.LehrerZitate.Remove(zitat);
            _context.SaveChanges();
            return NoContent();
        }


    }
}
