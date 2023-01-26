// To Upper Function
function ToUpper(username){
    let strUsername = String(username);
    console.log(strUsername.toUpperCase());
}
ToUpper('mehrshad');

// inches to cm 
function inchesToCm(lenght){
    console.log(lenght * 2.54 );
}
inchesToCm(2.5);


// foreEach toUpper
let someText = ['hello' , 'world' , 'batman' , 'iran'];
let newSomeText = [];

someText.forEach(function(ourText) {
    newSomeText.push(ourText.toLocaleUpperCase());
})
console.log('our old arrey :');
showArrey(someText);

console.log('- - - - - ');

console.log('our new Arrey: ');
console.log(newSomeText);

function showArrey(parms){
    parms.forEach(function(myParm){
        console.log(myParm);
    })
}
showArrey(newSomeText);



// double arrey!
let myArr = ['mehrshad' , 'aria' , 'batman'];
let newArr = [];

myArr.forEach(function(myParm) {
    let counter = 0 ;
    while(counter < 3 )
    {
        newArr.push(myParm);
        ++counter;
    }
})
console.log(newArr);
showArrey(newArr);


// sum numbers !
let numbers = [1,23,+100, 23];
function SumNumber( parms ){
    let sums = 0 ;
    parms.forEach(function(parm){
        sums += parm;
    })
    console.log(sums);
}
SumNumber(numbers);