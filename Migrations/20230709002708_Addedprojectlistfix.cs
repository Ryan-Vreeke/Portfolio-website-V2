using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.Migrations
{
    /// <inheritdoc />
    public partial class Addedprojectlistfix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectItemSkillItem_Projects_ProjectItemsId",
                table: "ProjectItemSkillItem");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectItemSkillItem_Skills_SkillsId",
                table: "ProjectItemSkillItem");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProjectItemSkillItem",
                table: "ProjectItemSkillItem");

            migrationBuilder.RenameTable(
                name: "ProjectItemSkillItem",
                newName: "ProjectSkills");

            migrationBuilder.RenameIndex(
                name: "IX_ProjectItemSkillItem_SkillsId",
                table: "ProjectSkills",
                newName: "IX_ProjectSkills_SkillsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProjectSkills",
                table: "ProjectSkills",
                columns: new[] { "ProjectItemsId", "SkillsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectSkills_Projects_ProjectItemsId",
                table: "ProjectSkills",
                column: "ProjectItemsId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectSkills_Skills_SkillsId",
                table: "ProjectSkills",
                column: "SkillsId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectSkills_Projects_ProjectItemsId",
                table: "ProjectSkills");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectSkills_Skills_SkillsId",
                table: "ProjectSkills");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProjectSkills",
                table: "ProjectSkills");

            migrationBuilder.RenameTable(
                name: "ProjectSkills",
                newName: "ProjectItemSkillItem");

            migrationBuilder.RenameIndex(
                name: "IX_ProjectSkills_SkillsId",
                table: "ProjectItemSkillItem",
                newName: "IX_ProjectItemSkillItem_SkillsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProjectItemSkillItem",
                table: "ProjectItemSkillItem",
                columns: new[] { "ProjectItemsId", "SkillsId" });

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectItemSkillItem_Projects_ProjectItemsId",
                table: "ProjectItemSkillItem",
                column: "ProjectItemsId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectItemSkillItem_Skills_SkillsId",
                table: "ProjectItemSkillItem",
                column: "SkillsId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
