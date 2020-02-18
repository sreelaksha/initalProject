//JavaScript best practices
//Behaviors
//Delete properties
/*
var obj= { a:100, b:200};
var myVar= 10;
delete obj.a;
//delete myVar;
//delete obj;
console.log(obj);
console.log(myVar);
*/

//With - creates confusion nd is not recommended
/*
'use strict';
var obj = {
    a:{
    b:
    {
        c:'hello'
    }
    }
}
var c = 'this is another c ';
with(obj.a.b){
    console.log(c);
}*/


//Drawback of with can be achieved using IIFE
/*
'use strict';
var obj = {
    a:{
    b:
    {
        c:'hello'
    }
    }
};
var c = 'this is another c ';
//IIFE
(function (newVar){
    console.log(newVar);
} (obj.a.b.c));
*/

//'this' keyword - used as a mechanism to get a hold of a variable on the object that it is part of
/*
'use strict';
var obj = {
    val :'Hallo',
    printVal :  function(){
        //console.log(this);
        console.log(this.val); //1
    }
};
//2
var obj2 = {
    val :'Wie geht?'
    };
var print = obj.printVal.bind(obj2); //3.bind to object so 'this' is not undefined
print();
//obj2.printVal = obj.printVal;
//obj2.printVal();
*/


//This is 'new' object
/*
var obj= function(){
    var _this =this; //make a copy and use it throughout for the object
   console.log(this);
    _this.hello = 'hello';

    _this.greet= function(){
        console.log(_this.hello);
    };
    this.delayGreeting =function(){
        setTimeout(_this.greet,1000); //its not calling obj.greet so
   //1.this.greet.bind(this) or _this.greet

    };
};
var greeter = new obj();
//console.log(greeter);
greeter.delayGreeting();
*/


//Async Pattern
//Callbacks
//Promises
//ES6 and Babel
//Async -Await

//Production Code
//NPM Settings














