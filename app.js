const express = require("express");
const { engine } = require("express-handlebars");
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

app.get("/", (req, res) => {
  // TODO: Find something to polyfill for Kindle browser.
  res.render("home");
});

// Test api call
app.get("/api", (req, res) => {
  res.json({ testKey: "yay?" });
});

const port = 8081;

app.listen(port, () => {
  console.log(`App start listening on ${port}`);
});
