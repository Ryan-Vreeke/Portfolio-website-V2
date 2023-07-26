using Portfolio.Models;
using Portfolio.Data;

namespace YourProjectName.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            // Ensure the database is created
            context.Database.EnsureCreated();

            // Check if there are already records in the database
            if (context.Projects.Any())
            {
                return; // Database has been seeded
            }

            var skills = new List<SkillItem>()
            {
                new SkillItem{ Name="C#", Experience=3},
                new SkillItem{ Name="C/C++", Experience=1.5f},
                new SkillItem{ Name="Java", Experience=2},
                new SkillItem{ Name="JavaScript", Experience=1},
                new SkillItem{ Name="React", Experience=0.5f},
                new SkillItem{ Name="Databases", Experience=1}
            };

            // Add starting data
            var items = new ProjectItem[]
            {
                new ProjectItem{ Id = 1, Title = "Project Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 2, Title = "Project 2 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 3, Title = "Project 3 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 4, Title = "Project 4 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 5, Title = "Project 5 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 6, Title = "Project 6 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 7, Title = "Project 7 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 8, Title = "Project Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 9, Title = "Project 2 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 10, Title = "Project 3 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 12, Title = "Project 4 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 11, Title = "Project 5 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 13, Title = "Project 6 Title", Desc = "Project Description", Image = "project-image.jpg"},
                new ProjectItem{ Id = 14, Title = "Project 7 Title", Desc = "Project Description", Image = "project-image.jpg"}
            };

            items[0].Skills.Add(skills[0]);
            items[0].Skills.Add(skills[1]);

            items[1].Skills.Add(skills[2]);
            items[1].Skills.Add(skills[3]);

            items[2].Skills.Add(skills[2]);
            items[2].Skills.Add(skills[3]);

            context.Projects.AddRange(items);
            context.Skills.AddRange(skills);
            context.SaveChanges();
        }
    }
}
