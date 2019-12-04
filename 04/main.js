let pwdArray;
let eligiblePwds = [];

// for (let x = 124075; x <= 580769; x++) {
for (let x = 124455; x <= 124456; x++) {
  pwdArray = x.toString().split('');
  if (eligibleSequence(pwdArray)) {
    if (containsDoubles(pwdArray)) {
      if (auditMatchingSequence(pwdArray)) {
        eligiblePwds.push(x);
      }
    }
  }
}

//console.log(eligiblePwds);
//console.log(`Num of eligible pwds: ${eligiblePwds.length}`);

function eligibleSequence(pwd) {
  let last = pwd[0];
  let eligible = false;
  for (let i = 1; i < pwd.length; i++) {
    if (pwd[i] >= last) {
      eligible = true;
      last = pwd[i];
    } else {
      eligible = false;
      //console.log("bad sequence");
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
  if (doublesFound === false) {
    //console.log("no doubles");
  }
  return doublesFound;
}

function auditMatchingSequence(pwd) {
// 1 2 4 4 5 5
  let matchCount = 1;
  let matchingSeqCount = [];
  for (let i = 0; i < pwd.length; i++) {
    matchCount = 1;
    for (let j = 0; i < pwd.length; j++) {
      if (j != i) {
        console.log(pwd[j], " ", pwd[i]);
        if (pwd[j] === pwd[i]) {
          matchCount += 1;
          console.log(matchCount);
        } else {
          break;
        }
      }
    }
    if (matchCount > 1) {
      matchingSeqCount.push(matchCount);
    }
  }
  console.log(matchingSeqCount);
  return true;
}