let pwdArray;
let eligiblePwds = [];

 for (let x = 124075; x <= 580769; x++) {
  pwdArray = x.toString().split('');
  if (eligibleSequence(pwdArray)) {
    if (containsDoubles(pwdArray)) {
      if (auditMatchingSequence(pwdArray)) {
        eligiblePwds.push(x);
      }
    }
  }
}

console.log("eligiblePwds: ", eligiblePwds);
console.log(`Num of eligible pwds: ${eligiblePwds.length}`);

function eligibleSequence(pwd) {
  let last = pwd[0];
  let eligible = false;
  for (let i = 1; i < pwd.length; i++) {
    if (pwd[i] >= last) {
      eligible = true;
      last = pwd[i];
    } else {
      eligible = false;
      break;
    }
  }
  return eligible;
}

function containsDoubles(pwd) {
  let doublesFound = false;
  for (let i = 0; i < pwd.length - 1; i++) {
    if (pwd[i] === pwd[i + 1]) {
      doublesFound = true;
      break;
    } else {
      doublesFound = false;
    }
  }
  return doublesFound;
}

function auditMatchingSequence(pwd) {
  let pwdCopy = pwd.map(x => x);
  let foundADouble = false;
  let totalCount;
  pwdCopy.forEach(digit => {
    totalCount = pwd.reduce((digitCount, currentVal) =>  {
      if (digit === currentVal) {
        digitCount += 1;
      }
      return digitCount;
    }, 0);
    if (totalCount === 2) {
      foundADouble = true;
    }
  });
  return foundADouble;
}