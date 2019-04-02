// Rover Object Goes Here
// ======================
let rover = {
  direction: "N"
}
// ======================

let lastCommand = '';

let y = 0;
let x = 0;

  
// rffrfflfrff  3,3  obstacle found at 4,3  
let position = [
  ['0, 0',  '0, 1',   '0, 2',   'R',      '0, 4',   '0, 5',   '0, 6',   '0, 7',   '0, 8',   '0, 9'],
  ['X',     '1, 1',   '1, 2',   '1, 3',   '1, 4',   '1, 5',   'X',      '1, 7',   '1, 8',   '1, 9'],
  ['2, 0',  'X',      '2, 2',   '2, 3',   '2, 4',   '2, 5',   '2, 6',   '2, 7',   '2, 8',   '2, 9'],
  ['3, 0',  '3, 1',   '3, 2',   '3, 3',   '3, 4',   '3, 5',   '3, 6',   '3, 7',   '3, 8',   '3, 9'],
  ['4, 0',  '4, 1',   '4, 2',   'X',      '4, 4',   '4, 5',   '4, 6',   '4, 7',   '4, 8',   '4, 9'],
  ['5, 0',  'R',      '5, 2',   '5, 3',   '5, 4',   '5, 5',   '5, 6',   '5, 7',   '5, 8',   '5, 9'],
  ['6, 0',  '6, 1',   '6, 2',   'R',      '6, 4',   '6, 5',   '6, 6',   '6, 7',   '6, 8',   '6, 9'],
  ['7, 0',  '7, 1',   '7, 2',   '7, 3',   '7, 4',   '7, 5',   '7, 6',   '7, 7',   '7, 8',   '7, 9'],
  ['8, 0',  '8, 1',   '8, 2',   '8, 3',   '8, 4',   '8, 5',   '8, 6',   '8, 7',   '8, 8',   '8, 9'],
  ['9, 0',  '9, 1',   '9, 2',   '9, 3',   '9, 4',   '9, 5',   '9, 6',   '9, 7',   '9, 8',   '9, 9'],
];

let travelLog = [];

function turnLeft(rover){

  // Logs for checking direction and commands
  /* console.log('Rover Direccion: ' + rover.direction);
  console.log('Previous command: ' + lastCommand);
  console.log('Next command: ' + 'Turn Left');

  lastCommand = 'Turn Left'; */
  switch(rover.direction) {

    case 'N':
      rover.direction = 'W';
      // console.log("Rover Direccion: " + rover.direction);
    break;

    case 'E':
      rover.direction = 'N';
      // console.log("Rover Direccion: " + rover.direction);
    break;

    case 'S':
      rover.direction = 'E';
      // console.log("Rover Direccion: " + rover.direction);
    break;

    case 'W':
      rover.direction = 'S';
      // console.log("Rover Direccion: " + rover.direction);
    break;

  }


  // console.log("turnLeft was called!");
  
}

function turnRight(rover){

  // Console logs for checking direction and commands
  /* console.log('Rover Direccion: ' + rover.direction);
  console.log('Previous command: ' + lastCommand);
  console.log('Next command: ' + 'Turn Right');

  lastCommand = 'Turn Right'; */
  switch(rover.direction) {

    case 'N':
      rover.direction = 'E';
      // console.log("Rover Direccion: " + rover.direction); // Testing rover direction
    break;

    case 'E':
      rover.direction = 'S';
      // console.log("Rover Direccion: " + rover.direction);
    break;

    case 'S':
      rover.direction = 'W';
      // console.log("Rover Direccion: " + rover.direction);
    break;

    case 'W':
      rover.direction = 'N';
      // console.log("Rover Direccion: " + rover.direction);
    break;

  }

  // console.log("turnRight was called!");
}

function moveForward(rover){

  // Console logs for checking direction and commands
  /* console.log('Rover Direccion: ' + rover.direction);
  console.log('Previous command: ' + lastCommand);
  console.log('Next command: ' + 'Forward');
  
  lastCommand = 'Forward'; */
  switch(rover.direction) {

    case 'N':
      if (x - 1 < 0) {
        console.log('Signal will be lost ground control!');
      } else if (position[x-1][y] === 'X' || position[x-1][y] === 'R') {
        
        switch(position[x-1][y]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        x -= 1;
        logPosition();
      }
    break;

    case 'E':
      if (y + 1 > 9) {
        console.log('Signal will be lost ground control!');
      } else if (position[x][y+1] === 'X' || position[x][y+1] === 'R') {
        
        switch(position[x][y+1]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        y += 1;
        logPosition();
      }
    break;

    case 'S':
      if (x + 1 > 9) {
        console.log('Signal will be lost ground control!');
      } else if (position[x+1][y] === 'X' || position[x+1][y] === 'R') {
        
        switch(position[x+1][y]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        x += 1;
        logPosition();
      }
    break;

    case 'W':
      if (y - 1 < 0) {
        console.log('Signal will be lost ground control!');
      } else if (position[x][y-1] === 'X' || position[x][y-1] === 'R') {
        
        switch(position[x][y-1]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        y -= 1;
        logPosition();
      }
    break;

  }
  
  // console.log("moveForward was called")
}

function moveBackwards(rover){

  // Console logs for checking direction and commands
  /* console.log('Rover Direccion: ' + rover.direction);
  console.log('Previous command: ' + lastCommand);
  console.log('Next command: ' + 'Backward');
  
  lastCommand = 'Backward'; */
  switch(rover.direction) {

    case 'N':
      if (x + 1 > 9) {
        console.log('Signal will be lost ground control!');
      } else if (position[x+1][y] === 'X' || position[x+1][y] === 'R') {
        
        switch(position[x+1][y]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        x += 1;
        logPosition();
      }
    break;

    case 'E':
      if (y - 1 < 0) {
        console.log('Signal will be lost ground control!');
      } else if (position[x][y-1] === 'X' || position[x][y-1] === 'R') {
        
        switch(position[x][y-1]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        y -= 1;
        logPosition();
      }
    break;

    case 'S':
      if (x - 1 < 0) {
        console.log('Signal will be lost ground control!');
      } else if (position[x-1][y] === 'X' || position[x-1][y] === 'R') {
        
        switch(position[x-1][y]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        x -= 1;
        logPosition();
      }
    break;

    case 'W':
      if (y + 1 > 9) {
        console.log('Signal will be lost ground control!');
      } else if (position[x][y+1] === 'X' || position[x][y+1] === 'R') {
        
        switch(position[x][y+1]) {
          case 'X':
            console.log('Obstacle found');
          break;

          case 'R':
            console.log('Rover found');
          break;
        }

      } else {
        y += 1;
        logPosition();
      }
    break;

  }
  
  // console.log("moveForward was called")
}

function commands(str) {
  for (let i = 0; i < str.length; i++) {

    let command = str.charAt(i);
    switch(command) {

      case 'f':
        moveForward(rover);
      break;

      case 'r':
        turnRight(rover);
      break;

      case 'l':
        turnLeft(rover);
      break;

      case 'b':
        moveBackwards(rover);
      break;

      default:
        console.log('Command not valid. Please try again');
      break;

    }

  }
}

function logPosition() {
  travelLog.push(`${x}, ${y}`);
}

function showPositionLog() {
  for (let i = 0; i < travelLog.length; i++) {
    console.log(travelLog[i]);
  }
}

commands('rffrfflfrff');
showPositionLog();


