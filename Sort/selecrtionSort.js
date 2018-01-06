var num       = [3 , 2 , 1 , 5 , 8 , 9 , 6 , 4];
var numLength = num.length;
// var num = [9,8,7,6,5,4,3,2,1];
// var num = [33,2,11,35,58,93,62,42];

// run n times
for (let i = 0 ; i < numLength; i++)
{
    // search the minimum in all the number
    var min      = num[i];
    var minIndex = 0;
    var isChange = 0;
    for (let x = i+1 ; x < num.length; x++)
    {
        if (min > num[x])
        {
            min      = num[x];
            minIndex = x ;
            isChange = 1;
        }
    }

    // swap min and num[i]
    if (isChange == 1) {
        num[minIndex] = num[minIndex] + num[i] ;
        num[i]        = num[minIndex] - num[i] ;
        num[minIndex] = num[minIndex] - num[i] ;
        isChange      = 0;
    }

    console.log(" last : " + num);
}