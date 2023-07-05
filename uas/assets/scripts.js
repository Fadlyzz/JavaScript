// Array yang berisi pertanyaan, pilihan jawaban, dan jawaban yang benar
var questions = [
  {
    question: "Siapakah Presiden Pertama Indonesia?",
    options: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"],
    answer: 0,
  },
  {
    question: "Kapan Indonesia meraih kemerdekaan?",
    options: ["17 Agustus 1945", "20 Mei 1998", "1 Juni 1965", "21 April 1879"],
    answer: 0,
  },
  {
    question: "Apa ibukota Indonesia?",
    options: ["Jakarta", "Surabaya", "Bandung", "Yogyakarta"],
    answer: 0,
  },
  // Tambahkan pertanyaan lain sesuai kebutuhan
];

var currentQuestionIndex = 0; // Indeks pertanyaan yang sedang ditampilkan
var score = 0; // Skor pemain

var questionElement = document.getElementById("question"); // Element untuk menampilkan pertanyaan
var optionsElement = document.getElementById("options"); // Element untuk menampilkan pilihan jawaban
var resultElement = document.getElementById("result"); // Element untuk menampilkan hasil jawaban
var scoreElement = document.getElementById("score"); // Element untuk menampilkan skor

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex]; // Ambil pertanyaan saat ini dari array berdasarkan indeks
  questionElement.textContent = currentQuestion.question; // Tampilkan pertanyaan

  optionsElement.innerHTML = ""; // Kosongkan elemen pilihan jawaban sebelum menambahkan pilihan baru
  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = document.createElement("div"); // Buat elemen div baru untuk setiap pilihan jawaban
    option.className = "option"; // Tambahkan kelas "option" untuk styling
    option.textContent = currentQuestion.options[i]; // Tampilkan pilihan jawaban
    option.setAttribute("data-index", i); // Tambahkan atribut data-index dengan nilai indeks pilihan jawaban
    option.addEventListener("click", checkAnswer); // Tambahkan event listener untuk memeriksa jawaban saat pilihan dipilih
    optionsElement.appendChild(option); // Tambahkan pilihan jawaban ke dalam elemen options
  }
}

function checkAnswer(event) {
  var selectedOptionIndex = parseInt(event.target.getAttribute("data-index")); // Ambil indeks pilihan jawaban yang dipilih
  var currentQuestion = questions[currentQuestionIndex]; // Ambil pertanyaan saat ini

  if (selectedOptionIndex === currentQuestion.answer) {
    score++; // Jika jawaban benar, tambahkan skor
    resultElement.textContent = "Jawaban Anda benar!"; // Tampilkan pesan jawaban benar
    resultElement.style.color = "green"; // Beri warna hijau pada pesan jawaban benar
  } else {
    resultElement.textContent = "Jawaban Anda salah!"; // Tampilkan pesan jawaban salah
    resultElement.style.color = "red"; // Beri warna merah pada pesan jawaban salah
  }

  currentQuestionIndex++; // Pindah ke pertanyaan berikutnya
  scoreElement.textContent = "Skor: " + score; // Tampilkan skor terkini

  if (currentQuestionIndex < questions.length) {
    displayQuestion(); // Jika masih ada pertanyaan yang belum ditampilkan, tampilkan pertanyaan berikutnya
  } else {
    optionsElement.innerHTML = ""; // Kosongkan elemen pilihan jawaban
    questionElement.textContent = "Quiz Selesai!"; // Tampilkan pesan quiz selesai
    resultElement.textContent = ""; // Kosongkan elemen hasil
  }
}

displayQuestion(); // Tampilkan pertanyaan pertama saat halaman dimuat
