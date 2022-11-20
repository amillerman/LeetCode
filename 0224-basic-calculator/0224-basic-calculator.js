/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let bracx = /\(([+-\d]*)\)/g;
    s = s.replace(/ /g, "").replace(/\-\-/g, "+").replace(/\+\-/g, '-').replace(/\-\=/g, '-');
    do{
        // console.log("loop", s);
        s = s.replace(bracx, (m, exp) => {
            // console.log("replace", m, exp);
            // console.log(calcExp(exp));
            return calcExp(exp)
        }).replace(/\-\-/g, "+").replace(/\+\-/g, '-').replace(/\-\=/g, '-');
        // console.log(s, s.match(bracx).length);
    }while (parseInt(s).toString().length && s.match(bracx));
    return calcExp(s);
};

let calcExp = (exp) => {  
    // console.log("calc", exp);
    if (!exp) return 0;
    let val = parseInt(exp);
    // console.log("val: ", val, val.toString().length, exp.length);
    if (val.toString().length+1 >= exp.length) return val;
    let offset = exp[0] == '+' ? val.toString().length + 1 : val.toString().length;
    // console.log("val change: ", val, " ", exp.substring(offset));
    return val + calcExp(exp.substring(offset));
};