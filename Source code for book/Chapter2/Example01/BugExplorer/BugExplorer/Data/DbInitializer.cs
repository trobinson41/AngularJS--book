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
                new Bug{ID=1000, CommonName="Tarantula Hawk Wasp", Class="Insecta", Order="Hymenoptera", Family="Pompilidae", Genus="Pepsis", Species="", Description="The tarantula hawk is an example of a parasitoid wasp. It will sting a taratula to paralyse it, then drag the spider to a brood chamber, where it lays a single egg on the spider's abdomen. When the egg hatches, the wasp larva begins eating the spider -- slowly. It actually eats the non-vital organs first to keep it alive for as long as possible!"},
                new Bug{ID=1001, CommonName="Wolf Spider", Class="Arachnida", Order="Araneae", Family="Lycosidae", Genus="", Species="", Description="Wolf spiders carry their babies on their backs. They're the only spiders that do this."}
            };
            foreach (Bug s in bugs)
            {
                context.Bugs.Add(s);
            }
            context.SaveChanges();

            var observations = new Observation[]
            {
                new Observation{ID=2000, Title="Wolf Spider with Babies", BugID=2,Date=DateTime.Parse("2017-04-12")},
                new Observation{ID=2001, Title="Tarantula Hawk Dragging Tarantula", BugID=1,Date=DateTime.Parse("2017-09-08")},
                new Observation{ID=2002, Title="Wolf Spider with Missing Legs", BugID=2,Date=DateTime.Parse("2017-08-31")}
            };
            foreach (Observation c in observations)
            {
                context.Observations.Add(c);
            }
            context.SaveChanges();

            Guid id1 = Guid.NewGuid();
            Guid id2 = Guid.NewGuid();
            Guid id3 = Guid.NewGuid();
            
            var photos = new Photo[]
            {
                new Photo{ID=id1, BugID=1000, ObservationID=1},
                new Photo{ID=id2, BugID=1001, ObservationID=2},
                new Photo{ID=id3, BugID=1001, ObservationID=3}
            };
            foreach (Photo e in photos)
            {
                context.Photos.Add(e);
            }
            context.SaveChanges();
        }
    }
}
