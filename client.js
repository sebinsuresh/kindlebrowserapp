// Call this file like: node.exe client.js <arguments> and it will send
// the sensor data to server.js and die.

import fetch from "node-fetch";

const port = 8081;
const path = "sensor";
fetch(`http://localhost:${port}/${path}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ key1: "val1", key2: "val2" }), // dummy data
  body: JSON.stringify(process.argv),
});
