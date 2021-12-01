const pilih = (event) => {
    event.preventDefault();
    const countDownDate = new Date(document.getElementById("waktuBerakhir").value).getTime();
    // Memperbarui hitungan mundur setiap 1 detik
    const x = setInterval(() => {
        // Untuk mendapatkan tanggal dan waktu hari ini
        const now = new Date().getTime();
        // Temukan jarak antara sekarang dan tanggal hitung mundur
        const distance = countDownDate - now;
    
        // Perhitungan waktu untuk hari, jam, menit dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Keluarkan hasil dalam elemen dengan id = "demo"
        document.getElementById("demo").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
        // Jika hitungan mundur selesai, tulis beberapa teks
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}
