const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

// Use hbs for templating. The name "hbs" instead of "handlebars" must be
// used everywhere in order for it to work correctly with that extension.
app.engine("hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views/");

// Serve files in public directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  // TODO: Find something to polyfill for Kindle browser.
  res.render("home");
});

const port = 8081;

app.listen(port, () => {
  console.log(`App start listening on ${port}`);
});
