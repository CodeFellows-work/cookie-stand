'use strict';

// Constructor, object for Location
function Locations(name, photo, min, max, avgCustomer) {
    this.name = name;
    this.photo = photo;
    this.min = min;
    this.max = max;
    this.avgCustomer = avgCustomer;
  }
function randCustNum(min, max)  {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
Locations.prototype.getCustomer = function() { 
  this.customer = randCustNum(this.min, this.max) + ' cookies'
}
const seattle = new Locations('Seattle','./img/SeattleViewinblue.jpeg',23,26,6.3); 
console.log(seattle);
console.log(seattle.getCustomer());
const tokyo = new Locations('Tokyo','/img/Tokyo.jpeg',3,24,1.2);
console.log(tokyo); 
console.log(tokyo.getCustomer());
const dubai = new Locations('Dubai','/img/Dubai.jpeg',11,38,3.7);
console.log(dubai); 
console.log(dubai.getCustomer());
const paris = new Locations('Paris','./img/Paris.jpeg',20,38,2.3);
console.log(paris);
console.log(paris.getCustomer());
const lima = new Locations('Lima', './img/Lima.jpeg',2,16,4.6);
console.log(lima); 
console.log(lima.getCustomer());

const operatingHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

Locations.prototype.generateSales = function() {
  this.grandTotal =0; 
  this.hourlySales = []; 
    for(let i=0; i<operatingHours.length; i++){
    let customers = this.getCustomer(); 
    let soldCookies = Math.floor(customers * this.avgCustomer);
     this.grandTotal += soldCookies; 
     console.log(soldCookies);
    this.hourlySales.push(soldCookies); 
  }
}

seattle.generateSales();  
tokyo.generateSales(); 
dubai.generateSales(); 
paris.generateSales(); 
lima.generateSales(); 

const locationDivElement = document.getElementById("locations"); 
const locationTableArrayRows = ['seattle', 'tokyo', 'dubai', 'paris', 'lima']; 
Locations.prototype.render = function() { 

  const locationArticle = document.createElement('article'); 
  locationDivElement.appendChild(locationArticle); 

  const h2Element = document.createElement('h2');
  h2Element.textContent = this.name; 
  locationArticle.appendChild(h2Element); 

  const imgElement = document.createElement('img'); 
  imgElement.setAttribute('src', this.photo);
  imgElement.setAttribute('alt', this.name); 
  imgElement.setAttribute('id', 'allImages'); 
  locationArticle.appendChild(imgElement); 

  const tableElement = document.createElement('table');
  locationArticle.appendChild(tableElement);

  for(let j = 0; j < locationTableArrayRows.length; j++){
  const trElement = document.createElement('tr'); 
  trElement.textContent = locationTableArrayRows[j];  
  tableElement.appendChild(trElement); 
    for(let i = 0; i < operatingHours.length; i++){
    const thElementOne = document.createElement('th');
    thElementOne.textContent = operatingHours[i];
    trElement.appendChild(thElementOne);
  }

  }
}

seattle.render(); 
tokyo.render(); 
dubai.render(); 
paris.render(); 
lima.render(); 
