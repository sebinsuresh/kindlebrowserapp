import express from "express";
import { engine } from "express-handlebars";

// const cors = require("cors");
const app = express();

// Use hbs for templating. The name "hbs" instead of "handlebars" must be
// used everywhere in order for it to work correctly with that extension.
app.engine("hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views/");

// Serve files in public directory
app.use(express.static("public"));

// Allow cross origin requests - might not be needed here.
// app.use(cors());

// Use the Json parser middleware from express
app.use(express.json());

app.get("/", (req, res) => {
  // TODO: Find something to polyfill for Kindle browser.
  res.render("home");
});

// Test api call
app.get("/api", (req, res) => {
  res.json({ randval: ~~(100 * Math.random()) });
});

app.post("/sensor", async (req, res) => {
  console.log("Sensor data arrived!", req.body);
  res.sendStatus(200);
});

const port = 8081;

app.listen(port, () => {
  console.log(`App start listening on ${port}`);
});
