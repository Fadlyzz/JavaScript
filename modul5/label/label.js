    // Program Menampilkan Pola Bintang dengan Labeled Statement
    // eslint-disable-next-line no-unused-vars
    function bintang() {
        let pattern = "";
  
        outerLoop: for (let i = 1; i <= 5; i++) {
          for (let j = 1; j <= i; j++) {
            pattern += "* ";
  
            if (i === 3 && j === 4) {
              break outerLoop;
            }
          }
          pattern += "<br>";
        }
  
        document.getElementById("output").innerHTML = pattern;
      }