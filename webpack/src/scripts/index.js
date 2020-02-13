//Design Pattern in JavaScript

//Objects in JavaScript
/*var task = { };
task.title = 'Learn JavaScript, React';
task.description = 'And finish it';
task.toString = function()
    {
        return this.title + ' ' + this.description;
    };
console.log(task.toString());*/

//Property in JavaScript
/*var task =
{
    title : 'Learn JavaScript, React',
    description : 'And finish it'
};
Object.defineProperty (task, 'toString' , {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable : false,
    enumerable : false,
    configurable : true
 });
Object.defineProperty (task, 'toString' , {
    enumerable : true
}); //to show that configurable is possible
task.toString = 'Hi'; //to make sure writable is false-by overwriting function
console.log(task);
console.log(Object.keys(task));*/


//Inheritance
/*
var task =
{
    title : 'Learn JavaScript, React',
    description : '-- And finish it'
};
Object.defineProperty (task, 'toString' , {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable : false,
    enumerable : false,
    configurable : false
 });
 var urgentTask = Object.create(task); //Inheriting from task or same as task object
 Object.defineProperty (urgentTask, 'toString' , {
     value: function(){
         return this.title + ' - is urgent';
     },
     writable : false,
     enumerable : false,
     configurable : false
});
console.log(urgentTask.toString());
*/


//Creational Design Pattern







