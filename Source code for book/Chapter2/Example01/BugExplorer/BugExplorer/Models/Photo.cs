using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BugExplorer.Models
{
    public class Photo
    {
        public Guid ID { get; set; }
        public int BugID { get; set; }
        public int ObservationID { get; set; }
    }
}
