    // Program Mencari Bilangan Genap Terkecil dengan Break Statement
    // eslint-disable-next-line no-unused-vars
    function cariangkakecil() {
        let numbers = [3, 5, 1, 9, 6, 2, 7];
        let smallestEven = null;
  
        for (let number of numbers) {
          if (number % 2 === 0) {
            smallestEven = number;
            break;
          }
        }
  
        document.getElementById("output").textContent = smallestEven !== null ? `Bilangan genap terkecil: ${smallestEven}` : "Tidak ditemukan bilangan genap";
      }