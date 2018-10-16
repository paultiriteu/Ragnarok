namespace Ragnarok.DA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_Professors_and_Results_and_Students_and_Subjects_Tables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Professors",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        FirstName = c.String(),
                        LastName = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Subjects",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Results",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Student_Id = c.Guid(nullable: false),
                        Subject_Id = c.Guid(nullable: false),
                        Mark = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Year = c.Int(nullable: false),
                        Class = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.SubjectProfessors",
                c => new
                    {
                        SubjectId = c.Guid(nullable: false),
                        ProfessorId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.SubjectId, t.ProfessorId })
                .ForeignKey("dbo.Subjects", t => t.SubjectId, cascadeDelete: true)
                .ForeignKey("dbo.Professors", t => t.ProfessorId, cascadeDelete: true)
                .Index(t => t.SubjectId)
                .Index(t => t.ProfessorId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SubjectProfessors", "ProfessorId", "dbo.Professors");
            DropForeignKey("dbo.SubjectProfessors", "SubjectId", "dbo.Subjects");
            DropIndex("dbo.SubjectProfessors", new[] { "ProfessorId" });
            DropIndex("dbo.SubjectProfessors", new[] { "SubjectId" });
            DropTable("dbo.SubjectProfessors");
            DropTable("dbo.Students");
            DropTable("dbo.Results");
            DropTable("dbo.Subjects");
            DropTable("dbo.Professors");
        }
    }
}
