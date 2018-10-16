using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Entities
{
    public class Result
    {
        public Guid Id { get; set; }

        public Guid Student_Id { get; set; }

        public Guid Subject_Id { get; set; }

        public Guid Professor_Id { get; set; }

        public int Mark { get; set; }

        public string Date { get; set; }
    }
}