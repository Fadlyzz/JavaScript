/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
//Input
const nama = "Fadly";
const dm = "DM 5000";
const jumlah = 1;
const member = true;

//Input harga
let harga;
switch (dm) {
  case "DM 1000":
    harga = 100000 * jumlah;
    break;
  case "DM 2000":
    harga = 200000 * jumlah;
    break;
  case "DM 3000":
    harga = 300000 * jumlah;
    break;
  case "Dm 4000":
    harga = 400000 * jumlah;
    break;
  case "DM 5000":
    harga = 500000 * jumlah;
}

//Input diskon
let diskon = 0;
if (member) {
  diskon = harga * 0.25;
  total = harga - diskon;
}
//Output
document.getElementById("nama").innerHTML = nama;
document.getElementById("dm").innerHTML = dm;
document.getElementById("harga").innerHTML = harga.toLocaleString();
document.getElementById("diskon").innerHTML = diskon.toLocaleString();
document.getElementById("total").innerHTML = total.toLocaleString();