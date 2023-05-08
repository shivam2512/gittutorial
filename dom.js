//TITLE WITH BLACK BORDER

console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
header.style.borderBottom='solid 3px #000';


//ADD ITEMS BOLD WITH GREEN COLOR

console.log(document.getElementById('addItems'));
var addItem=document.getElementById('addItems');
console.log(addItem);
addItem.style.fontWeight = "bold";
addItem.style.color = "green";

//GETELEMTBYCLASSNAME: THIRD ELEMENT IN GREEN BACKGROUND AND ALL LIST ELEMENTS IN BOLD
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = "bold";
}

//GETELEMENTBYTAGNAME
//tried editing Item 5 with getelementsbyclassname and then by getelementbytagname
var li=document.getElementsByTagName('li');
console.log(li);
for(var i=0;i<li.length;i++)
li[i].style.backgroundColor="#f4f4f4";

//QUERYSELECTOR
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';

//QuerySelectorALL
var secItem=document.querySelectorAll('li:nth-child(2)');
secItem.style.color="green";

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="green";
}
