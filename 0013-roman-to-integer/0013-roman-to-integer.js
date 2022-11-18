/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let charVals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let subtractVal = 0;
    return s.split('').reduce((p, c, i, arr) => {
        let curVal = charVals[c];
        /*
        If it's a letter that can be deducted from
        And the value being subtracted by the previous character is less than the current characters value (make sure subtraction isn't higher than current value)
        And dividing the current value by the previous value results in a 5 or 10 (make sure subtraction value isn't too small to be used)
        */
        if (['V', 'X', 'L', 'C', 'D', 'M'].includes(c) 
            && subtractVal < curVal 
            && [5, 10].includes(curVal / subtractVal)){   
            p -= subtractVal * 2; // double because we added it last time, so we need to subtract that plus the normal roman numeral amount of subtraction
            subtractVal = 0;
        }
        else{ // reset the subtraction, the previous char didn't have to be subtracted
            subtractVal = 0;
        }
        if (['I', 'X', 'C'].includes(c)){
            subtractVal = curVal;
        }
        return p + curVal;
    }, 0);
};