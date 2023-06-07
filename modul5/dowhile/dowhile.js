// Program Menampilkan Angka 1-5 dengan Do While Statement
// eslint-disable-next-line no-unused-vars
function displayNumbers() {
    let counter = 1;
    let result = "";

    do {
      result += counter + " ";
      counter++;
    } while (counter <= 5);

    document.getElementById("output").textContent = result;
  }