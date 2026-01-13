/**
 * @param {string} num
  * @return {boolean}
   */
   var digitCount = function(num) {
       const count = new Array(10).fill(0);
           for (const c of num) count[+c]++;
               for (let i = 0; i < num.length; i++) {
                       if (count[i] !== +num[i]) return false;
                           }
                               return true;
                               };