using System;

namespace Domain
{
    public class Place
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ZIP { get; set; }
        
    }
}