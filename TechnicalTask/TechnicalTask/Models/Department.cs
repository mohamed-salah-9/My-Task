using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TechnicalTask.Models
{
    public class Department
    {
        [Key]
        public int DbID { get; set; }
        public string DbName { get; set; }
        public string DbCode { get; set; }
        public ICollection<Employees> Employees { get; set; }
    }
}
