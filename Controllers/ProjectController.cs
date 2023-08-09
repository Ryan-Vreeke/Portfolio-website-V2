using Microsoft.AspNetCore.Mvc;
using Portfolio.Data;
using Portfolio.Models;
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

    [HttpGet("all")]
    public ActionResult<List<ProjectDto>> GetAll()
    {
      var projects = _dbContext.Projects.Include(p => p.Skills).ToList();

      var projectDtos = projects
        .Select(
          p =>
            new ProjectDto
            {
              Id = p.Id,
              Title = p.Title,
              Image = p.Image,
              Desc = p.Desc,
              Skills = p.Skills.Select(s => s.Name).ToList()
            }
        )
        .ToList();

      return Ok(projectDtos);
    }

    [HttpGet]
    [Produces("application/json")]
    public ActionResult<List<ProjectDto>> Get()
    {
      var projects = _dbContext.Projects
        .Include(p => p.Skills)
        .Where(project => project.Display)
        .ToList();

      var projectDtos = projects
        .Select(
          p =>
            new ProjectDto
            {
              Id = p.Id,
              Title = p.Title,
              Image = p.Image,
              Desc = p.Desc,
              Skills = p.Skills.Select(s => s.Name).ToList()
            }
        )
        .ToList();

      return Ok(projectDtos);
    }
  }

  public class ProjectDto
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public List<string> Skills { get; set; }
    public string? Image { get; set; }
    public string? Desc { get; set; }
  }
}
