using System;
using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;
namespace Persistence
{
    public class DataContext:DbContext
    {
        public DbSet<WeatherForecast>WeatherForecasts{get; set;}
        public DbSet<Post> Posts{ get; set;}
        public string DbPath{get; set;}
    }
}