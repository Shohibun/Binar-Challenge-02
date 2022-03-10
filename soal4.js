const isiValidPassword = (givenPassword) => {
    const HighAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    if (givenPassword == null) {
        return "ERROR : parameter is equal to empty and nothing is executed";
    }

    else if (Number.isInteger(givenPassword)) {
        return "ERROR : parameter is a number";
    }

    else {
        if (givenPassword.length < 8) { // kriteria pertama dimana Password harus memiliki panjang minimal 8 huruf
            return false;
        }
    
        let isContainUpper = false; 
        for (let i = 0; i < HighAlphabet.length; i++) { // kriteria kedua dimana Password harus memiliki minimal 1 huruf besar
            if (givenPassword.includes(HighAlphabet[i])) { // meskipun hanya melakukan pengecekan 1x tapi itu sudah membuktikan
                isContainUpper = true;
                break
            }
        }
        
        if (!isContainUpper) return false; // arti dari !isContainUpper adalah isContainUpper = false => dan langsung return false
        
        let isContainLower = false; // mendeklarasikan bahwa isContainLowe bernilai false
        for (let i = 0; i < LowAlphabet.length; i++) { // kriteria ketiga dimana Password harus memiliki minimal 1 huruf kecil
            if (givenPassword.includes(LowAlphabet[i])) {
                isContainLower = true; // jika dalam givenPassword terdapat HighAlphabet maka isContainLower bernilai true
                break
            }
        }
    
        if (!isContainLower) return false; // jika isContainLower bernilai false maka akan langsung dilakukan return false
    
        let isContainNumber = false;
        for (let i = 0; i < numbers.length; i++) { // kriteria keempat dimana Password harus memiliki minimal 1 angka
            if (givenPassword.includes(numbers[i])) {
                isContainNumber = true;
                break
            }
        }
    
        if (!isContainNumber) return false;
    
        return true;
    }

};

console.log(isiValidPassword('Meong2021'));
console.log(isiValidPassword('meong2021'));
console.log(isiValidPassword('@eong'));
console.log(isiValidPassword('Meong2'));
console.log(isiValidPassword(0));
console.log(isiValidPassword());


