let textArea = document.getElementById('text-area');
let buttonArea = document.getElementById('button-area');
    textArea.style.display='blbok';
buttonArea.addEventListener('click',function(){
    textArea.style.display='none';
    console.log('hi');
    textArea.innerText= 'This is text in js file';
});
