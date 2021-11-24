const fs = require('fs')

fs.readFile('data/day2.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else {
    var policyPasswordArray = data.toString().split("\n");

    var validCountPart1 = 0
    var validCountPart2 = 0
    var invalidCountPart2 = 0

    policyPasswordArray.forEach(policyPassword => {
      var policyPasswordSplit = policyPassword.split(': ')
      for (let i = 0; i < policyPasswordSplit.length; i++) {
        var policy = policyPasswordSplit[0]
        var password = policyPasswordSplit[1]
        var policySplit = policy.split(' ')
        for (let j = 0; j < policySplit.length; j++) {
          var policyLimit = policySplit[0]
          var policyCharacter = policySplit[1]
          var policyLimitSplit = policyLimit.split('-')
          for (let k = 0; k < policyLimitSplit.length; k++) {
            var policyLimitMin = policyLimitSplit[0]
            var policyLimitMax = policyLimitSplit[1]
          }
        }
      }
      // console.log('policy limit is ' + policyLimit + ' (min: ' + policyLimitMin + ', max: ' + policyLimitMax + '), policy character is ' + policyCharacter + ', password is ' + password)
      var count = password.split(policyCharacter).length - 1;

      if (count >= policyLimitMin && count <= policyLimitMax) {
        validCountPart1 += 1
      }

      // console.log('Policy limit min \(minus 1 for index 0\) is ' + (policyLimitMin-1) + ', index is ' + password.indexOf(policyCharacter, policyLimitMin-1) + ', Policy limit max \(minus 1 for index 0\) is ' + (policyLimitMax-1) + ', index is ' + password.indexOf(policyCharacter, policyLimitMax-1))
      if (password.indexOf(policyCharacter, policyLimitMin-1) == -1 && password.indexOf(policyCharacter, policyLimitMax-1) == -1) {
        invalidCountPart2 += 1
      } else if (password.indexOf(policyCharacter, policyLimitMin-1) == (policyLimitMin-1) && password.indexOf(policyCharacter, policyLimitMax-1) == (policyLimitMax-1)) {
        invalidCountPart2 += 1
      } else if (password.indexOf(policyCharacter, policyLimitMin-1) != (policyLimitMin-1) && password.indexOf(policyCharacter, policyLimitMax-1) != (policyLimitMax-1)) {
        invalidCountPart2 += 1
      } else {
        validCountPart2 += 1
      }
    });
    console.log('The number of valid passwords for part 1 is ' + validCountPart1)
    console.log('The number of valid passwords for part 2 is ' + validCountPart2)
    console.log('The number of invalid passwords for part 2 is ' + invalidCountPart2)
  }
})