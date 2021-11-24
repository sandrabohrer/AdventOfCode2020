using System;
using System.IO;

namespace AdventOfCode2020_Day1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string filePath = @"C:\AdventOfCode\AdventOfCode2020\data\day1.txt";

            string[] expenseReportString = File.ReadAllLines(filePath);
            int[] expenseReport = Array.ConvertAll(expenseReportString, int.Parse);

            // Day 1 - Part 1
            Console.WriteLine("Day 1 - Part 1");
            int value1Part1 = 0;
            int value2Part1 = 0;

            for (int i = 0; i < expenseReport.Length; i++)
            {
                for (int j = 0; j < expenseReport.Length; j++)
                {
                    bool validPart1 = i != j && expenseReport[i] != expenseReport[j];
                    if (validPart1)
                    {
                        int expenseSumPart1 = expenseReport[i] + expenseReport[j];

                        if (expenseSumPart1 == 2020)
                        {
                            value1Part1 = expenseReport[i];
                            value2Part1 = expenseReport[j];
                        }
                    }
                }
            }

            Console.WriteLine("value1 is " + value1Part1 + ", value2 is " + value2Part1);
            int multiplicationPart1 = value1Part1 * value2Part1;
            Console.WriteLine("The multiplication value is " + multiplicationPart1);

            // Day 1 - Part 2
            Console.WriteLine("Day 1 - Part 2");
            int value1Part2 = 0;
            int value2Part2 = 0;
            int value3Part2 = 0;

            for (int k = 0; k < expenseReport.Length; k++)
            {
                for (int l = 0; l < expenseReport.Length; l++)
                {
                    for (int m = 0; m < expenseReport.Length; m++)
                    {
                        bool validPart2 = k != l &&
                                    k != m &&
                                    l != m &&
                                    expenseReport[k] != expenseReport[l] &&
                                    expenseReport[k] != expenseReport[m] &&
                                    expenseReport[l] != expenseReport[m];
                        if (validPart2)
                        {
                            int expenseSumPart2 = expenseReport[k] + expenseReport[l] + expenseReport[m];

                            if (expenseSumPart2 == 2020)
                            {
                                value1Part2 = expenseReport[k];
                                value2Part2 = expenseReport[l];
                                value3Part2 = expenseReport[m];
                            }
                        }
                    }
                }
            }

            Console.WriteLine("value1 is " + value1Part2 + ", value2 is " + value2Part2 + ", value3 is " + value3Part2);
            int multiplicationPart2 = value1Part2 * value2Part2 * value3Part2;
            Console.WriteLine("The multiplication value is " + multiplicationPart2);
        }
    }
}