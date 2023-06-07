    // Program Menampilkan Bilangan Ganjil dari Array dengan Continue Statement
    // eslint-disable-next-line no-unused-vars
    function displayOddNumbers() {
        let numbers = [2, 5, 8, 3, 7, 4, 9];
        let result = "";
  
        for (let number of numbers) {
          if (number % 2 === 0) {
            continue;
          }
  
          result += number + " ";
        }
  
        document.getElementById("output").textContent = result !== "" ? `Bilangan ganjil: ${result}` : "Tidak ditemukan bilangan ganjil";
      }