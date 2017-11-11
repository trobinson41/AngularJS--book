using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BugExplorer.Data;
using BugExplorer.Models;

namespace BugExplorer.Controllers
{
    public class ObservationsController : Controller
    {
        private readonly BugContext _context;

        public ObservationsController(BugContext context)
        {
            _context = context;
        }

        // GET: Observations
        public async Task<IActionResult> Index()
        {
            var bugContext = _context.Observations.Include(o => o.Bug);
            return View(await bugContext.ToListAsync());
        }

        // GET: Observations/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var observation = await _context.Observations
                .Include(o => o.Bug)
                .SingleOrDefaultAsync(m => m.ID == id);
            if (observation == null)
            {
                return NotFound();
            }

            return View(observation);
        }

        // GET: Observations/Create
        public IActionResult Create()
        {
            ViewData["BugID"] = new SelectList(_context.Bugs, "ID", "ID");
            return View();
        }

        // POST: Observations/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Title,BugID,Date,Country,StateOrProvince,CountyOrRegion,Site,Remarks")] Observation observation)
        {
            if (ModelState.IsValid)
            {
                _context.Add(observation);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["BugID"] = new SelectList(_context.Bugs, "ID", "ID", observation.BugID);
            return View(observation);
        }

        // GET: Observations/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var observation = await _context.Observations.SingleOrDefaultAsync(m => m.ID == id);
            if (observation == null)
            {
                return NotFound();
            }
            ViewData["BugID"] = new SelectList(_context.Bugs, "ID", "ID", observation.BugID);
            return View(observation);
        }

        // POST: Observations/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Title,BugID,Date,Country,StateOrProvince,CountyOrRegion,Site,Remarks")] Observation observation)
        {
            if (id != observation.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(observation);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ObservationExists(observation.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["BugID"] = new SelectList(_context.Bugs, "ID", "ID", observation.BugID);
            return View(observation);
        }

        // GET: Observations/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var observation = await _context.Observations
                .Include(o => o.Bug)
                .SingleOrDefaultAsync(m => m.ID == id);
            if (observation == null)
            {
                return NotFound();
            }

            return View(observation);
        }

        // POST: Observations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var observation = await _context.Observations.SingleOrDefaultAsync(m => m.ID == id);
            _context.Observations.Remove(observation);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ObservationExists(int id)
        {
            return _context.Observations.Any(e => e.ID == id);
        }
    }
}
