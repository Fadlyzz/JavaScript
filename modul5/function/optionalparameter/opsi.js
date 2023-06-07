// Fungsi untuk menampilkan pesan pada halaman website
function displayMessage(message, backgroundColor = 'white') {
    // Membuat elemen paragraf baru
    var paragraph = document.createElement('p');
    
    // Menambahkan teks pesan ke elemen paragraf
    paragraph.textContent = message;
    
    // Mengatur warna latar belakang elemen paragraf
    paragraph.style.backgroundColor = backgroundColor;
    
    // Menambahkan elemen paragraf ke body halaman
    document.body.appendChild(paragraph);
  }
  
  // Memanggil fungsi displayMessage dengan parameter message saja
  displayMessage('Tanpa Background');
  
  // Memanggil fungsi displayMessage dengan parameter message dan backgroundColor
  displayMessage('Dengan Background', 'blue');
  