// input module which will focus on managing the user input

const net = require("net");
const { stdin } = require("process");
const { moveDownKey,
  moveLeftKey,
  moveUpKey,
  moveRightKey} = require('./constants')

let connection;

// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // this is the event listener for stdin.
  stdin.on("data", handleUserInput);
  return stdin;
};



// 
const handleUserInput = function(userInput) {

  // \u0003 maps to ctrl+c input
  // console.log(key);

  // if user ctrl + c then exit the terminal.
  if (userInput === '\u0003') {
    process.exit();
  } if (userInput === moveUpKey) { // if userInput = w
    connection.write('Move: up');
  } if (userInput === moveLeftKey) {
    connection.write('Move: left');
  } if (userInput === moveDownKey) {
    connection.write('Move: down');
  } if (userInput === moveRightKey) {
    connection.write('Move: right');
  };

  setTimeout(() => {
    connection.write('Say: yo yo whats up?')
  }, 5000);

};


module.exports = setupInput;