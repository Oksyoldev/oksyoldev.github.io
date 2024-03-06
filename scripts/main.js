var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/trackoutLease.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Добро пожаловать на сайт продакшн OksyolBeatz, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "OksyolBeatz продакшн, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
