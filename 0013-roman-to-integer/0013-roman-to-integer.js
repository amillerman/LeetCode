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
    let numVals = {
        1: 0,
        5: 1,
        10: 1,
        50: 10,
        100: 10,
        500: 100,
        1000: 100
    }
    return s.split('').map(c => charVals[c]).reduce((p, c) => 
        p + c - ((c - 1) && (numVals[c]) * (p/(numVals[c]) % 2 * 2))
    );
};