// This will serve as your main file through which you will launch the game client.
// This is the client's side


const net = require("net");

// establishes a connection with the game server
const connect = function () {

  
  const conn = net.createConnection({
    host: '172.31.117.246',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle incoming data from the server and console.log it for the player.
  conn.on("data", (data) => {
  console.log('Server says: ', data)
});

  ////The conn object that Node returned to you represents the connection that you have with the server.
  return conn;
};

console.log("Connecting ...");
connect();