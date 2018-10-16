namespace Ragnarok.DA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Add_Professor_Id_field_on_Results_table : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Results", "Professor_Id", c => c.Guid(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Results", "Professor_Id");
        }
    }
}
