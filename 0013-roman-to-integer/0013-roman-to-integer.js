/**
 * @param {string} s
 * @return {number}
 */
var romanToInt=function($){let _={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3},n={1:0,5:1,10:1,50:10,100:10,500:100,1e3:100};return $.split("").map($=>_[$]).reduce(($,_)=>$+_-(_-1&&n[_]*($/n[_]%2*2)))};