// Call this file like: node.exe client.js <arguments> and it will send
// the sensor data to server.js and die.

import fetch from "node-fetch";

const port = 8081;
const path = "sensor";

if (process.argv.length < 4) {
  process.exit();
}

const sensordata = [
  process.argv.slice(2, -1).join(" ").replace(/[,]/g, ""),
  process.argv.slice(-1)[0].replace(/[,]/g, ""),
];

fetch(`http://localhost:${port}/${path}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(sensordata),
});
