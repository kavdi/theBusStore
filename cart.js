'use strict';

var rowCount = 0;
var yourOrders = JSON.parse(localStorage.getItem('orders'));

for (var a = 0; a < yourOrders.length; a++){
  addToCart(yourOrders[a]);
}

function createAndAppend(tag, parentVar, content, itsClass, itsId) {
  var newElement = document.createElement(tag);
  if (content) {
    newElement.innerText = content;
  }
  if (itsClass){
    newElement.className = itsClass;
  }
  if (itsId){
    newElement.setAttribute('id', itsId);
  }
  parentVar.appendChild(newElement);
  return newElement;
}

function addToCart(object){
  rowCount++;
  console.log(rowCount);
  var tableBody = document.getElementById('tblBody');
  var newRow = createAndAppend('tr', tableBody, '','',rowCount);
  var imageBlock = createAndAppend('td', newRow);
  var image = createAndAppend('img', imageBlock);
  if (object.product.includes('usb')) {
    image.setAttribute('src', 'img/' + object.product + '.gif');
  } else if (object.product.includes('sweep')){
    image.setAttribute('src', 'img/' + object.product + '.png');
  } else {
    image.setAttribute('src', 'img/' + object.product + '.jpg');
  }
  console.log(imageBlock);
  createAndAppend('td', newRow, object.product);
  createAndAppend('td', newRow, object.qty);
  var deleteButton = createAndAppend('td',newRow, '', '');
  createAndAppend('button', deleteButton, 'Delete','', 'deleteButton' + rowCount);
  deleteButton.addEventListener('click', removeRow);
}

var continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click',shoppingPage);

function shoppingPage(){
  window.location.href = 'index.html';
}

var checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', checkoutPage);

function checkoutPage(){
  var body = document.getElementById('tblBody');
  body.innerHTML = '';
  window.location.href = 'checkout.html';
}

function createDeleteEvent(){
  var deleteButton = document.getElementById('deleteButton' + rowCount);
}
function removeRow(event) {
  var row = document.getElementById(event.target.id.slice(-1));
  row.parentNode.removeChild(row);
}
