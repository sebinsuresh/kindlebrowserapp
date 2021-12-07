// Call this file like: node.exe client.js <arguments> and it will send
// the sensor data to server.js and die.

import fetch from "node-fetch";

const port = 8081;
const path = "sensor";

const sensordata = {};
if (process.argv.length > 3)
  sensordata[process.argv.slice(2, -1).join(" ")] = process.argv.slice(-1)[0];

fetch(`http://localhost:${port}/${path}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(sensordata),
});
