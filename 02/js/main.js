const fs = require('fs');

fs.readFile('../input.txt', 'utf-8', (err, inputArray) => {

  //console.log(inputArray);
  inputArray = inputArray.split(',');
  inputArray = inputArray.map(e => parseInt(e));
  let origArray = inputArray.slice(0);
  let opcode;

  for (let pos1Count = 0; pos1Count <= 99; pos1Count++) {
    for (let pos2Count = 0; pos2Count <= 99; pos2Count++) {
      inputArray[1] = pos1Count;
      inputArray[2] = pos2Count;

      for (let i = 0; i < inputArray.length; i+= 4) {
        opcode = inputArray[i];
        // console.log(`opcode:${opcode}, inputArray[1]:${inputArray[1]}, inputArray[2]:${inputArray[2]}`);
        switch (opcode) {
          case 1:
            inputArray[inputArray[i + 3]] = inputArray[inputArray[i + 1]] + inputArray[inputArray[i + 2]];
            break;
          case 2:
            inputArray[inputArray[i + 3]] = inputArray[inputArray[i + 1]] * inputArray[inputArray[i + 2]];
            break;
          case 99:
            i = inputArray.length;
            break;
          default:
            //console.log(`${opcode}: ERROR!`);
        }
      }

      if (inputArray[0] === 19690720) {
        // console.log("outta here!");
        break;
      } else {
        // console.log(`reset1: ${inputArray[0]}`);
        inputArray = origArray.slice(0);
        // console.log(`inputArray[0]:${inputArray[0]}, origArray[0]:${origArray[0]}`);
      }
      console.log(pos1Count, pos2Count);
    }
    if (inputArray[0] === 19690720) {
      console.log(
        `Solution: ${inputArray[0]}, ${inputArray[1]}, ${inputArray[2]}`
      );
      break;
    } else {
      // console.log(`reset2: ${inputArray[0]}`);
      inputArray = origArray.slice(0);
    }
  }

});

// fs.readFile('../input.txt', 'utf-8', (err, data) => {
//   data = data.split('\n');
//   data = data.map(i => {
//     let fuelRequirement = getFuel(parseInt(i));
//     let remainingMass = fuelRequirement;
//     while (remainingMass > 0) {
//       remainingMass = getFuel(remainingMass);
//       if (remainingMass > 0) {
//         fuelRequirement += remainingMass;
//       }
//     }
//     return fuelRequirement;
//   });

  // let sum = 0;
  // for (let i = 0; i < data.length; i++) {
  //   sum += data[i];
  // }
  // console.log(sum);

//});