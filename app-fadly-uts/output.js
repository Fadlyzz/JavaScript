        // Ambil parameter dari URL
        const params = new URLSearchParams(window.location.search);

        // Periksa apakah parameter 'nim' tersedia
        if (params.has('nim')) {
            const nim = params.get('nim');
            const nama = params.get('nama');
            const matkul = params.get('matkul');
            const nilaiHuruf = params.get('nilaiHuruf');
            const indeksNilai = params.get('indeksNilai');

            // Tampilkan nilai pada halaman
            document.getElementById('result-nim').textContent = nim;
            document.getElementById('result-nama').textContent = nama;
            document.getElementById('result-matkul').textContent = matkul;
            document.getElementById('result-nilai-huruf').textContent = nilaiHuruf;
            document.getElementById('result-indeks-nilai').textContent = indeksNilai;
        }