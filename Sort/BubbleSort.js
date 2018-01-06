 // var num = [3,2,1,5,8,9,6,4];
 var num = [33,2,11,35,58,93,62,42];

 console.log(num);
 // total 7 times
 for (let i = num.length ; i >= 0 ; i--)
 {
     console.log(i);
     // compare two numbers in each time
     for (let x = num.length - 1 ; x >= 0; x--)
     {
         if (num[x] < num[x-1]) // swap numbers
         {
             num[x]   = num[x] + num[x-1] ;
             num[x-1] = num[x] - num[x-1] ;
             num[x]   = num[x] - num[x-1] ;
         }
     }
     console.log(num);
 }