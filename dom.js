//TITLE WITH BLACK BORDER

// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// header.style.borderBottom='solid 3px #000';


// //ADD ITEMS BOLD WITH GREEN COLOR

// console.log(document.getElementById('addItems'));
// var addItem=document.getElementById('addItems');
// console.log(addItem);
// addItem.style.fontWeight = "bold";
// addItem.style.color = "green";

// //GETELEMTBYCLASSNAME: THIRD ELEMENT IN GREEN BACKGROUND AND ALL LIST ELEMENTS IN BOLD
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = "bold";
// }

// //GETELEMENTBYTAGNAME
// //tried editing Item 5 with getelementsbyclassname and then by getelementbytagname
// var li=document.getElementsByTagName('li');
// console.log(li);
// for(var i=0;i<li.length;i++)
// li[i].style.backgroundColor="#f4f4f4";

// //QUERYSELECTOR
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// //secondItem.style.backgroundColor='green';
// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';

// //QuerySelectorALL
// var secItem=document.querySelectorAll('li:nth-child(2)');
// secItem.style.color="green";

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="green";
// }

//TRAVERSING THE DOM
var itemList= document.querySelector('#items');
// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='yellow';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='green';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNode);
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';

//FirstChild
//console.log(itemList.firstChild);
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="Hello1";


//lastChild
// console.log(itemList.lasChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="HelloLast";

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);


// //prevSibling
// console.log(itemList.previousSibling);
// //prevElementSibling
// console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor="blue";


//createElement
//create a div
// var newDiv=document.createElement('div');

// //add class
// newDiv.className='Hello';

// //add id
// newDiv.id='Hello1';

// //add attr
// newDiv.setAttribute('title','Hello Div title');

// //create text node
// var newDivText=document.createTextNode('Hello World');

// //add text to div
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header.container');
// var h1=documemt.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontsize='30px';
// container.insertBefore(newDiv,h1);
// console.log(newDiv);



var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
