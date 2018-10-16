using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.Models
{
    public class Subject
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public Professor[] Professors { get; set; }
    }
}