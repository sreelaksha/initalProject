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
//Constructor Pattern
/*var Task = function(name){
        this.name = name;
        this.completed = false;

    this.over = function(){
        console.log('Completed task:' + this.name);
        this.completed = true;
    };
    this.save = function(){
        console.log('Saving task:' + this.name);
    };
    };
var task1 = new Task ('Program for constructor');
var task2 = new Task ('Program for modules');
var task3 = new Task ('Program for singletons');
task1.over();
task2.save();*/


//Prototypes
/*var Task = function(name){
        this.name = name;
        this.completed = false;
};
Task.prototype.over = function(){
        console.log('Completed task:' + this.name);
        this.completed = true;
    };
Task.prototype.save = function(){
        console.log('Saving task:' + this.name);
    };

var task1 = new Task ('Program for constructor');
var task2 = new Task ('Program for modules');
var task3 = new Task ('Program for singletons');
task1.over();
task2.save();*/


//Constructor Node












