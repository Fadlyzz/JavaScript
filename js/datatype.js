document.write("<hr>");
var hasil = document.getElementById("cek");
hasil.innerHTML = "<p>Praktik Pemrograman Komputer";
// Undefined
var x;
console.log(x);
// Number
var num1 = 100;
var num2 = 50;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
// Big Int
const a = 290743758934759036458767365783659365;
const b = 374567834657834658736875639865783657;
console.log(a);
console.log(b);
// String
const strnama = "Fadly";
console.log(strnama);
// Boolean
var c = true;
var d = false;
console.log(c.valueOf());
console.log(d.valueOf());
//Boolean Kondisi
var e = 12 > 3;
if (e == true){
    console.log("Benar");
} else {
    console.log("Salah");
}
// Null dan Objek
var f;
f = null;
var g=null;
  
console.log(f);          // null
console.log(g);          // null
console.log(typeof f);   // object