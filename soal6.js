let getAngkaTerbesarKedua = (dataNumbers) => {
    if (dataNumbers == null) {
      return "ERROR : parameter is equal to empty and nothing is executed";
    }
  
    if (dataNumbers == 0) {
      return "ERROR : There is only one parameter and cannot be compared";
    }
  
    else {
      let unique = [];
      
      /*
      Jadi disini mengapa memakai !unique dikarenakan, dalam kondisi tersebut hanya akan melakukan penambahan item/element array yang 
      tidak sama. Jadi jika sama akan terjadi false/tidak akan masuk ke kondisi if.   
      */
      for (let i = 0; i < dataNumbers.length; i++) {
        if (!unique.includes(dataNumbers[i])) {
          unique.push(dataNumbers[i]);
        }
      }
  
      console.log(unique);
      let n = unique.length;
  
      // jika menggunakan -i -1 tidak perlu dilakukan sorting lagi disebelah kanan/bilangan terbesar, karena sudah dilakukan sebelumnya 
      for (let i = 0; i < unique.length; i++) { // disorting terlebih dahulu dari terkecil ke terbesar
        for (let j = 0; j < unique.length - i - 1 ; j++) {
            if (unique[j] > unique[j + 1]) {
                let temp = unique[j];
                unique[j] = unique[j + 1];
                unique[j + 1] = temp;
            }
        }
      }
      console.log(unique);
      let result = unique[n - 2]; // lalu dipilih terbesar kedua
      return result; 
    }
  };
  
  const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
  
  console.log(getAngkaTerbesarKedua(dataAngka));
  console.log(getAngkaTerbesarKedua(0));
  console.log(getAngkaTerbesarKedua());

  