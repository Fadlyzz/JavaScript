/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Animasi start
const start = document.getElementById("start");
start.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.4)";
});
start.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Animasi tombol Facebook
const prof = document.getElementById("sos1");
sos1.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.4)";
});
sos1.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Animasi tombol Instagram
const prof1 = document.getElementById("sos2");
sos2.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.4)";
});
sos2.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Animasi tombol Whatsapp
const prof2 = document.getElementById("sos3");
sos3.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.4)";
});
sos3.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Animasi tombol Whatsapp
const prof3 = document.getElementById("sos4");
sos4.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.4)";
});
sos4.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Animasi profil dev
const profdev = document.getElementById("profil");
profil.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.5)";
});
profil.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

var nama1 = ["Profil"];
var namagua = document.getElementById("namagua");
namagua.innerHTML = nama1[0];

// Nama Player
function savePlayerName(event) {
  event.preventDefault();
  const playerNameInput = document.getElementById("namaPlayer").value;
  localStorage.setItem("playerName", playerNameInput);
  window.location.href = "./html/gamelv1.html";
}
