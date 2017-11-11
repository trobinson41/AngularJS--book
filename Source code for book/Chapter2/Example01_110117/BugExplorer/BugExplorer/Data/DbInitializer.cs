using BugExplorer.Data;
using BugExplorer.Models;
using System;
using System.Linq;

namespace BugExplorer.Data
{
    public static class DbInitializer
    {
        public static void Initialize(BugContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Bugs.Any())
            {
                return;   // DB has been seeded
            }

            var bugs = new Bug[]
            {
                new Bug{ID=1000, CommonName="Tarantula Hawk Wasp", Class="Insecta", Order="Hymenoptera", Family="Pompilidae", Genus="Pepsis", Species=""},
                new Bug{ID=1001, CommonName="Wolf Spider", Class="Arachnida", Order="Araneae", Family="Lycosidae", Genus="", Species=""},
            };
            foreach (Bug b in bugs)
            {
                context.Bugs.Add(b);
            }
            context.SaveChanges();

            var observations = new Observation[]
            {
                new Observation{ID=2000, Title="Wolf Spider in Burrow", StateOrProvince="California", CountyOrRegion="San Diego County", Site="Mission Trails Regional Park", Country="USA", Remarks="Some spiders, such as this wolf spider, dig burrows." , BugID=1001, Date=DateTime.Parse("2017-06-12")},
                new Observation{ID=2001, Title="Tarantula Hawk Dragging Tarantula", StateOrProvince="California", CountyOrRegion="San Diego County", Site="Mission Trails Regional Park", Country="USA", Remarks="The tarantula hawk is an example of a parasitoid wasp. It will sting a taratula to paralyse it, then drag the spider to a brood chamber, where it lays a single egg on the spider's abdomen. When the egg hatches, the wasp larva begins eating the spider -- slowly. It actually eats the non-vital organs first to keep it alive for as long as possible!", BugID=1000, Date=DateTime.Parse("2017-09-08")},
                new Observation{ID=2002, Title="Wolf Spider with Missing Legs", StateOrProvince="California", CountyOrRegion="San Diego County", Site="Sweetwater River Trail", Country="USA", Remarks="Sometimes a spider may be stung in the leg by a bug that it's trying to eat. (The joints are vulnerable.) In this case, the spider will bite off the leg to prevent the venom from reaching its body! It make also bite off a leg if it gets stuck while molting.", BugID=1001, Date=DateTime.Parse("2017-08-31")}
            };
            foreach (Observation o in observations)
            {
                context.Observations.Add(o);
            }
            context.SaveChanges();

            Guid id1 = Guid.Parse("e1335dba-00d3-48ce-a9a2-56a5b03a4384");
            Guid id2 = Guid.Parse("039f9a32-572b-4f6b-acdd-5adf1221d616");
            Guid id3 = Guid.Parse("8253c49f-f558-4f58-bfdb-f3c5a645cd0e");
            
            var photos = new Photo[]
            {
                new Photo{ID=id1, BugID=1001, ObservationID=2000},
                new Photo{ID=id2, BugID=1001, ObservationID=2002},
                new Photo{ID=id3, BugID=1000, ObservationID=2001}
            };
            foreach (Photo p in photos)
            {
                context.Photos.Add(p);
            }
            context.SaveChanges();
        }
    }
}
