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


