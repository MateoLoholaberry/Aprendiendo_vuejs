using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthAppBackend.Migrations
{
    /// <inheritdoc />
    public partial class id : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Content",
                table: "Notes",
                newName: "Contenido");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Contenido",
                table: "Notes",
                newName: "Content");
        }
    }
}
