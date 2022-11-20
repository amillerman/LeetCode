/**
 * @param {string} s
 * @return {number}
 */

var calculate = function(s){
  return calcInBrackets(s).total;
};
let calcInBrackets = (s) => {
    let index = 0;
    let total = 0;
    let calc = {};
    s = s.replace(/ /g, "");
    // console.log("brackets", s);
    while (s[index] != undefined){
        // console.log(s[index]);
        if (s[index] == '('){
            // console.log("recurse", s.substring(index + 1 + (s[index] == '-' ? 1 : 0)));
            ++index;
            calc = calcInBrackets(s.substring(index));
            total += calc.total;
            index += calc.index + 1;
            // console.log(" recurse calc'd", s, calc, total, index);
        }else if ((s[index] == '-' || s[index] == '+') && s[index+1] == '('){
                // index += 2;
                calc = calcInBrackets(s.substring(index + 2));
            // console.log("calc'd", s, calc, total, index);
            if (s[index] == '-'){
                total -= calc.total;
                index += calc.index + 3;
            }
            else {
                total += calc.total;
                index += calc.index + 3;
            }
        }else
        if (s[index] == ')' || isNaN(parseInt(s.substring(index)))){
            // console.log("done", {total, index: index});
            return {total, index: index};
        }else {
            let c =  parseInt(s.substring(index));
            // console.log("num before", total, index, s[index], s.substring(index));
            total += c;
            index +=  c.toString().length + (s[index] == '+' ? 1 : 0);
            // console.log("num after", total, index, s[index]);
        }
        // console.log("while agian", total, index);
    }
    // console.log("actually done");
    return {total, index};
}




var calculateOld = function(s) {
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