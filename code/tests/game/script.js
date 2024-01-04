//text flicker
function flickerText() {
  const textElement = document.getElementById("flickerText");
  setInterval(() => {
    const randomVisibility = Math.random() > 0.2 ? "visible" : "hidden";
    textElement.style.visibility = randomVisibility;
  }, 300);
}
document.addEventListener("DOMContentLoaded", flickerText);

//model that opens when clicked a button
function showModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function hideModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


//responsive navigation bar
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
