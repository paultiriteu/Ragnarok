using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.Models
{
    public class Professor
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public Subject[] Subjects { get; set; }
    }
}