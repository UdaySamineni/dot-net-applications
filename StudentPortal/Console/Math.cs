using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Math
    {
        public delegate int GetCount(int j);
        public void GetLiveCount(GetCount count)
        {
            for (int i = 0; i < 100; i++)
            {
                count(i);
            }
        }
    }
}
