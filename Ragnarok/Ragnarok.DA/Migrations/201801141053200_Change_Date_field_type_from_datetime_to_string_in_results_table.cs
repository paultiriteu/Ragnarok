namespace Ragnarok.DA.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Change_Date_field_type_from_datetime_to_string_in_results_table : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Results", "Date", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Results", "Date", c => c.DateTime(nullable: false));
        }
    }
}
