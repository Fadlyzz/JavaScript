    // Program Menampilkan Nama-nama Buah dengan For...of Statement
    // eslint-disable-next-line no-unused-vars
    function displayFruits() {
        let fruits = ['Apel', 'Jeruk', 'Mangga', 'Pisang', 'Semangka'];
        let result = "";
  
        for (let fruit of fruits) {
          result += fruit + " ";
        }
  
        document.getElementById("output").textContent = result;
      }