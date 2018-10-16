using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.Models
{
    public class Student
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Year { get; set; }

        public string Class { get; set; }
    }
}