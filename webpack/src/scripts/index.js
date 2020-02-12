//JavaScript Objects and Prototypes

//Dynamic nature of JavaScript
//'use strict' ;
/*
var dog = {
    name: 'Duggu' ,
    color: 'brown' ,
    age:'8',
    sister:function(){ console.log('Laksha');}
};
dog.breed= 'Boxer';
console.log(dog.name);
dog.speak = function()
{
   console.log('boww boww');
};
console.log(dog.breed);
dog.speak();
dog.sister();
*/


//Using Constructor Functions to create JavaScript Objects
/*
function Cat(name,color)
{
    this.name= name;
    this.color= color;
}

//var cat= Cat(); //return the value of Cat() function
//console.log(window.name);
var cat= new Cat('Max','Brown');
console.log(cat);*/


//Using Objects.create() to create JavaScript Objects
/*
var cat =  Object.create(Object.prototype,
    {
        name: {
            value: 'Maxi',
            enumerable: true,
            writable: true,
            configurable:true
        },
        color:{
            value: 'White',
            enumerable: true,
            writable: true,
            configurable:true
        }
    });
console.log(cat);*/


//Classes to create Object using ECMAScript6
/*
class Cat
{
    constructor(name,color)
    {
        this.name= name;
        this.color= color;
    }
    speak()
    {
        console.log('Meoww');
    }
}
var cat= new Cat('Max','Brown');
console.log(cat);
cat.speak();
*/












