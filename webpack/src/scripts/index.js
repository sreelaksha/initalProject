//let v/s var
/*
if(true)
{
    var carId= 20;
}
console.log(carId);

*/

//Rest parameter - ...carIds
/*function sendCars(day , ...carIds)
{
    carIds.forEach(id => console.log(id));
}
sendCars(' mon', 1,2,3,4);*/


//Destructing Arrays
/*
let carIds =[100,200,300,400];
let car1,car2,rest;
[,...rest]=carIds; //or [car1,car2,...rest]=carIds;
console.log(car1,car2,rest);
*/


//Destructuring object
/*
let car={
    id: 5000,
    style: 'Sedan'
    };
let id,style;
({id,style}= car);
console.log(id,style);
*/



//Spread Syntax - acts opposite to rest parameter
/*
function showCars(car1,car2,car3,...rest)
//rest here and spread below both can be used at the same time
{
    console.log(car1,car2,car3,rest);
}
carId ='laksha'; //or give as [10,20,30,40]
showCars(...carId);
*/

//typeof()
/*typeof(null); -->  object
typeof(undefined);  -->  undefined
typeof(NaN); -->    number
typeof('hi'); --> string
typeof(1); -->  number
typeof({});  -->  object
typeof(function(){}); -->    function
typeof(true); --> boolean*/


//Type conversion
/*
console.log(Number.parseInt('55abc'));
console.log(typeof(Number.parseInt('55abc')));
console.log(Number.parseFloat('55.99abc'));
console.log(Number.parseFloat('abc55.99'));
*/


//Controlling loops

//break; the loop and finish it off
//continue; is to continue the loop act as if body has finished execution





//continue
/*for(let i=10;i<15;i++)
{
    if(i==13)

        continue;
        console.log(i);

}
*/

//break

/*
for(let i=0;i<6;i++)
{
    if(i==5)
            break;
        console.log(i);  //0 1 2 3 4  xxxxx
}

for(let i=0;i<6;i++)
{
    console.log(i); //012345
    if(i==5)
            break;
}
*/


/* Logical operator
let userSettings= { name: 'Joe'};
let defaultSettings = {name: 'Default'};
console.log(userSettings || defaultSettings);
*/


//Function scope
/*function startCar(carId)
{
    let message = 'starting...';
    let startFn = function turnKey()
    {
        let message='override..';
        // override is not shown because it went
        //out of scope in line 129 and so starting... is shown as o/p
    };
    startFn();
    console.log(message);
}
startCar(123);*/


/* // block scope
var message = "outside";
if('a'=='a')
{
    var message = "inside equal"; //block scope
    //does not apply for var and applies only for let
    //so use let keyword
    console.log(message);
}
console.log(message);
*/


//IIFE - immediately invoked function expression
/*
let app = (function(){
    let carId= 23;
    console.log('hi');
    return {}; // an empty object
})
(); //calling the above function it has no arg so
console.log(app);
*/


//Closure
/*let app = (function(){
    let carId= 123;
    let getId=function(){
        return carId;
    };
    return{  //closure return reference to the function
        getId:getId
    };
})
();
console.log(app.getId());*/


// The this keyword









