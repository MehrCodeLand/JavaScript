let myArr = ['mehrshad' , 'aria' , 'batman'];
let newArr = [];

myArr.forEach(function(myParm) {
    let counter = 0 ;
    while(counter < 2 )
    {
        newArr.push(myParm);
        ++counter;
    }
})
showArrey(newArr);

