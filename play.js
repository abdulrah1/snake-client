const net = require("net");
const { stdin } = require("process");
const connect = require('./client');

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // this is the event listener for stdin.
  stdin.on("data", handleUserInput);
  return stdin;
};



// 
const handleUserInput = function (userInput) {
  // \u0003 maps to ctrl+c input
 // console.log(key);

 // if user ctrl + c then exit the terminal.
if (userInput === '\u0003') {
  process.exit();
}
};


setupInput();