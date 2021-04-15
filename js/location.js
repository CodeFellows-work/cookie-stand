'use strict'

function Locations(name, photo, min, max, avgCustomer) {
  this.name = name;
  this.photo = photo;
  this.min = min;
  this.max = max;
  this.avgCustomer = avgCustomer;
}

const seattle = new Locations('Seattle','./img/SeattleViewinblue.jpeg',23,26,6.3); 
console.log(seattle);
const tokyo = new Locations('Tokyo','/img/Tokyo.jpeg',3,24,1.2);
console.log(tokyo); 
const dubai = new Locations('Dubai','/img/Dubai.jpeg',11,38,3.7);
console.log(dubai); 
const paris = new Locations('Paris','./img/Paris.jpeg',20,38,2.3);
console.log(paris);
const lima = new Locations('Lima', './img/Lima.jpeg',2,16,4.6);
console.log(lima); 

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