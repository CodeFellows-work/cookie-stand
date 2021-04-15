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
  return  Math.floor(Math.random() * (max - min + 1) + min); 
}
Locations.prototype.getCustomer = function() { 
  this.customer = randCustNum(this.min, this.max);
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
  for (let i = 0; i < operatingHours.length; i++){
    let cookiesSold = Math.floor(this.customer * this.avgCustomer);
    this.grandTotal += cookiesSold; 
    this.getCustomer(); 
    this.hourlySales.push(cookiesSold); 
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
}
seattle.render(); 
tokyo.render(); 
dubai.render();
paris.render();
lima.render(); 

const locationArticle = document.createElement('article'); 
locationDivElement.appendChild(locationArticle); 

const tableElement = document.createElement('table');
locationArticle.appendChild(tableElement);

const thElement = document.createElement('th'); 
tableElement.appendChild(thElement);



for(let i = 0; i < operatingHours.length; i++){
const thElement = document.createElement('th'); 
thElement.textContent = operatingHours[i];
tableElement.appendChild(thElement);
}
const locationsArray = [seattle, tokyo, dubai, paris, lima]; 

for(let j = 0; j < locationsArray.length; j++){
const trElement = document.createElement('tr'); 
trElement.textContent = locationsArray[j].name;  
tableElement.appendChild(trElement); 

    for(let k = 0; k < operatingHours.length; k++){
    const tdElement = document.createElement('td');
    tdElement.textContent = locationsArray[j].hourlySales[k]; 
    trElement.appendChild(tdElement); 
  }    

}
let grandTotals = 0; 
for(let j = 0; j<locationsArray.length; j++){
  grandTotals += locationsArray[j].grandTotal; 
}
const tfootElement = document.createElement('tfoot'); 
tableElement.appendChild(tfootElement);

  for(let i =0; i < operatingHours.length; i++){
  const trFootElement = document.createElement('td'); 
  trFootElement.textContent = grandTotals + ' Total Cookies Sold'; 
  tfootElement.appendChild(trFootElement); 
  }
 