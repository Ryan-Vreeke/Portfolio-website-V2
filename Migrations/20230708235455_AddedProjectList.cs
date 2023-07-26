using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Portfolio.Migrations
{
    /// <inheritdoc />
    public partial class AddedProjectList : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Projects_ProjectItemId",
                table: "Skills");

            migrationBuilder.DropIndex(
                name: "IX_Skills_ProjectItemId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "ProjectItemId",
                table: "Skills");

            migrationBuilder.CreateTable(
                name: "ProjectItemSkillItem",
                columns: table => new
                {
                    ProjectItemsId = table.Column<int>(type: "INTEGER", nullable: false),
                    SkillsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectItemSkillItem", x => new { x.ProjectItemsId, x.SkillsId });
                    table.ForeignKey(
                        name: "FK_ProjectItemSkillItem_Projects_ProjectItemsId",
                        column: x => x.ProjectItemsId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectItemSkillItem_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProjectItemSkillItem_SkillsId",
                table: "ProjectItemSkillItem",
                column: "SkillsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectItemSkillItem");

            migrationBuilder.AddColumn<int>(
                name: "ProjectItemId",
                table: "Skills",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Skills_ProjectItemId",
                table: "Skills",
                column: "ProjectItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Projects_ProjectItemId",
                table: "Skills",
                column: "ProjectItemId",
                principalTable: "Projects",
                principalColumn: "Id");
        }
    }
}
