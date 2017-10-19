using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugExplorer.Models
{
    public class Observation
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int BugID { get; set; }
        public DateTime Date { get; set; }
        public string Country { get; set; }
        public string StateOrProvince { get; set; }
        public string CountyOrRegion { get; set; }
        public string Site { get; set; }
        public string Remarks { get; set; }

        public Bug Bug { get; set; }
        public ICollection<Photo> Photos { get; set; }
    }
}
