    // Program Menampilkan Informasi Mahasiswa dengan For...in Statement
    // eslint-disable-next-line no-unused-vars
    function info() {
        let student = {
          Name : 'Bagus Fadly Hidayatullah',
          Umur : 20,
          Universitas : 'Politeknik Balekambang Jepara'
        };
  
        let result = "";
  
        for (let a in student) {
          result += a + ": " + student[a] + "<br>";
        }
  
        document.getElementById("output").innerHTML = result;
      }