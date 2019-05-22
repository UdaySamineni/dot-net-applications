using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
            //Console.WriteLine("Hello World!");
            //Console.ReadKey();

            Math math = new Math();
            math.GetLiveCount(PrintLiveCount);
            Console.ReadKey();

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
        }

        static int PrintLiveCount(int k)
        {
            Console.WriteLine($"Printing {k}");
            return k;
        }
    }
}
