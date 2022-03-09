let getTotalPenjualan = (dataPenjualan) => {
    let arr = []; // dikumpulan disini terlebih dahulu untuk data totalTerjual 
    let total = 0;

    for (let i = 0; i < dataPenjualan.length; i++) {
        arr.push(dataPenjualan[i].totalTerjual);
    }

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // ditambahkan semua data totalTerjual
    }   
    return total;
}

const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy B',
        hargaSatuan: 760000,
        kategori: 'Sepatu Sport', 
        totalTerjual: 90,
    }, 
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: 'Sepatu Sneaker', 
        totalTerjual: 37,
    }, 
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: 'Sepatu Sneaker', 
        totalTerjual: 90,
    }, 
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: 'Sepatu Sneaker', 
        totalTerjual: 90,
    }
];

console.log(getTotalPenjualan(dataPenjualanPakAldi));

