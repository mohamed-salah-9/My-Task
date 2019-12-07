using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TechnicalTask.Migrations
{
    public partial class createdatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    DbID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DbName = table.Column<string>(nullable: true),
                    DbCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.DbID);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    ID = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Salary = table.Column<decimal>(nullable: false),
                    BirthDay = table.Column<DateTime>(nullable: false),
                    Gender = table.Column<bool>(nullable: false),
                    DepartmentDbID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Employees_Departments_DepartmentDbID",
                        column: x => x.DepartmentDbID,
                        principalTable: "Departments",
                        principalColumn: "DbID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepartmentDbID",
                table: "Employees",
                column: "DepartmentDbID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
