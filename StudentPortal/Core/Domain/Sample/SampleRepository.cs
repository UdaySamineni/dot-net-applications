using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Sample
{
    public class SampleRepository: ISample
    {
        public void PrintName()
        {
            Console.WriteLine("Name printed");
        }
    }
}
