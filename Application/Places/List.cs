using MediatR;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Places
{
    public class List
    {
        public class Query: IRequest<List<Place>> {};

        public class Handler: IRequestHandler<Query, List<Place>> 
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Place>> Handle(Query request, CancellationToken cancellationToken) 
            {
                return await _context.Places.ToListAsync();
            }
        }
    }
}