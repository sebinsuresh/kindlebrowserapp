# HWInfo Monitoring Data to browser

## Goal

The goal of this project is to create a HWInfo and node-based (for the most part) tool to get hardware sensor data from
the PC and make it available to a client browser. The client browser would be an old and low-end browser (Kindle 4
Experimental Browser in my case).

I've found two ways to get sensor data from HWInfo into a node program:

1. Setting up alerts for individual sensors and triggering execustion of some application on that alert (what I'll use).
2. Logging the entire sensor data and reading the tail of that log file to get the sensor data.
3. (Might be the best approach) Use the approach Rainmeter takes: Read values written to Windows Registry by HWInfo.
   [Read here](https://docs.rainmeter.net/tips/hwinfo/)

There might be other ways using some dlls provided by HWInfo, but I wanted to see if this would work.

## Starting server

`npm start`

This will listen to the sensor data calls coming in at "/sensor" as JSON-formatted POST data.

## Sending data to server

From the HWInfo sensors window, select the sensors you want, right click -> "Alert settings" -> "Enable Alerting" then
add some "If value" parameteres appropriately, and check "Run a Program" (This will immediately start running the
cmd program by default!). Add the windowless nodejs executable as the program, and the arguments `client.js %s %v`.
(This requires the executable to be in the same directotry as `client.js` file).

## Creating windowless nodejs executable for Windows

`npx create-nodew-exe "C:\Program Files\nodejs\node.exe" ./nodew.exe`

Change the first path to your installation of node, and the second path to where you want the windowless node executable
to be created at.
