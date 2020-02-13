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
//JavaScript Prototypes
/*
'use strict';
var array = ['green','white','orange'];
//var last =  arr[arr.length-1];
Object.defineProperty(Array.prototype,'last',
{
    get : function()
    {
        return this[this.length-1];
    }
});
var last = array.last;
console.log(last);
var array2 = ['one','two','three'];
var last = array2.last;
console.log(last);
*/



//What is a Prototype?  *????1
//Instance v/s Prototype properties  *?????2
//Graphical Overview of Prototype
/*
'use strict';
function Cat(name,color)
{
    this.name=name;
    this.color=color;
}
Cat.prototype.age=5;
var fluffy =  new Cat('Fluffy','White');
var muffy =  new Cat('Muffy','Brown');
fluffy.age=8;
//fluffy._proto_.age =10;
console.log(fluffy.age);
Cat.prototype.age = 10;
console.log(fluffy.age);
console.log(muffy.age);
*/



//Changing a Functions Prototype
/*'use strict';
function Cat(name,color)
{
    this.name=name;
    this.color=color;
}
Cat.prototype.age=5;
var fluffy =  new Cat('Fluffy','White');
var muffy =  new Cat('Muffy','Brown');
Cat.prototype = {age:15};
var sniffy = new Cat('Sniffy','Black');

console.log(sniffy.age);
console.log(fluffy.age);
console.log(muffy.age);
console.log(Cat.prototype.age);*/



//Multiple Levels of Inheritance
/*
'use strict';
function Cat(name,color)
{
    this.name=name;
    this.color=color;
}
Cat.prototype.age = 4;
var fluffy =  new Cat('Fluffy','White');
console.log(fluffy.__proto__);//Cat prototype with age
console.log(fluffy.__proto__.__proto__);//constructor object
console.log(fluffy.__proto__.__proto__.__proto__);//null
*/


//Creating your own Prototypal Inheritance Chains *????3
//use the 3 concepts in the programs to achieve this
/*
'use strict';
function Animal(voice)
{
  this.voice=voice || 'grunt'; ////if no voice is passed defaults to grunt
  }

    Animal.prototype.speak =function()
    {
        console.log(this.voice);
    };
function Cat(name,color)
{
    Animal.call(this,'Meooww'); //1st concept
    this.name=name;
    this.color=color;
}
Cat.prototype = Object.create (Animal.prototype); //2nd concept
//for constructor to be a cat
Cat.prototype.constructor= Cat; //3rd concept
var fluffy = new Cat('Fluffy','White');
fluffy.speak();
console.log(fluffy instanceof Cat);
console.log(fluffy instanceof Animal);
console.log(fluffy);//cat
console.log(fluffy.__proto__); //cat
console.log(fluffy.__proto__.__proto__);//Animal
*/


//Creating Prototypes with Classes
/*
'use strict';
class Animal {
    constructor(voice)
    {
        this.voice = voice || 'grunt';
    }
    speak()
    {
        console.log(this.voice);
    }
}
class Cat extends Animal
{
    constructor(name,color)
    {
        super('Meowww');
        this.name = name;
        this.color =color;
    }
}
var fluffy = new Cat('Fluffy','White');
fluffy.speak();
console.log(fluffy);
console.log(fluffy.constructor); //constructor is a class
console.log(Object.keys(fluffy.__proto__)); //empty array
console.log(Object.keys(fluffy.__proto__.__proto__));
console.log(fluffy.__proto__.__proto__.hasOwnProperty('speak'));
*/



























