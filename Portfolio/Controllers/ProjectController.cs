using Microsoft.AspNetCore.Mvc;
using Portfolio.Data;
using Portfolio.Models;
using SQLitePCL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;




namespace Portfolio.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectsController : ControllerBase
    {

        private readonly ILogger<ProjectsController> _logger;
        private readonly AppDbContext _dbContext;

        public ProjectsController(ILogger<ProjectsController> logger, AppDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }


        [HttpGet]
        [Produces("application/json")]
        public ActionResult<ProjectItem[]> Get()
        {
            var projects = _dbContext.Projects
                .Include(p => p.Skills) // Eagerly load the Skills collection
                .ToArray();

            return Ok(projects);
        }
    }
}