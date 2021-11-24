using System;
using System.IO;

namespace AdventOfCode2020_Day1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\AdventOfCode\AdventOfCode2020\data\day1.txt";

            string[] expenseReport = File.ReadAllLines(filePath);

            var totalExpensesCount = expenseReport.Length;
            Console.WriteLine("Expenses Count: " + totalExpensesCount);

            foreach (string str in expenseReport)
            {
                Console.WriteLine(str);
            }
        }
    }
}
