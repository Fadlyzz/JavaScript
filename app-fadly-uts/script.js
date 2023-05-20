const form = document.getElementById('nilai-form');
        const resultDiv = document.getElementById('result');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nama = document.getElementById('nama').value;
            const nim = document.getElementById('nim').value;
            const matkul = document.getElementById('matkul').value;
            const nilai = parseInt(document.getElementById('nilai').value);

            let nilaiHuruf, indeksNilai;

            if (nilai >= 85) {
                nilaiHuruf = 'A';
                indeksNilai = 4.00;
            } else if (nilai >= 79) {
                nilaiHuruf = 'A-';
                indeksNilai = 3.67;
            } else if (nilai >= 74) {
                nilaiHuruf = 'B+';
                indeksNilai = 3.33;
            } else if (nilai >= 69) {
                nilaiHuruf = 'B';
                indeksNilai = 3.00;
            } else if (nilai >= 64) {
                nilaiHuruf = 'B-';
                indeksNilai = 2.67;
            } else if (nilai >= 59) {
                nilaiHuruf = 'C+';
                indeksNilai = 2.33;
            } else if (nilai >= 54) {
                nilaiHuruf = 'C';
                indeksNilai = 2.00;
            } else if (nilai >= 41) {
                nilaiHuruf = 'D';
                indeksNilai = 1.00;
            } else {
                nilaiHuruf = 'E';
                indeksNilai = 0.00;
            }

            document.getElementById('result-nim').textContent = nim;
            document.getElementById('result-nama').textContent = nama;
            document.getElementById('result-matkul').textContent = matkul;
            document.getElementById('result-nilai-huruf').textContent = nilaiHuruf;
            document.getElementById('result-indeks-nilai').textContent = indeksNilai.toFixed(2);

            resultDiv.style.display = 'block';
        });

        form.addEventListener('reset', function() {
            resultDiv.style.display = 'none';
        });