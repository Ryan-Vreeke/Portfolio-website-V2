using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet("percent")]
        [Produces("application/json")]
        public IActionResult GetPercent()
        {
            var projects = _dbContext.Projects
                .Include(p => p.Skills)
                .ToArray();

            var skillPercent = new Dictionary<string, int>();
            float total = 0;

            foreach (var project in projects)
            {
                foreach (var skill in project.Skills)
                {
                    if (!skillPercent.TryAdd(skill.Name, 1))
                    {
                        skillPercent[skill.Name]++;
                    }

                    total++;
                }
            }

            foreach (var skill in skillPercent.Keys)
            {
                skillPercent[skill] = (int)Math.Floor((skillPercent[skill] / total) * 100);
            }

            skillPercent = skillPercent.OrderByDescending(x => x.Value)
                                        .ToDictionary(x => x.Key, x => x.Value);

            string jsonString = JsonSerializer.Serialize(skillPercent);

            return Ok(jsonString);
        }

    }
}