var counter = 0;
var refreshOn = true;
const refreshdiv = document.getElementById("refresh-content");
const refreshbtn = document.getElementById("refresh-control-button");

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
  refreshdiv.innerHTML = this.responseText.replace(/[,]/g, "<br/>") + "<br/>";
}

function testAPIReq() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/api");
  oReq.send();
}

var refreshInterval = setInterval(testAPIReq, 2000);

refreshbtn.addEventListener("click", function () {
  refreshOn = !refreshOn;
  if (!refreshOn) {
    clearInterval(refreshInterval);
    refreshbtn.innerText = "Start";
    refreshdiv.innerText = "Stopped.";
  } else {
    refreshInterval = setInterval(testAPIReq, 2000);
    refreshbtn.innerText = "Stop";
  }
});
