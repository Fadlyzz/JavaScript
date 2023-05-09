/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
//Input
const nama = "Fadly";
const hp = "Redmi 10C";
const jumlah = 2;
const member = true;

//Input harga
let harga;
switch (hp) {
  case "Redmi 10A":
    harga = 1500000 * jumlah;
    break;
  case "Redmi 10C":
    harga = 1800000 * jumlah;
    break;
  case "Redmi Note 10":
    harga = 2500000 * jumlah;
    break;
  case "Redmi Note 10 Pro":
    harga = 3500000 * jumlah;
    break;
  case "Redmi Note 11 Pro":
    harga = 3999999 * jumlah;
    break;
    default:
      harga=0;
  }

//Input diskon
let diskon = 0;
if (member) {
  diskon = harga * 0.25;
  total = harga - diskon;
}
//Output
document.getElementById("nama").innerHTML = nama;
document.getElementById("hp").innerHTML = hp;
document.getElementById("jumlah").innerHTML = jumlah+" Unit"
document.getElementById("harga").innerHTML = harga.toLocaleString();
document.getElementById("diskon").innerHTML = diskon.toLocaleString();
document.getElementById("total").innerHTML = total.toLocaleString();