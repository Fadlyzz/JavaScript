// Program Menentukan Status Nilai Mahasiswa

let nilai = parseFloat(prompt("Masukkan nilai Anda: "));

let status, predikat;

if (nilai >= 80) {
  status = "Lulus";
  predikat = "A";
} else if (nilai >= 70) {
  status = "Lulus";
  predikat = "B";
} else if (nilai >= 60) {
  status = "Lulus";
  predikat = "C";
} else if (nilai >= 50) {
  status = "Tidak Lulus";
  predikat = "D";
} else {
  status = "Tidak Lulus";
  predikat = "E";
}

document.getElementById("1").innerHTML =
"Status Nilai = " + status;
document.getElementById("2").innerHTML =
"Predikat Nilai: " + predikat;
