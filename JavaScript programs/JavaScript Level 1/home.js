/*let mySymbol =Symbol();
let person={
    name:'',
    age: 33,
    [mySymbol]:'secretInformation',
    showInfo: function(realAge)
    {
        showMessage(this.name + 'is' +realAge)
    }

};
person.showInfo(34);


let today= new Date();
showMessage(today.toDate());
*/
//
/*let a ="Hello";
showMessage(a.charA(0));

a.style.fontWeight='700'; */

 //

/* var button = document.getElementById('click-me');
button.addEventListener('click',function()
{
        const review = document.getElementById('review');

        if(review.classList.contains('d-none'))
        {
            review.classList.remove('d-none');
            button.textContent = 'CLOSE Review';
        }
        else
        {
            review.classList.add('d-none');
            button.textContent = 'SEE Review';
        }


}); */


//Push method in an array
 /*const values=['a','b','c'];
 values.push('d'.'e');
 console.log(values);*/


 //Pop method in an array
 /*const values=['a','b','c'];
  values.pop();
  console.log(values) */


  //Shift in an array
  /*const values=['a','b','c'];
  const shiftedValue = values.shift();
  console.log(values, + Shifted value is : + shiftedValue); */

  //Unshift in an Array
/*const values=['a','b','c'];
 values.unshift('hey');
 console.log(values); */

 //Slice() in an array
/*const values=['a' , 'b' , 'c' , 'd'];
 const newValue = values.slice(1,3);
 console.log(newValue); */


 //Splice() in an array for deleting
/*const values=['a' , 'b' , 'c' , 'd'];
 const newValue = values.splice(1,3);
 console.log(values); */


 //Splice() in an array for inserting
/*const values=['a' , 'b' , 'c' , 'd'];
 const newValue = values.splice(1,0,3, 'hi');  //0 is nothing to delete ,1 is position to add,3 and hi are elements to add
 console.log(values);  */

//Array searching and looping
 //indexOf()
/*const values=['a' , 'b' , 'c' , 'd'];
 const newValue = values.indexOf('y'); //index of -1 is not possible so it means its not found
 console.log(newValue)*/;
 //or console.log(values.indexOf('d'));



 //find()
/*const values=['a' , 'bbbb' , 'cccc' , 'dddd'];
 const result = values.find(function(arg) {
        console.log('Item is :' ,arg);
        return arg.length >3;
 }
 );
 console.log(result);*/




 //filter()
/*const values=['a' , 'b' , 'c' , 'd'];
 const result = values.filter(function(arg) {
        console.log('Item is :' ,arg);
        return arg >'b';
 }
 );
 console.log(result);*/




 //forEach()
/*const values=['a','b','c','d']
values.forEach(function(arg)   {

    console.log(arg);
});*/






//Array in the DOM - to hide somethings in the web page using its index
/*
const containers = document.getElementsByClassName('container');
containers[1].classList.add('d-none');
console.log(containers);
*/




//------------------------------------------
//Scope and Hoisting
// ******* Global scope  *******
//Always good to declare an object and then add all data in it than add individual data with global scope
  /*const details={
    ProductId: 12,
    ProductName: 'Handbag',
    Username :'Laksha'
  };

  function showDetails ()
  {
    console.log('PId is :', details.ProductId);
  }
  showDetails();*/





//Function Scope

//Hoisting is possible for Functions (see ex) but for variable and  use let and const and avoid var

/*showDetails();  //hoisting
function showDetails ()
  {
    console.log(123);
  }
  */



 // 'use strict' string to say to compliler that you are in strict mode
/*'use strict';

 productId = 1234;
 console.log(productId);*/

 let firstName= "Sreelaksha";
 let lastName="Srinivas";
 let fullName= firstName  +  lastName ;
 console.log(fullName);





