var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
var newItem1=document.getElementById('item1').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));

  // Create del and edit button element
  var deleteBtn = document.createElement('button');
var editBtn=
document.createElement('button');
  // Add classes to del & edit button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
deleteBtn.appendChild(document.createTextNode('X'));
editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(deleteBtn);
li.appendChild(editBtn);
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

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  
  // Convert to an array
  Array.from(items).forEach(function(items){
    var itemName = items.firstChild.textContent;
   var itemName1=items.secondChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) !=-1){
      items.style.display = 'block';
    } else {
      items.style.display = 'none';
    }
  });
}
//storing form data in localstorage
// window.onload = function() {
// // Check for LocalStorage support.
//   if (localStorage) {
// // Add an event listener for form submissions
//     document.getElementById('addForm').addEventListener('submit', function() {
//       // Get the value of the name field.
//       var item = document.getElementById('item').value;
// var item1 = document.getElementById('item1').value;
//       // Save the name in localStorage.
//       localStorage.setItem('item', item);
//        localStorage.setItem('item1', item1);
//     });

//   }

// }


//
var item= document.getElementById('item').value; 
var item1= document.getElementById('item1').value;
let myObj={
  //tried many workaround but didn't got the right one.
name: item,
name1: item1
};
let myObj_ser=JSON.stringify(myObj);
localStorage.setItem("myObj",myObj_ser);
let myObj_deser=JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deser)
