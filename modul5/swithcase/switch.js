// Program Menentukan Hari dalam Seminggu

let dayNumber = parseInt(prompt("Masukkan nomor hari (1-7): "));
let day;

switch (dayNumber) {
  case 1:
    day = "Minggu";
    break;
  case 2:
    day = "Senin";
    break;
  case 3:
    day = "Selasa";
    break;
  case 4:
    day = "Rabu";
    break;
  case 5:
    day = "Kamis";
    break;
  case 6:
    day = "Jumat";
    break;
  case 7:
    day = "Sabtu";
    break;
  default:
    day = "Invalid";
    break;
}

document.getElementById("1").innerHTML = 
"Hari ke-" + dayNumber + " adalah " + day;
