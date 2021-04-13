'use strict';

// Creating the object 'seattle' 
const seattle = { 
  // Adding the name 'Seattle'
  name: 'Seattle', 
  // Create an average sale property for seattle 
  avgCookieSale: 0,
  // Photo of Seattle
  photo: './img/SeattleViewinblue.jpeg', 
  // Creating a method in this object to output random cookies 
  getAverageSale: function(){
    console.log('This is how many cookies before the method: ' + this.avgCookieSale);
    this.avgCookieSale = randomCust(23, 65) + ' cookies';
    console.log('This is how many cookies after the random customers have been pushed through in Seattle: ' + this.avgCookieSale); 
  }
}
// Creating the object 'tokyo' 
const tokyo = {
  // Adding the name 'Tokyo'
  name: 'Tokyo',
  // Create an average sale property for tokyo 
  avgCookieSale: 0, 
  // photo of Tokyo 
  photo: './img/Tokyo.jpeg',
  // Creating a method in this object to output random cookies
  getAverageSale: function(){
    console.log('This is how many cookies before the method: ' + this.avgCookieSale);
    this.avgCookieSale = randomCust(23, 65) + ' cookies';
    console.log('This is how many cookies after the random customers have been pushed through in Tokyo: ' + this.avgCookieSale); 
  }
}
const dubai = { 
 // Adding the name 'Dubai'
 name: 'Dubai',
 // Create an average sale property for dubai 
 avgCookieSale: 0, 
 // photo of Dubai 
 photo: './img/Dubai.jpeg',
 // Creating a method in this object to output random cookies
 getAverageSale: function(){
   console.log('This is how many cookies before the method Dubai: ' + this.avgCookieSale);
   this.avgCookieSale = randomCust(23, 65) + ' cookies';
   console.log('This is how many cookies after the random customers have been pushed through in Dubai: ' + this.avgCookieSale); 
 }
}
const paris = { 
  // Adding the name 'Paris'
  name: 'Paris',
  // Create an average sale property for paris 
  avgCookieSale: 0, 
  // photo of Paris
  photo: './img/Paris.jpeg',
  // Creating a method in this object to output random cookies
  getAverageSale: function(){
    console.log('This is how many cookies before the method paris: ' + this.avgCookieSale);
    this.avgCookieSale = randomCust(23, 65) + ' cookies';
    console.log('This is how many cookies after the random customers have been pushed through in Paris: ' + this.avgCookieSale); 
  }
 }
 const lima = { 
  // Adding the name 'Lima'
  name: 'Lima',
  // Create an average sale property for lima 
  avgCookieSale: 0, 
  // photo of Lima
  photo: './img/Lima.jpeg',
  // Creating a method in this object to output random cookies
  getAverageSale: function(){
    console.log('This is how many cookies before the method Lima: ' + this.avgCookieSale);
    this.avgCookieSale = randomCust(23, 65) + ' cookies';
    console.log('This is how many cookies after the random customers have been pushed through in Lima: ' + this.avgCookieSale); 
  }
 }
// This is the function that will generate the random number of customers 
function randomCust(min,max) {
  return Math.floor(Math.random() * (max - min) + min); 
}
// This is to call the object of seattle with the method to get the average sales
//seattle.getAverageSale(); 
//tokyo.getAverageSale(); 
//dubai.getAverageSale();
//paris.getAverageSale();
//lima.getAverageSale(); 

const locationArray = [seattle, tokyo, dubai, paris, lima]; 

const locationProfiles = document.getElementById("locations")

for(let i =0; i < locationArray.length; i++){

  const article = document.createElement("article");
  locationProfiles.appendChild(article); 

  let currentLocation = locationArray[i]; 
  const h2Element = document.createElement("h2");
  h2Element.textContent = currentLocation.name;
  article.appendChild(h2Element);

  console.log(currentLocation.name); 

  const imgElement = document.createElement("img");
  imgElement.setAttribute("id", 'allImages'); 
  imgElement.setAttribute("src", currentLocation.photo);
  imgElement.setAttribute("alt", 'Salmon Cookies in ${currentLocation.name}.')
  article.appendChild(imgElement); 

  const operatingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM', '3PM','4PM','5PM','6PM','7PM']
  const ulElement = document.createElement("ul");
  article.appendChild(ulElement);
    
    let j = 0;
    while(j < operatingHours.length){
      const liElement = document.createElement("li");
      currentLocation.getAverageSale();
      liElement.textContent = 'At '+operatingHours[j]+', the average cookie sale was ' +currentLocation.avgCookieSale +'.'; 
      currentLocation.getAverageSale();
      ulElement.appendChild(liElement); 
      j++; 
      console.log('At ' + operatingHours[j] +' '+ currentLocation.avgCookieSale + ' was  ' +currentLocation.avgCookieSale + '.'); 
      
    }



}

