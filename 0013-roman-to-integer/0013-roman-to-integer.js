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
    return s.split('').map(c => charVals[c]).reduce((p, c) => {
        switch(c){
            case 1:
                return p + 1;
            case 5:
            case 10:
                return p - (p % 2 && 2) + c;
            case 50:
            case 100:
                return p - (p/10 % 2 && 20) + c;
            default:
                return p - (p/100 % 2 && 200) + c;
        }
    });
};