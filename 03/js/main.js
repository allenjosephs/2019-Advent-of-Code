const fs = require('fs');

fs.readFile('../input.txt', 'utf-8', (err, inputArray) => {
  //console.log(inputArray);
  inputArray = inputArray.split('\n');
  //console.log(inputArray);
  let tempLine1 = inputArray[0].split(",");
  let tempLine2 = inputArray[1].split(",");

   // console.log(tempLine1);
   // console.log(tempLine2);

  //let tempLine1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72', 'U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];
  //let tempLine2 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51', 'U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

  //let tempLine1 = ['R5', 'D5'];
  //let tempLine2 = ['D3', 'R7', 'U2', 'L3'];

  let line1Path = [];
  let line2Path = [];

  let distance = 0;
  let direction = "";
  let vectorPath = [];
  let lastX = 0;
  let lastY = 0;

  tempLine1.forEach(vector => {
    vectorPath = [];
    direction = vector.substring(0, 1);
    distance = parseInt(vector.substring(1));
    switch (direction) {
      case 'R':
        for (let i = 0; i <= distance; i++) {
          vectorPath[i] = [lastY, lastX + i];
        }
        lastX += distance;
        //console.log(vectorPath);
        break;
      case 'L':
        for (let i = distance; i >= 0; i--) {
          vectorPath[i] = [lastY, lastX - i];
        }
        lastX -= distance;
        //console.log(vectorPath);
        break;
      case 'U':
        for (let i = 0; i <= distance; i++) {
          vectorPath[i] = [lastY + i, lastX];
        }
        lastY += distance;
        //console.log(vectorPath);
        break;
      case 'D':
        for (let i = distance; i >= 0; i--) {
          vectorPath[i] = [lastY - i, lastX];
        }
        lastY -= distance;
        //console.log(vectorPath);
        break;
    }
    line1Path.push(vectorPath);
  });
  //console.log(line1Path[0]);


  distance = 0;
  direction = "";
  vectorPath = [];
  lastX = 0;
  lastY = 0;

  tempLine2.forEach(vector => {
    vectorPath = [];
    direction = vector.substring(0, 1);
    distance = parseInt(vector.substring(1));
    switch (direction) {
      case 'R':
        for (let i = 0; i <= distance; i++) {
          vectorPath[i] = [lastY, lastX + i];
        }
        lastX += distance;
        //console.log(vectorPath);
        break;
      case 'L':
        for (let i = distance; i >= 0; i--) {
          vectorPath[i] = [lastY, lastX - i];
        }
        lastX -= distance;
        //console.log(vectorPath);
        break;
      case 'U':
        for (let i = 0; i <= distance; i++) {
          vectorPath[i] = [lastY + i, lastX];
        }
        lastY += distance;
        //console.log(vectorPath);
        break;
      case 'D':
        for (let i = distance; i >= 0; i--) {
          vectorPath[i] = [lastY - i, lastX];
        }
        lastY -= distance;
        //console.log(vectorPath);
        break;
    }
    line2Path.push(vectorPath);

  });
  //console.log(line2Path[0]);

  line1Path = line1Path.flatMap(x => x);
  line2Path = line2Path.flatMap(x => x);
  //console.log(line1Path);
  //console.log(line2Path);

  let crossPoints = [];
  let temp;
  for (let i = 0; i < line1Path.length; i++) {
    line1Path[i] = line1Path[i].toString();
  }
  for (let i = 0; i < line2Path.length; i++) {
    line2Path[i] = line2Path[i].toString();
  }
  //console.log(crossPoints);
  //console.log(line1Path);
  //console.log(line2Path);

  for (let i = 0; i < line1Path.length; i++) {
    if (line2Path.indexOf(line1Path[i]) != -1 && line2Path[line2Path.indexOf(line1Path[i])] != '0,0') {
      crossPoints.push(line2Path[line2Path.indexOf(line1Path[i])]);
      //console.log("pushed!", line2Path[line2Path.indexOf(line1Path[i])]);
    }
  }

  console.log("crossPoints:", crossPoints);

  let closestSum = 0;
  let closest;
  let current;
  let sum1 = 0;
  crossPoints.forEach(crossPoint => {
    current = crossPoint.split(',');
    current = [parseInt(current[0]), parseInt(current[1])];
    
    if (closestSum === 0) {
      closestSum = Math.abs(current[0]) + Math.abs(current[1]);
      closest = current;
    } else {
      if (Math.abs(current[0]) + Math.abs(current[1]) < closestSum) {
        closestSum = Math.abs(current[0]) + Math.abs(current[1]);
        closest = current;
      }
    }
  });

  console.log("closest: ", closest);
  console.log("manhattan distance: ", Math.abs(closest[0]) + Math.abs(closest[1]));

});

