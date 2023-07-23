// Menginisialisasi dan Memanggil canvas
const canvas = document.querySelector("canvas");
// Metode mendapat objek 2 dimensi
const c = canvas.getContext("2d");

// Mengatur lebar dan tinggi canvas
canvas.width = 1024;
canvas.height = 576;

// Memanggil Nama Player
const playerName = localStorage.getItem("playerName");
const playerNameElement = document.getElementById("namaPlayer");
playerNameElement.textContent = playerName ? playerName : "Guest";

// gravitasi
const gravity = 0.5;

// Deklarasi Player
class Player {
  // Properti Player
  constructor() {
    // Kecepatan player
    this.speed = 5;
    // Menyimpan posisi player dalam layar
    this.position = {
      x: 100,
      y: 100,
    };
    // Menyimpan kecepatan player dalam 1 frame
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 66;
    this.height = 150;

    this.image = spriteStandRightImage;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: spriteStandRightImage,
        left: spriteStandLeftImage,
        cropWidth: 177,
        width: 66,
      },
      run: {
        right: spriteRunRightImage,
        left: spriteRunLeftImage,
        cropWidth: 341,
        width: 127.875,
      },
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 177;
  }

  // Metode Menggambar Player didalam Canvas
  draw() {
    c.drawImage(
      //  Menyimpan sprite gambar
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  //Metode untuk memperbarui posisi dan Animasi gambar Player
  update() {
    this.frames++;

    if (
      this.frames > 59 &&
      (this.currentSprite === this.sprites.stand.right ||
        this.currentSprite === this.sprites.stand.left)
    )
      this.frames = 0;
    else if (
      this.frames > 29 &&
      (this.currentSprite === this.sprites.run.right ||
        this.currentSprite === this.sprites.run.left)
    )
      this.frames = 0;

    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
  }
}

// Membuat Objek Platform
class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    // Gambar platform menggunakan gambar
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

// Membuat Objek generic
class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    // Gambar platform menggunakan gambar
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

// Mengambil dan Menginisialisasi gambar untuk game
// memberikan atribut src
const hills = document.getElementById("hills");
const hillsImage = new Image();
hillsImage.src = hills.src;

const platform = document.getElementById("platform");
const platformImage = new Image();
platformImage.src = platform.src;

const background = document.getElementById("background");
const backgroundImage = new Image();
backgroundImage.src = background.src;

const platformSmallTall = document.getElementById("platformSmallTall");
const platformSmallTallImage = new Image();
platformSmallTallImage.src = platformSmallTall.src;

const spriteRunLeft = document.getElementById("spriteRunLeft");
const spriteRunLeftImage = new Image();
spriteRunLeftImage.src = spriteRunLeft.src;

const spriteRunRight = document.getElementById("spriteRunRight");
const spriteRunRightImage = new Image();
spriteRunRightImage.src = spriteRunRight.src;

const spriteStandLeft = document.getElementById("spriteStandLeft");
const spriteStandLeftImage = new Image();
spriteStandLeftImage.src = spriteStandLeft.src;

const spriteStandRight = document.getElementById("spriteStandRight");
const spriteStandRightImage = new Image();
spriteStandRightImage.src = spriteStandRight.src;

let player = new Player();
let platforms = [];
let genericObjects = [];
let currentKey;

// Ambil elemen nomor level
const levelNumberElement = document.getElementById("levelNumber");

// Fungsi untuk mengganti nomor level dan menampilkan di elemen HTML
function drawLevel(levelNumber) {
  levelNumberElement.textContent = "Level " + levelNumber;
}

// Pop Up
function showPopup(message, callback) {
  const popup = document.getElementById("popup");
  const btnNextLevel = document.getElementById("btnNextLevel");

  // Mengambil Pop up
  const popupMessage = popup.querySelector("p");
  popupMessage.textContent = message;

  // Menampilkan Pop up
  popup.style.display = "block";

  // Klik
  btnNextLevel.onclick = () => {
    // Sembunyikan pop up
    popup.style.display = "none";

    // Memanggil fuction
    if (callback && typeof callback === "function") {
      callback();
    }
  };
}

// tombol pergerakan player
addEventListener("keydown", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 65:
      // code 65 = "A"
      console.log("Kiri");
      keys.left.pressed = true;
      currentKey = "left";
      break;
    case 68:
      // code 68 = "D"
      console.log("Kanan");
      keys.right.pressed = true;
      currentKey = "right";
      break;
    case 87:
      // code 87 = "W"
      console.log("Atas");
      player.velocity.y -= 11;
      break;
  }
});

// tombol player berhenti
addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("Berhenti");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("Berhenti");
      player.velocity.y = 0;
      break;
    case 68:
      console.log("Berhenti");
      keys.right.pressed = false;
      break;
    case 87:
      console.log("Berhenti");
      break;
  }
});

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

// Function Level 1
function initLevel1() {
  drawLevel(1);
  player = new Player();
  platforms = [
    // Daftar Platform level 1
    new Platform({
      x: platformImage.width * 4 + 300 - 2 + platformSmallTallImage.width,
      y: 270,
      image: platformSmallTallImage,
    }),
    new Platform({
      x: -1,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width - 3,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 100,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 300 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 5 + 700 - 2,
      y: 470,
      image: platformImage,
    }),
    // Tambahkan Platform lainnya unruk level 1
  ];

  genericObjects = [
    // Daftar generic untuk level 1
    new GenericObject({
      x: -1,
      y: -1,
      image: backgroundImage,
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: hillsImage,
    }),
    // Tambahkan objek generic lainnya untuk level 1
  ];

  scrollOffset = 0;
}

// Menggambar seluruh platform dan objek generik dan loop animasi
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    // gambar objek generic
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    // gambar objek platform
    platform.draw();
  });

  // Perbarui Player
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.5;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.5;
      });
    }
  }

  // mendeteksi tabrakan antara player dan platform
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  // Frame Player
  if (
    keys.right.pressed &&
    currentKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    currentKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.right.pressed &&
    currentKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.left.pressed &&
    currentKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  // Kondisi Menang
  if (scrollOffset > platformImage.width * 5 + 300 - 2) {
    showPopup("Kamu Menang, Lanjut ke Level 2?", () => {
      initLevel2();
    });
  }

  // Kondisi Kalah
  if (player.position.y > canvas.height) {
    showPopup("Mulai Kembali?", () => {
      initLevel1();
    });
  }
}

// Function level 2
function initLevel2() {
  drawLevel(2);
  player = new Player();
  platforms = [
    // Daftar platform level 2
    new Platform({
      x: platformImage.width * 4 + 300 - 2 + platformSmallTallImage.width,
      y: 270,
      image: platformSmallTallImage,
    }),
    new Platform({
      x: -1,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width - 3,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 2 + 300,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 3 + 600,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 4 + 1000 - 2,
      y: 470,
      image: platformImage,
    }),
    new Platform({
      x: platformImage.width * 5 + 700 - 2,
      y: 470,
      image: platformImage,
    }),
    // tambahkan platform level 2 lainnya
  ];

  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: backgroundImage,
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: hillsImage,
    }),
    // Tambahkan objek generik lainnya untuk level 2
  ];

  scrollOffset = 0;

  // Objek Platform
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  // Frame Player
  if (
    keys.right.pressed &&
    currentKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    currentKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.right.pressed &&
    currentKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.left.pressed &&
    currentKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  // Kondisi Menang
  if (scrollOffset > platformImage.width * 11 + 700 - 2) {
    showPopup("Kamu Menang, Lanjut ke Level 3?", () => {
      initLevel2();
    });
  }

  // Kondisi Kalah
  if (player.position.y > canvas.height) {
    showPopup("Mulai Kembali?", () => {
      initLevel1();
    });
  }
}

initLevel1();
animate();
