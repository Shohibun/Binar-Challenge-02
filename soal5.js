let getSplitName = (personName) => {
    if (Number.isInteger(personName)) {
        return "Error : parameter is a number. This function is only string"
    }
    
    else {
        let arr = personName.split(" "); // untuk menjadikan sebuah array dengan pembagian berdasarkan " "
        if (arr.length > 3) {
            return "Error : This function is only for 3 character name";
        }

        else {
            if (arr.length == 3) {
                let firstName = arr[0];
                let middleName = arr[1];
                let lastName = arr[2];

                return {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
            }

            else if (arr.length == 2) {
                let firstName = arr[0];
                let middleName = null;
                let lastName = arr[1];

                return {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
            }

            else {
                let firstName = arr[0];
                let middleName = null;
                let lastName = null;

                return {
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName
                };
            }
        }
    }
};

console.log(getSplitName("Aldi Dainiela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));

