using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Entities
{
    public class Professor
    {
        public Professor()
        {
            this.Subjects = new HashSet<Subject>();
        }

        public Guid Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public virtual ICollection<Subject> Subjects { get; set; }
    }
}