
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Models
{
  public class ProjectItem
  {
    public ProjectItem()
    {
      this.Skills = new HashSet<SkillItem>();
      Display = false;
    }

    [Key]
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }
    public bool Display { get; set; }
    public string? Desc { get; set; }
    public string? Image { get; set; }
    public virtual ICollection<SkillItem> Skills { get; set; }
  }
}
