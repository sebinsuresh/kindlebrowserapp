const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views/");

app.use(express.static("public"));

app.get("/", (req, res) => {
  // TODO: Find something to polyfill for Kindle browser.
  res.render("home");
});

const port = 8081;

app.listen(port, () => {
  console.log(`App start listening on ${port}`);
});
