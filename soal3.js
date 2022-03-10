let checkEmail = (email) => {
    let regex = /.co.id/;
    let secondRegex = /.com/;
    let thirdRegex = /@/;

    if (email == null) {
        return "ERROR : parameter is equal to empty and nothing is executed";
    }

    else {
        if (Number.isInteger(email)) { // jadi disini dicheck dulu apakah parameter yang diinputkan integer apa bukan 
            return "ERROR : parameter is a number and cannot be matched with string";
        }
        
        else {
            if (regex.test(email)) { // jadi disini dilakukan pengecekan apakah dalam parameter email terdapat kata /.co.id/
                return "VALID";
            }
        
            else if (secondRegex.test(email)) {
                return "VALID";
            }
        
            else if (thirdRegex.test(email)) {
                return "INVALID";
            }
    
            else {
                return "ERROR : not listed @ and does not own a domain";
            }
        }
    }
};

console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkEmail(3322));
console.log(checkEmail());

