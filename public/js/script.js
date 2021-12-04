var counter = 0;
const refreshdiv = document.getElementById("refresh-content");
function addToBody() {
  var added = "hello";
  for (var i = 0; i < counter; i++) {
    added += "o";
  }
  added += "<br/>";
  document.body.innerHTML += added;
  counter += 1;
  if (counter < 3) setTimeout(addToBody, 1000);
}
// setTimeout(addToBody, 500);

function reqListener() {
  refreshdiv.innerHTML = "From Ajax call: " + this.responseText + "<br/>";
}

function testAPIReq() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/api");
  oReq.send();
}

setInterval(testAPIReq, 2000);
