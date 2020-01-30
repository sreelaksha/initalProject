let country= 'IN';
switch(country)
{
  case 'IN':
  {
    console.log("India");
    console.log("Mera bharath mahan");
    break;
  }
  case 'DE':
  {
    console.log("Deutschland");
    break;
  }
  case 'US':
  {
    console.log("USA");
    break;
  }

  default:
    console.log("This is default");
    break;
}
----------------------------------------------------
for(let i=3;i<=5;i++)
{
  console.log(i);
}
----------------------------------------------------
function myFunction(message1, message2)
{
  message1= message1 + 'there'+ message2;
  console.log(message1);
}
myFunction('Hi', 'world!');


//function myFunction(message)
//{
//  let result=message + message + message;
//  return result;
//}

//console.log(myFunction('Hi'));


----------------------------------------------------------------------

let card={
   suits:"Clubs",
   value:"Ace"
 };


console.log(card.suits);
console.log(card.value);
----------------------------------------------------------------------
//if we pass an Object to a Function-ex.card, the function can change
 //the value of the object even after function completes its execution the object stays updated.

function changeCard(card)
 {
   card.suits="Hearts";
 }
   let card={
   suits:"Clubs",
   value:"Ace"
 };

changeCard(card);
console.log(card.suits);
console.log(card.value);


----------------------------------------------------------------------
//Array of objects

let card=[
     {
        suits:"Clubs",
        value:"Ace"
     },
     {
        suits:"Heart",
        value:"Two"
     }
 ];

console.log(card[0].suits, card[1].suits);
console.log(card[1].value);




----------------------------------------------------------------------




----------------------------------------------------------------------





----------------------------------------------------------------------




----------------------------------------------------------------------