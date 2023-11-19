<?php

// Yondika Vio Landa - 121140161
// Praktikum Pemrograman Web RB - Tugas 7

class Manusia {
    // Properti untuk menyimpan nama
    public $nama;

    // Constructor untuk inisialisasi objek Manusia
    public function __construct($nama) {
        // Memanggil method setNama untuk validasi dan pengaturan nama
        $this->setNama($nama);
    }

    // Method untuk validasi dan pengaturan nama
    public function setNama($nama) {
        // Validasi karakter input nama menggunakan regular expression
        if (!preg_match('/^[a-zA-Z]+$/', $nama)) {
            throw new Exception("Nama hanya boleh mengandung huruf A-Z atau a-z");
        }

        $this->nama = $nama;
    }

    // Method untuk menampilkan data diri
    public function dataDiri() {
        echo "Halo, nama saya $this->nama.<br>";
    }

    // Destructor untuk memberikan pesan saat objek dihancurkan
    public function __destruct() {
        echo "Objek Manusia telah dihancurkan.<br>";
    }
}

class Mahasiswa extends Manusia {
    // Properti untuk menyimpan NIM dan mata kuliah
    public $nim;
    public $matkul;

    // Constructor untuk inisialisasi objek Mahasiswa
    public function __construct($nama, $nim, $matkul) {
        // Memanggil constructor parent untuk menginisialisasi properti nama
        parent::__construct($nama);
        // Memanggil method setNim untuk validasi dan pengaturan NIM
        $this->setNim($nim);
        // Mengatur properti matkul
        $this->matkul = $matkul;
    }

    // Method untuk validasi dan pengaturan NIM
    public function setNim($nim) {
        // Validasi karakter input NIM menggunakan regular expression
        if (!preg_match('/^[0-9]+$/', $nim)) {
            throw new Exception("NIM hanya boleh mengandung angka 0-9\n");
        }

        $this->nim = $nim;
    }

    // Method untuk menampilkan data mahasiswa
    public function dataMahasiswa() {
        echo "NIM saya $this->nim, Saya sedang belajar $this->matkul<br>";
    }

    // Destructor untuk memberikan pesan saat objek dihancurkan
    public function __destruct() {
        // Memanggil destructor parent
        parent::__destruct();
        echo "Objek Mahasiswa telah dihancurkan.<br>";
    }
}

// Blok try dan catch untuk menangani error yang mungkin terjadi selama eksekusi
try {
    // Membuat objek Manusia
    $manusia1 = new Manusia("Yondika");
    // Menampilkan data diri objek Manusia
    $manusia1->dataDiri();

    // Membuat objek Mahasiswa
    $mahasiswa1 = new Mahasiswa("Yondika", "121140161", "Praktikum Pemweb RB");
    // Menampilkan data mahasiswa
    $mahasiswa1->dataMahasiswa();
} catch (Exception $e) {
    // Menangkap dan menampilkan pesan error
    echo "Error: " . $e->getMessage();
}
?>
