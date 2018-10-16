using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ragnarok.DA.Entities
{
    public class Subject
    {
        public Subject()
        {
            this.Professors = new HashSet<Professor>();
        }

        public Guid Id { get; set; }

        public string Name { get; set; }

        public virtual ICollection<Professor> Professors { get; set; }
    }
}