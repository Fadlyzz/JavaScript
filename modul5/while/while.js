// Program Menampilkan Angka 1-5 dengan While Statement
// eslint-disable-next-line no-unused-vars
function displayNumbers() {
    let counter = 1;
    let result = "";

    while (counter <= 5) {
      result += counter + " ";
      counter++;
    }

    document.getElementById("output").textContent = result;
  }