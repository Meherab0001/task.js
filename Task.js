 /* for (let i = 1; i <=100; i++) {
    if(i%3==0){
        console.log("Fizz")
    }
    if(i%5==0){
        console.log("Buzz")
    } 
    if(i% 3== 0 && i%5 ==0){
        console.log("BizzFizz")
    }
	console.log(i);
} */ 



     

/* (function(n, m) {
    // body...
    while (n <= m) {
      console.log(n);
      n++;
      if(n%3==0){
        console.log("Fizz")
    }
    
   
      (n, m);
    }
  })(1, 100);
   */
 /*  function number(n,m) {
    if(n <=m){
        n++;
        console.log(n)
    }
  (n,m);
    
  } */
  let s = "";
  let c3 = 0, c5 = 0;
  for (var i = 1; i <= 100; i++) {
      c3++;
      c5++;
      if (c3 == 3) {
          s += "fizz";
          c3 = 0;
      }
      if (c5 == 5) {
          s += "buzz";
          c5 = 0;
      }
      if (s.length == 0)
          console.log(i);
      else
          console.log(s);
      s = "";
  }