using System;
using System.Collections.Generic;

namespace BugExplorer.Models
{
    public class Bug
    {
        public int ID { get; set; }
        public string CommonName { get; set; }
        public string Class { get; set; }
        public string Order { get; set; }
        public string Family { get; set; }
        public string Genus { get; set; }
        public string Species { get; set; }
        public string Description { get; set; }
    }
}
