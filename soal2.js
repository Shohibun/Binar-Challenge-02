let checkTypeNumber = (givenNumber) => { 
    console.log("\n"); // melakukan enter 
    console.log(typeof(givenNumber)); // melakukan output tipe data pada parameter (givenNumber)

    if (givenNumber == null) { 
        return "Error : Bro where is the parameter ?"
    }

    else {
        
        /* jadi ini masuk dulu ke number, setelah itu fokuskan ke integer, lalu dicheck apakah parameter yang dimasukkan integer 
        apa bukan */
        if (Number.isInteger(givenNumber)) {
            if (givenNumber % 2 == 0) {
                return "GENAP"
            }
        
            else {
                return "GANJIL"
            }
        }
    
        else {
            return "Error : Invalid data type"
        }
    }

};

console.log('Hasil dari pengecekan parameter:');
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

