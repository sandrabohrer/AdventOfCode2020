const fs = require('fs')

function readFileReturnArray() {
  // fs.readFile('data/day3.txt', 'utf8', (readErr, data) => {
  //   if (readErr) {
  //     console.error(readErr)
  //     return
  //   } else {
  //     var array = data.toString().split("\n").map(item => item.trim());

  //     return array
  //   }
  // })

  try {
    const data = fs.readFileSync('data/day3.txt', 'utf8')
    var array = data.toString().split("\n").map(item => item.trim());

    return array
  } catch (err) {
    console.error(err)
  }
}

function getNumberOfTreesBasedOnSlope(right, down) {
  var treeRowArray = readFileReturnArray();

  var positionRight = 0;

  for (t = 0; t < treeRowArray.length; t += down) {
    var a = 0;

    var treeRowArrayCopy = treeRowArray[t];

    while (positionRight >= (treeRowArray[t].length-1) & a <= treeRowArray.length) {
      treeRowArray[t] += treeRowArrayCopy
      a++;
    }

    var treeSplit = treeRowArray[t].split('')

    if (t > 0) {
      if (treeSplit[positionRight] == '.') {
        treeSplit.splice(positionRight, 1, "O");
      } else if (treeSplit[positionRight] == '#') {
        treeSplit.splice(positionRight, 1, "X");
      }
    }

    treeRowArray[t] = treeSplit.join('')

    positionRight += right
  }

  // treeRowArray.forEach(treeRow => {
  //   console.log(treeRow)
  // });

  var treeCount = 0

  for (i = 0; i < treeRowArray.length; i++) {
    let result = treeRowArray[i].split('X').length-1;
    treeCount += result
  }

  return treeCount
}

console.log('The total of right 1, down 1 trees is: ' + getNumberOfTreesBasedOnSlope(1, 1))
console.log('The total of right 3, down 1 trees is: ' + getNumberOfTreesBasedOnSlope(3, 1))
console.log('The total of right 5, down 1 trees is: ' + getNumberOfTreesBasedOnSlope(5, 1))
console.log('The total of right 7, down 1 trees is: ' + getNumberOfTreesBasedOnSlope(7, 1))
console.log('The total of right 1, down 2 trees is: ' + getNumberOfTreesBasedOnSlope(1, 2))

var multiplication = getNumberOfTreesBasedOnSlope(1, 1) * getNumberOfTreesBasedOnSlope(3, 1) * getNumberOfTreesBasedOnSlope(5, 1) * getNumberOfTreesBasedOnSlope(7, 1) * getNumberOfTreesBasedOnSlope(1, 2);

console.log('The multiplication of these values are: ' + multiplication)