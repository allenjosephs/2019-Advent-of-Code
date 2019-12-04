const fs = require('fs');

function getFuel(mass) {
  return Math.floor(mass / 3) - 2;
}

fs.readFile('../input.txt', 'utf-8', (err, data) => {
  data = data.split('\n');
  data = data.map(i => {
    let fuelRequirement = getFuel(parseInt(i));
    let remainingMass = fuelRequirement;
    while (remainingMass > 0) {
      remainingMass = getFuel(remainingMass);
      if (remainingMass > 0) {
        fuelRequirement += remainingMass;
      }
    }
    return fuelRequirement;
  });

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  console.log(sum);

});