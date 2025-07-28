let form = document.getElementById('form');

let additem = document.getElementById('add');

let ul = document.getElementById('ul');
let filter_item = document.getElementById('filter');
let input = document.getElementById('input');
let clearAll = document.getElementById('clear');

// input = input.value;
additem.addEventListener('click', onAdditem);

function  onAdditem(e) {

  if (input.value === '') {
    e.preventDefault();  
    alert('error');
  } else {
    //create li
    const li = document.createElement('li');

    text = document.createTextNode(input.value);
    li.className = 'item';
    li.id = 'listitem';
    li.appendChild(text);

    li.style.border = '2px solid black';
    li.style.width = '80%';
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.marginBottom = '20px';
   
    li.style.fontSize = '25px';
    li.style.fontWeight = 'bold';
    li.style.paddingTop = '5px';
    li.style.paddingBottom ='5px';
    li.style.paddingLeft ='35px';
    li.style.paddingRight ='35px';


    const div = document.createElement('span');
    li.appendChild(div);
    div.style.display = 'flex';
    div.style.gap = '60px';
    // div.style.border = '1px solid black'
    div.style.height = 'fit-content'
    
    //icon
    const item_cancel = createButton('item_cancel');
      div.appendChild(item_cancel);
    // item_cancel.id = 'item_cancel';
    // item_cancel.style.width = 'fit-content';
    // item_cancel.style.border = 'none';

    
    const Edit_Item = createEditButton('editItem');
    div.appendChild(Edit_Item);
    document.querySelector('#ul').appendChild(li);
    // const i = document.createElement('i');
    // i.className = 'fa-solid fa-square-xmark';
    // i.style.fontSize = '30px';
    // i.style.border = 'none';
    
    // item_cancel.appendChild(i);
  
  }
}

  
//     const addIcon = createAddIcon("fa-regular fa-pen-to-square");
function createButton(classes) {
    const item_cancel = document.createElement('button');
    item_cancel.className = classes;
    item_cancel.id = 'item_cancel';
    item_cancel.style.width = 'fit-content';
    item_cancel.style.border = 'none';
    
    const i = createIcon('fa-solid fa-square-xmark');
    item_cancel.appendChild(i);
    
    return item_cancel;
}
function createIcon(classes) {
      const i = document.createElement('i');
      i.className = classes;
      i.style.fontSize = '35px';
      i.style.border = 'none';
      return i;
}

//edit Item Icon
  function createEditButton(EditClasses){
    const edit_Item = document.createElement('button');
    edit_Item.className = EditClasses;
    edit_Item.style = 'fit-content';
    edit_Item.style.border = 'none';

    const editIcon = createEditIcon("fa-regular fa-pen-to-square");
    edit_Item.appendChild(editIcon);
    return edit_Item;
  }

  function createEditIcon(editIconclass) {
    const editIcon = document.createElement('i');
    editIcon.className = editIconclass;
    editIcon.style.fontSize = '30px';
    editIcon.style.border = 'none';
    return editIcon;
   }
   
//remove logic

ul.addEventListener('click',removeItem);

function removeItem(e) {
  // console.log(e.target.parentElement.classList.contains());contains('remove-item')
 if(e.target.parentElement.classList.contains('item_cancel')){
    // if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    // }
 } 
}

//clearAll logic  -----------

clearAll.addEventListener('click',onclearAll);
function onclearAll() {
 
  while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
  }
}

//filter logic

filter_item.addEventListener('input',onfilter);

function onfilter(e) {
  // const Item = ul.children;
  const Item = ul.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  Item.forEach((item)=>{
    const itemName = item.firstChild.textContent.toLowerCase();
    // let a = (itemName.indexOf(text) != -1);
   
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  })
  
}

//edit logic

ul.addEventListener('click',onEditItem);

function onEditItem(e) {
   
//  const li = e.target.parentElement.previousSibling.previousSibling;
const li = e.target.parentElement.parentElement.previousSibling;
console.log(li);

    if (e.target.parentElement.classList.contains('editItem') == true) {
        let prom = prompt('Enter value:');
        
            // e.target;
          prom = prom.toString().replace(li,prom).trim();

          let text = e.target.parentElement.parentElement;
          
          li.textContent = prom;    
      }    
      
}
