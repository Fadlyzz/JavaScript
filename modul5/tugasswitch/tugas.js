// Program Penilaian Tugas Siswa

// Meminta input nama dan nilai tugas siswa
let nama = prompt("Masukkan Nama Siswa: ");
let nilaiTugas = parseFloat(prompt("Masukkan Nilai Tugas Siswa: "));

// Inisialisasi variabel grade dan keterangan
let grade;
let keterangan;

// Evaluasi nilai tugas menggunakan multiconditional statement
if (nilaiTugas >= 90) {
  grade = "A";
} else if (nilaiTugas >= 80) {
  grade = "B";
} else if (nilaiTugas >= 70) {
  grade = "C";
} else if (nilaiTugas >= 60) {
  grade = "D";
} else {
  grade = "E";
}

// Menggunakan switch style untuk menentukan keterangan berdasarkan grade
switch (grade) {
  case "A":
    keterangan = "Sangat baik";
    break;
  case "B":
    keterangan = "Baik";
    break;
  case "C":
    keterangan = "Cukup";
    break;
  case "D":
    keterangan = "Kurang";
    break;
  case "E":
    keterangan = "Sangat kurang";
    break;
  default:
    keterangan = "Tidak valid";
    break;
}

// Menampilkan hasil penilaian
document.getElementById("1").innerHTML = 
"Nama Siswa: " + nama;
document.getElementById("2").innerHTML = 
"Nilai Tugas: " + nilaiTugas;
document.getElementById("3").innerHTML = 
"Grade: " + grade;
document.getElementById("4").innerHTML = 
"Keterangan: " + keterangan;
