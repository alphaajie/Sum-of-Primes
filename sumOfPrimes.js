'use strict'

function sumOfPrimes(num) {
    var allprimes=[];
    for(var count=1; count<=num;count++){
         var notPrime = true;
          for(var j=1 ;j<=i;j++){
              if(count%j===0 && count!==j){
                  notPrime = false;
              }
            }

      if(notPrime === true){
          primes.push(cpunt);
      }
    }

    var Primes = allprimes.reduce(function(a,b){
       return a+b;
    });

    console.log(Primes);
}
