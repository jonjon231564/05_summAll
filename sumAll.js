const sumAll = function() {
    let firstNumber = -10;
    let lastNumber = 10;
    let sumNumbers = [90, 1];

    if (firstNumber > lastNumber) {
        [firstNumber, lastNumber] = [lastNumber, firstNumber];
    }

    if (firstNumber < 0 || lastNumber < 0){
        sumNumbers = 'ERROR';
    }
    else {
        if (typeof firstNumber !== 'number' || typeof lastNumber !== 'number') {
            sumNumbers = 'ERROR';
        }
        else {
            while(firstNumber <= lastNumber) {
                sumNumbers = firstNumber + sumNumbers;
                firstNumber++;
            }
        }
    }

    
   
    return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
