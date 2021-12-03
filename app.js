const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        body {
          font-size: 150%;
        }
        table.example-table, .example-table th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        </style>
    </head>
    <body>
        Hello from Sebin's PC!<br/>
        <!--table class="example-table">
          <thead>
          <tr>
          <th>1</th>
          <th>2</th>
          </tr>
          </thead>
          <tbody><tr>
          <td>3</td>
          <td>4</td>
          </tr>
          <tr>
          <td>5</td>
          <td>6</td>
          </tr>
          <tr>
          <td></td>
          <td></td>
          </tr>
          </tbody>
        </table --!>
        <script>
          if("ab d ".trim) {
            document.body.innerHTML += "string.trim() available. <br/>";
          } else {
            document.body.innerHTML += "string.trim() NOT available (this browser OLD AF). <br/>";
          }
          var counter = 0;
          function addToBody() {
            var added = "hello";
            for(var i = 0; i < counter; i++) {
              added += "o";
            }
            added += "<br/>";
            document.body.innerHTML += added;
            counter += 1;
            if(counter < 10)
              setTimeout(addToBody,1000);
          }
          setTimeout(addToBody,500);
        </script>
    </body>
    </html>`
  );
});

app.listen(port, () => {
  console.log(`App start listening on ${port}`);
});
