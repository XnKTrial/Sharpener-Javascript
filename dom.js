var header= document.querySelector('#main-header');
header.style.borderBottom='solid 5px black';
header.style.borderTop='solid 5px black';
header.style.borderLeft='solid 5px black';
header.style.borderRight='solid 5px black';

var titles=document.querySelectorAll('.title');

var odd=document.querySelectorAll('li:nth-child(odd)')

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='GREEN';
}

var even=document.querySelectorAll('li:nth-child(even)')

for(var i=0; i<even.length;i++){
    even[i].style.backgroundColor='yellow';
}