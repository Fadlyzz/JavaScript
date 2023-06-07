    // Program Menampilkan Angka 1-5 dengan For Statement
    // eslint-disable-next-line no-unused-vars
    function displayNumbers() {
        let result = "";
  
        for (let counter = 1; counter <= 5; counter++) {
          result += counter + " ";
        }
  
        document.getElementById("output").textContent = result;
      }