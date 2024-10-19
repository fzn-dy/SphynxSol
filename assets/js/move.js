const image = document.getElementById("movingImage");

// Daftar gambar yang akan digunakan
const images = [
  "../assets/img/bisonish/bisonish_steady.gif", // Gambar awal (diam)
  "../assets/img/bisonish/bisonish_walk_3.gif", // Gambar kedua (lari)
  "../assets/img/bisonish/bisonish_jump.gif", // Gambar ketiga (lompat sebelum menghilang)
  "../assets/img/bisonish/bisonish_jump.gif", // Gambar keempat (lompat saat muncul dari kiri)
  "../assets/img/bisonish/bisonish_walk_3.gif", // Gambar kelima (lari kembali ke tengah)
];

let currentImageIndex = 0;

image.addEventListener("click", () => {
  // Ubah ke gambar kedua (lari) saat pertama kali diklik
  currentImageIndex = 1;
  image.src = images[currentImageIndex];

  // Gambar bergerak ke kanan
  image.style.transform = "translateX(50vw)";

  // Setelah 1.5 detik (sebelum sepenuhnya menghilang dari kanan), ubah ke gambar ketiga (lompat)
  setTimeout(() => {
    currentImageIndex = 2;
    image.src = images[currentImageIndex];
    image.style.transform = "translateX(30vw)";
  }, 1500);

  // Setelah 2.5 detik, ubah ke gambar keempat (lompat) dan gambar menghilang dari kanan
  setTimeout(() => {
    image.style.transition = "transform 3s ease-in-out"; // Perpanjang durasi
    currentImageIndex = 3;
    image.src = images[currentImageIndex];
    image.style.transform = "translateX(100vw)"; // Gerakkan gambar keluar dari kanan dengan lebih lama
  }, 2000);

  // Setelah 4 detik, gambar muncul dari kiri dengan gambar keempat (lompat)
  setTimeout(() => {
    image.style.transition = "none"; // Matikan transisi sementara
    image.style.transform = "translateX(-200vw)"; // Pindah ke kiri di luar layar
    image.src = images[currentImageIndex]; // Tetap gambar keempat (lompat)
  }, 3000);

  // Setelah pindah ke kiri, ubah ke gambar kelima (lari) dan menuju ke tengah
  setTimeout(() => {
    image.style.transition = "transform 2s ease-in-out"; // Hidupkan kembali transisi
    image.src = images[4]; // Ubah ke gambar kelima (lari)
    image.style.transform = "translateX(0)"; // Kembali ke tengah
  }, 4500);

  // Setelah kembali ke tengah, kembalikan ke gambar awal (diam)
  setTimeout(() => {
    image.src = images[0]; // Kembali ke gambar awal (diam)
  }, 6500);
});
