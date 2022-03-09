let changeWord = (selectedText, changedText, text) => { 
    let arr = text.split(" "); // split harus dikasik jarak (" ") agar string yang diubah memiliki index

    for (let i = 0; i < arr.length; i ++) { 
        if (arr[i] == selectedText) { 
            arr[i] = changedText; 
            
            text = arr.join(" "); // join harus dikasik jarak (" ") agar koma bekas dari array menghilang
        }
    }
    return text; 
};

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log('Hasil dari perubahan kata yang telah dilakukan pada kalimat1 :');
console.log('Kalimat awal :', kalimat1);
console.log('Kalimat setelah diubah :', changeWord('mencintai', 'membenci', kalimat1));

console.log("\n");

console.log('Hasil dari perubahan kata yang telah dilakukan pada kalimat2 :');
console.log('Kalimat awal :', kalimat2);
console.log('Kalimat setelah diubah :', changeWord('bromo', 'semeru', kalimat2));

