// Mengambil elemen-elemen HTML dengan menggunakan querySelectorAll
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const resultLast = document.querySelector(".result");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const overoutput = document.querySelector(".overoutput");
const underoutput = document.querySelector(".underoutput");
const tempoutput = document.querySelector(".tempoutput");

// Inisialisasi variabel-variabel untuk menyimpan nilai dan operasi kalkulator
var output1 = "";
var output2 = "";
var result = null;
var operationLast = "";
var oneDot = false;

// Menambahkan event listener untuk setiap tombol angka
number.forEach((number) => {
  number.addEventListener("click", (e) => {
    // Memeriksa jika tombol titik (.) ditekan dan hanya satu titik yang diperbolehkan
    if (e.target.innerText === "." && !oneDot) {
      oneDot = true;
    } else if (e.target.innerText === "." && oneDot) {
      return;
    }
    // Menambahkan angka yang ditekan ke output2 dan menampilkan di bawah layar kalkulator
    output2 += e.target.innerText;
    underoutput.innerText = output2;
  });
});

// Menambahkan event listener untuk tombol operasi (+, -, *, /, %)
operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    // Memeriksa apakah output2 telah diisi sebelum mengeksekusi operasi
    if (!output2) return;
    oneDot = false;
    const operationName = e.target.innerText;
    // Jika output1, output2, dan operationLast telah diisi, maka lakukan operasi matematika
    if (output1 && output2 && operationLast) {
      mathOperation();
    } else {
      result = parseFloat(output2);
    }
    clearVar(operationName);
    operationLast = operationName;
  });
});

// Fungsi untuk membersihkan variabel dan menampilkan operasi sebelumnya
function clearVar(name = "") {
  output1 += output2 + " " + name + " ";
  overoutput.innerText = output1;
  underoutput.innerText = "";
  output2 = "";
  tempoutput.innerText = result;
}

// Fungsi untuk melakukan operasi matematika
function mathOperation() {
  if (operationLast === "x") {
    result = parseFloat(result) * parseFloat(output2);
  } else if (operationLast === "+") {
    result = parseFloat(result) + parseFloat(output2);
  } else if (operationLast === "-") {
    result = parseFloat(result) - parseFloat(output2);
  } else if (operationLast === "/") {
    result = parseFloat(result) / parseFloat(output2);
  } else if (operationLast === "%") {
    result = parseFloat(result) % parseFloat(output2);
  }
}

// Menambahkan event listener untuk tombol "=" (hasil perhitungan)
resultLast.addEventListener("click", (e) => {
  // Memeriksa apakah output1 atau output2 masih kosong
  if (!output1 || !output2) return;
  oneDot = false;
  mathOperation();
  clearVar();
  underoutput.innerText = result;
  tempoutput.innerText = "";
  output2 = result;
  output1 = "";
});

// Menambahkan event listener untuk tombol "Clear" (bersihkan semua)
clear.addEventListener("click", (e) => {
  underoutput.innerText = "";
  overoutput.innerText = "";
  tempoutput.innerText = "";
  output1 = "";
  output2 = "";
  result = "";
});

// Menambahkan event listener untuk tombol "Delete" (hapus karakter terakhir)
del.addEventListener("click", (e) => {
  underoutput.innerText = underoutput.innerText.toString().slice(0, -1);
  output2 = output2.toString().slice(0, -1);
});

// Menambahkan event listener untuk penggunaan tombol keyboard
window.addEventListener("keydown", (e) => {
  // Memeriksa tombol mana yang ditekan dan menjalankan fungsi yang sesuai
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clicknumber(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickoperation(e.key);
  } else if (e.key === "*") {
    clickoperation("x");
  } else if (e.key === "Enter" || e.key === "=") {
    clickresult();
  } else if (e.key === "Backspace") {
    clickdel();
  } else if (e.key === "Delete") {
    clickclear();
  }
});

// Fungsi untuk mensimulasikan klik tombol angka
function clicknumber(key) {
  number.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// Fungsi untuk mensimulasikan klik tombol operasi
function clickoperation(key) {
  operation.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// Fungsi untuk mensimulasikan klik tombol hasil
function clickresult() {
  resultLast.click();
}

// Fungsi untuk mensimulasikan klik tombol Delete
function clickdel() {
  del.click();
}

// Fungsi untuk mensimulasikan klik tombol Clear
function clickclear() {
  clear.click();
}
