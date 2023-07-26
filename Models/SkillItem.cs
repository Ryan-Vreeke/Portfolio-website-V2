using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Portfolio.Models
{
    public class SkillItem
    {
        public SkillItem()
        {
            ProjectItems = new HashSet<ProjectItem>();
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public float Experience { get; set; }

        public virtual ICollection<ProjectItem> ProjectItems { get; set; }

    }
}