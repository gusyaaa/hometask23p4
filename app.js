function isValidNumber(phoneNumber) {

    if (typeof phoneNumber !== 'string') {
        return false;
    }


    if (phoneNumber.length === 12 && phoneNumber.startsWith('+7')) {
        return true; 
    } else {
        return false; 
    }
}

console.log(isValidNumber("+79123456789")); 
console.log(isValidNumber("79123456789"));  
console.log(isValidNumber("+7123456789")); 
console.log(isValidNumber("7123456789"));   
