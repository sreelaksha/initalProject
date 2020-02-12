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


//JavaScript Objects and Prototypes
//Using bracket Notation to access JavaScript Properties
/*
var dog = {
    name: 'Duggu' ,
    color: 'Brown' ,
    };
dog['Eye color'] = 'Black';
console.log(dog['color']); // which is same as dog.color
console.log(dog['Eye color']);
*/


//Using JavaScript Property Descriptors
/*var dog =
{
    name: 'Duggu' ,
    color: 'Brown' ,
};
console.log(Object.getOwnPropertyDescriptor(dog, 'color'));*/


//Using Writable Attribute
/*
'use strict';
var dog =
{
    name: {first:'Kalia', last : 'Srinivas'},
    color: 'Brown',
};
Object.defineProperty(dog,'name',{writable:false});
//Object.freeze(dog.name); //to prevent object being changed
dog.name.first = 'Duggu'; //value of object can be changed like this
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
console.log(dog.name);
*/



//Using Enumerable Attribute
/*
'use strict';
var dog =
{
    name: {first:'Duggu', last : 'Srinivas'},
    color: 'Brown',
};
Object.defineProperty(dog, 'name', {enumerable : false});
//setting enumerable to false
//1. does not show up properties on object keys
//2.affects JSON serialization of the object
//console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
for(var propertyName in dog)
{
    console.log(propertyName + ' is:' + dog[propertyName]);
}
console.log(Object.keys(dog));//1
console.log(JSON.stringify(dog));//2
console.log(dog['name']); //when enumerable is set to false does not change bracket notation
*/


//Using Configurable Attribute
/*'use strict';
var dog =
{
    name: {first:'Duggu', last : 'Srinivas'},
    color: 'Brown',
};
Object.defineProperty(dog,'name',{configurable:false});
//Object.defineProperty(dog,'name',{writable:true});
delete dog.name;
console.log(dog.name);*/
/*
1. you cannot change enumerable attribute
2. you cannot change configurable attribute
3. you can change writable attribute
4. you cannot delete a property
*/



//Using Getters and Setters
/*
'use strict';
var dog =
{
    name: {first:'Duggu', last : 'Srinivas'},
    color: 'Brown',
};
Object.defineProperty(dog,'fullName',
{
    get:function()
    {
        return this.name.first + ' ' + this.name.last;
    },
    set: function(value)
    {
       var setName = value.split(' ');
       this.name.first = setName[0];
       this.name.last = setName[1];
    }
});
console.log(dog.fullName);
dog.fullName = 'King Kalia';
console.log(dog.fullName);
console.log(dog.name.first);
console.log(dog.name.last);
*/



//-------------------------------------------------
//JavaScript Prototypes and Inheritance





























