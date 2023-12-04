//console.dir(document);

var title=document.getElementById('main-header');
    title.style.borderBottom='solid  5px black';
    title.style.borderTop='solid  5px black';
    title.style.borderLeft='solid  5px black';
    title.style.fontWeight='bold';
    title.style.color='yellow';


var tit=document.getElementsByClassName('tit');
tit[0].style.fontWeight = 'bold';
tit[0].style.color='yellow';
tit[0].style.backgroundColor='green';



var element= document.getElementsByClassName("list-group-item");
element[2].style.backgroundColor='green';

for(var i=0; i<element.length;i++){
    element[i].style.fontWeight='bold';

}