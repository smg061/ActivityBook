using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class PlacesController : BaseApiController
    {
        private readonly DataContext _context;
        public PlacesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Place>>> GetPlaces() 
        {
            return await _context.Places.ToListAsync();

        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Place>> GetActivity(Guid id)
        {
            return await _context.Places.FindAsync(id);
        }
        
    }
}