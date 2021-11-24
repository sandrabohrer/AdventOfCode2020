const fs = require('fs')

fs.readFile('data/day1.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else {
    var expenseReportArray = data.toString().split("\n");

    expenseReportArray = expenseReportArray.map(Number)

    // Day 1 - Part 1
    console.log('Day 1 - Part 1')
    var value1Part1 = 0;
    var value2Part1 = 0;

    for (let i = 0; i < expenseReportArray.length; i++) {
      for (let j = 0; j < expenseReportArray.length; j++) {
        if (i != j && expenseReportArray[i] != expenseReportArray[j]) {
          var expenseSumPart1 = expenseReportArray[i] + expenseReportArray[j]

          if (expenseSumPart1 == 2020) {
            value1Part1 = expenseReportArray[i]
            value2Part1 = expenseReportArray[j]
          }
        }
      }
    }

    console.log('value1 is ' + value1Part1 + ', value2 is ' + value2Part1)
    var multiplicationPart1 = value1Part1 * value2Part1
    console.log('The multiplication value is ' + multiplicationPart1)

    // Day 1 - Part 2
    console.log('Day 1 - Part 2')
    var value1Part2 = 0;
    var value2Part2 = 0;
    var value3Part2 = 0;
    for (let k = 0; k < expenseReportArray.length; k++) {
      for (let l = 0; l < expenseReportArray.length; l++) {
        for (let m = 0; m < expenseReportArray.length; m++) {
          var validPart2 = k != l && 
                      k != m && 
                      l != m && 
                      expenseReportArray[k] != expenseReportArray[l] &&
                      expenseReportArray[k] != expenseReportArray[m] &&
                      expenseReportArray[l] != expenseReportArray[m]
          if (validPart2) {
            var expenseSumPart2 = expenseReportArray[k] + expenseReportArray[l] + expenseReportArray[m]

            if (expenseSumPart2 == 2020) {
              value1Part2 = expenseReportArray[k]
              value2Part2 = expenseReportArray[l]
              value3Part2 = expenseReportArray[m]
            }
          }
        }
      }
    }
    
    console.log('value1 is ' + value1Part2 + ', value2 is ' + value2Part2 + ', value3 is ' + value3Part2)
    var multiplicationPart2 = value1Part2 * value2Part2 * value3Part2
    console.log('The multiplication value is ' + multiplicationPart2)
  }
})