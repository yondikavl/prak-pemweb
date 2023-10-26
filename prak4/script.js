// Yondika Vio Landa - 121140161
// Praktikum Pemrograman Web RB - Tugas 1

const inputAngka = prompt("Masukkan angka:");
const angka = Number(inputAngka);

if (isNaN(angka)) {
  console.log("Masukan tidak valid. Harap masukkan angka.");
} else {
  let jumlahGanjil = 0;
  let jumlahGenap = 0;

  for (let i = 1; i <= angka; i++) {
    if (i % 2 === 0) {
      jumlahGenap++;
    } else {
      jumlahGanjil++;
    }
  }

  console.log(`Angka yang dimasukkan: ${angka}`);
  console.log(`Jumlah bilangan ganjil: ${jumlahGanjil}`);
  console.log(`Jumlah bilangan genap: ${jumlahGenap}`);
}
