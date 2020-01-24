let textArea = document.getElementById('text-area');
let buttonArea = document.getElementById('button-area');

buttonArea.addEventListener('click',function(){
    console.log('hi');
    textArea.innerText= 'This is text in js file';
});
