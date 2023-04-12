// Array untuk menyimpan data nama teman dan hobi
var namaTeman = ["Atep","Anam","Khoirul","Fadly","Fahmi","Bagus"];
namaTeman.push("Rio");
delete namaTeman[5];
document.getElementById("1").innerHTML = 
"Daftar Nama = "+(namaTeman);

var hobi = ["Makan","Tidur","Main Bola","Basket","Badminton","Jogging"];
hobi.push("Turu");
delete hobi[1];
document.getElementById("2").innerHTML = 
"Daftar Hobi = "+(hobi);