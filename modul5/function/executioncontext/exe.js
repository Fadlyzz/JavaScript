    // Variabel Global
    var message = "Bagian h1 diatas sudah saya ganti dengan Function Execution Context";

    // Deklarasi Function
    function greet() {
      document.getElementById("2").innerHTML = 
      "Note = " +message;
    }

    // Function call
    greet();

    // Akses DOM Element dan Mengubah konten
    var demoElement = document.getElementById("1");
    demoElement.textContent = "Contoh Execution Context";