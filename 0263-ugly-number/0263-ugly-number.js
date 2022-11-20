var isUgly=function(r){if(r<1)return!1;let e=0;do for(e+=2==e?1:2;r%e==0;)r/=e;while(e<7&&r>1);return e<7};
