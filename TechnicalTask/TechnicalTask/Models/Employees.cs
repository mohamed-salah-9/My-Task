using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TechnicalTask.Models
{
    public class Employees
    {
        [Key]
        public string ID { get; set;}
        public string Name { get; set; }
        public int Salary { get; set; }
        public string BirthDay { get; set; }
        public string Gender { get; set; }
    }
}
