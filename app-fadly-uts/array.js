var NamaMhs = ["Fadly", "Anam", "Hasan","Fahmi"];
    var TahunLahir = [2003, 2004, 2003, 2002];
    var HandphoneMhs = ["083866948227", "085640313759", "081111222333", "0895714718060"];

    var table = document.getElementById("mahasiswaTable");

    // Fungsi untuk menampilkan data array pada tabel
    function displayData() {
      for (var i = 0; i < NamaMhs.length; i++) {
        var row = table.insertRow(-1);
        var namaCell = row.insertCell(0);
        var tahunCell = row.insertCell(1);
        var handphoneCell = row.insertCell(2);
        var actionCell = row.insertCell(3);

        namaCell.innerHTML = NamaMhs[i];
        tahunCell.innerHTML = TahunLahir[i];
        handphoneCell.innerHTML = HandphoneMhs[i];
        actionCell.innerHTML = '<div class="action-buttons">' +
          '<button onclick="editMahasiswa(' + i + ')">Edit</button>' +
          '<button onclick="deleteMahasiswa(' + i + ')">Hapus</button>' +
          '</div>';
      }
    }

    // Fungsi untuk menambah data mahasiswa
    function addMahasiswa(event) {
      event.preventDefault();

      var namaInput = document.getElementById("namaInput");
      var tahunInput = document.getElementById("tahunInput");
      var handphoneInput = document.getElementById("handphoneInput");

      var nama = namaInput.value;
      var tahunLahir = parseInt(tahunInput.value);
      var handphone = handphoneInput.value;

      NamaMhs.push(nama);
      TahunLahir.push(tahunLahir);
      HandphoneMhs.push(handphone);

      var newRow = table.insertRow(-1);
      var namaCell = newRow.insertCell(0);
      var tahunCell = newRow.insertCell(1);
      var handphoneCell = newRow.insertCell(2);
      var actionCell = newRow.insertCell(3);

      namaCell.innerHTML = nama;
      tahunCell.innerHTML = tahunLahir;
      handphoneCell.innerHTML = handphone;
      actionCell.innerHTML = '<div class="action-buttons">' +
        '<button onclick="editMahasiswa(' + (NamaMhs.length - 1) + ')">Edit</button>' +
        '<button onclick="deleteMahasiswa(' + (NamaMhs.length - 1) + ')">Hapus</button>' +
        '</div>';

      // Reset input fields
      namaInput.value = "";
      tahunInput.value = "";
      handphoneInput.value = "";
    }

    // Fungsi untuk mengedit data mahasiswa
    function editMahasiswa(index) {
      var nama = prompt("Masukkan Nama Mahasiswa:", NamaMhs[index]);
      var tahunLahir = parseInt(prompt("Masukkan Tahun Lahir:", TahunLahir[index]));
      var handphone = prompt("Masukkan Handphone:", HandphoneMhs[index]);

      NamaMhs[index] = nama;
      TahunLahir[index] = tahunLahir;
      HandphoneMhs[index] = handphone;

      // Update data di tabel
      var rows = table.getElementsByTagName("tr");
      var namaCell = rows[index + 1].cells[0];
      var tahunCell = rows[index + 1].cells[1];
      var handphoneCell = rows[index + 1].cells[2];

      namaCell.innerHTML = nama;
      tahunCell.innerHTML = tahunLahir;
      handphoneCell.innerHTML = handphone;
    }

    // Fungsi untuk menghapus data mahasiswa
    function deleteMahasiswa(index) {
      NamaMhs.splice(index, 1);
      TahunLahir.splice(index, 1);
      HandphoneMhs.splice(index, 1);

      // Hapus data di tabel
      table.deleteRow(index + 1);
    }

    displayData(); // Menampilkan data saat halaman dimuat

    // Event listener untuk form penambahan mahasiswa
    var addForm = document.getElementById("addForm");
    addForm.addEventListener("submit", addMahasiswa);