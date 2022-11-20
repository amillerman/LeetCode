/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n < 1) return false;
    let prime = 0;
    do{
        prime += prime == 2 ? 1 : 2;
        while (n%prime == 0)
        {
            n /= prime;
        }
    }while(prime < 7 && n > 1);
    return prime < 7;

};
