// Menggunakan let (variabel bisa diubah)
let namalet = "Bagus"
	namalet = "Fadly"

// Menggunakan Const (Konstanta tidak bisa diubah)
const konstan = "19 Tahun"

// Menggunakan var (harus menggunakan function agar tidak ditugaskan menjadi objek global
var namavar
function namavar(){
	var nama = "Bagus Fadly Hidayatullah"
	console.log(nama)
}
namavar()

console.log(namalet)
console.log(konstan)