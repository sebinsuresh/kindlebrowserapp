if ("ab d ".trim) {
  document.body.innerHTML += "string.trim() available.<br/>";
} else {
  document.body.innerHTML += "Browser older than ES5(2009). <br/>";
}
if (XMLHttpRequest) {
  document.body.innerHTML += "XMLHttpRequest available. <br/>";
} else {
  document.body.innerHTML += "XMLHttpRequest not available... <br/>";
}
var counter = 0;
function addToBody() {
  var added = "hello";
  for (var i = 0; i < counter; i++) {
    added += "o";
  }
  added += "<br/>";
  document.body.innerHTML += added;
  counter += 1;
  if (counter < 10) setTimeout(addToBody, 1000);
}
setTimeout(addToBody, 500);
