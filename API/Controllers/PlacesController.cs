using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Places;
using Domain;
using Microsoft.AspNetCore.Mvc;
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
            return await Mediator.Send(new List.Query());

        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Place>> GetActivity(Guid id)
        {
            return await _context.Places.FindAsync(id);
        }
        
    }
}