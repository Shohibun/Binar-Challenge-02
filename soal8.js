let getInfoPenjualan = (dataPenjualan) => {
    let penjualan = [];
    let pembelian = [];
    let jumlahNoverlTerjual = [];
    let sisaStok = [];
    let modalStok = [];
    let keuntungan = 0;
    let modalBeli = 0;
    let totalKeuntungan = 0;
    let totalModal = 0;
    let presentaseKeuntungan = 0;


//==========================MENGUMPULKAN DATA=========================

    for (let i = 0; i < dataPenjualan.length; i++) { // data hargaJual 
        penjualan.push(dataPenjualan[i].hargaJual);
    }

    for (let i = 0; i < dataPenjualan.length; i++) { // data hargaBeli
        pembelian.push(dataPenjualan[i].hargaBeli);
    }

    for (let i = 0; i < dataPenjualan.length; i++) { // data totalTerjual 
        jumlahNoverlTerjual.push(dataPenjualan[i].totalTerjual);
    }

    for (let i = 0; i < dataPenjualan.length; i++) { // data sisaStok
        sisaStok.push(dataPenjualan[i].sisaStok);
    }

    for (let i = 0; i < dataPenjualan.length; i++) { // data gabungan antaran sisaStok dan totalTerjual
        modalStok.push(sisaStok[i] + jumlahNoverlTerjual[i]); 
    }

//==========================MENGEKSEKUSI==============================

    // data keuntungan dan modalBeli (hargaBeli * totalTerjual (jadi gak ikut dengan sisaStok)) => total keuntungan
    for (let i = 0; i < dataPenjualan.length; i++) {  
        keuntungan += (penjualan[i] * jumlahNoverlTerjual[i]);
        modalBeli += (pembelian[i] * jumlahNoverlTerjual[i]); 
    }

    for (let i = 0; i < dataPenjualan.length; i++) { // mengeksekusi totalModal 
        totalModal += (pembelian[i] * modalStok[i]); 
    }

    // jika menggunakan -i -1 tidak perlu dilakukan sorting lagi disebelah kanan/bilangan terbesar, karena sudah dilakukan sebelumnya
    for (let i = 0; i < dataPenjualan.length; i++) { // mensorting dulu dan melakukan eksekusi untuk barang terlaris
        for (let j = 0; j < dataPenjualan.length - i - 1; j++) {
            if (dataPenjualan[j].totalTerjual > dataPenjualan[j + 1].totalTerjual) {
                let temp = dataPenjualan[j];
                dataPenjualan[j] = dataPenjualan[j + 1];
                dataPenjualan[j + 1] = temp;
            }
        }
    }

    let n = dataPenjualan.length;
    let result = dataPenjualan[n - 1];
    totalKeuntungan = keuntungan - modalBeli;
    presentaseKeuntungan = Math.floor((totalKeuntungan / modalBeli) * 100); // math.floor convert float to integer to up

    const format = totalKeuntungan.toString().split('').reverse().join(''); // membuat total keuntungan menjadi rupiah
    const convert = format.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('');

    const secondFormat = totalModal.toString().split('').reverse().join(''); // membuat total modal menjadi rupiah
    const secondConvert = secondFormat.match(/\d{1,3}/g);
    const secondRupiah = 'Rp ' + secondConvert.join('.').split('').reverse().join('');

    const persen = presentaseKeuntungan + '%'; // membuat presentase keuntungan menjadi persen

    return {
        totalKeuntungan: rupiah, 
        totalModal: secondRupiah,
        presentaseKeuntungan: persen, 
        produkBukuTerlaris: result.namaProdcut,
        penulisBukuTerlaris: result.penulis
    }
};

const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421', 
        namaProdcut: 'Pulan - Pergi', 
        penulis: 'Tere Liye', 
        hargaBeli: 60000, 
        hargaJual: 86000, 
        totalTerjual: 150, 
        sisaStok: 17,  
    }, 
    {
        idProduct: 'BOOK002351', 
        namaProdcut: 'Selamat Tinggal', 
        penulis: 'Tere Liye', 
        hargaBeli: 75000, 
        hargaJual: 103000, 
        totalTerjual: 171, 
        sisaStok: 20,  
    }, 
    {
        idProduct: 'BOOK002941', 
        namaProdcut: 'Garis Waktu', 
        penulis: 'Fiersa Besari', 
        hargaBeli: 67000, 
        hargaJual: 99000, 
        totalTerjual: 213, 
        sisaStok: 5,  
    }, 
    {
        idProduct: 'BOOK002941', 
        namaProdcut: 'Laskar Pelangi', 
        penulis: 'Andrea Hirata', 
        hargaBeli: 55000, 
        hargaJual: 68000, 
        totalTerjual: 20, 
        sisaStok: 56,  
    }
];

console.log(getInfoPenjualan(dataPenjualanNovel));

