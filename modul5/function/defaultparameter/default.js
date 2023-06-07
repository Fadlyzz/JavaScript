// Fungsi untuk menampilkan pesan pada halaman website
function displayMessage(message = 'Default pesan') {
    // Membuat elemen paragraf baru
    var paragraph = document.createElement('p');
    
    // Menambahkan teks pesan ke elemen paragraf
    paragraph.textContent = message;
    
    // Menambahkan elemen paragraf ke body halaman
    document.body.appendChild(paragraph);
  }
  
  // Memanggil fungsi displayMessage tanpa menyediakan nilai parameter
  displayMessage();
  
  // Memanggil fungsi displayMessage dengan menyediakan nilai parameter
  displayMessage('Halo, ini adalah pesan khusus.');
  