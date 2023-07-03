using Microsoft.AspNetCore.Mvc;
using Portfolio.Data;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SkillController : ControllerBase
    {

        private readonly ILogger<SkillController> _logger;
        private readonly AppDbContext _dbContext;

        public SkillController(ILogger<SkillController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        [Produces("application/json")]
        public ActionResult<SkillItem[]> Get()
        {
            var skills = _dbContext.Skills.OrderByDescending(x => x.Experience).Take(6);
            return Ok(skills.ToArray());
        }

    }
}