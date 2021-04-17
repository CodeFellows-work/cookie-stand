'use strict';

// Constructor, object for Location
function Locations(name, photo, min, max, avgCustomer) {
  this.name = name;
  this.photo = photo;
  this.min = min;
  this.max = max;
  this.avgCustomer = avgCustomer;
} 
// function to generate random customers
function randCustNum(min, max)  {
  return  Math.floor(Math.random() * (max - min + 1) + min); 
}
// Protype Method that will store the random customers into a property 'customers'
Locations.prototype.getCustomer = function() { 
  this.customer = randCustNum(this.min, this.max);
}
// New objects are made and values are set in order of the constructor function properties 
// Console will log each values, for each city 
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
// Locate the element that will house the form 
let formElement = document.getElementById('newLocation'); 
// Create a function for the form 
function handleSubmit(event) { 
  event.preventDefault();
  // input from will be used in JavaScript
  let name = event.target.name.value; 
  let photo = event.target.photo.value; 
  let min = event.target.min.valueAsNumber; 
  let max = event.target.max.valueAsNumber; 
  let avgCustomer = event.target.avgCustomer.valueAsNumber; 
  // create new location 
  const LocationFromForm = new Locations(name, photo, min, max, avgCustomer);
  // push the new location into the location array 
  locationsArray.push(LocationFromForm); 
  LocationFromForm.getCustomer();
  LocationFromForm.generateSales();
  // wipe any existing data so that, render with new data occurs 
  tableElement.innerHTML = ''; 
  renderHeader();
  renderAllStores();
  wrapFooter(); 
  // LocationFromForm.render();
  // renderTable(); 
  event.target.reset(); 
} 
// form listener for events 
formElement.addEventListener('submit', handleSubmit); 
// An array is created for operating hours 
const operatingHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// A global array is created for locations or the objects 
const locationsArray = [seattle, tokyo, dubai, paris, lima]; 
// A loop is made to get the number of customers for each location
for(let i=0; i< locationsArray.length; i++){
  locationsArray[i].getCustomer(); 
}
// A prototype method is used to calculate the sales for each hour, in each location, as well as keep track of the grand total cookie sales for each location
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
// A loop is created to generate the sales or perform the math for each location, so that the values of each location or object is updated with the recent calculated sales. The locations are pulled from the 'locationsArray' followed by the incrementing index and the render method.
for(let i=0; i< locationsArray.length; i++){
  locationsArray[i].generateSales(); 
}
// Locate the element that will hold the rendered content 
const locationDivElement = document.getElementById("locations"); 
// Create a prototype method to render the content of each locations name, and image 
Locations.prototype.render = function() { 
  // create the article element that will house the content 
  const locationArticle = document.createElement('article'); 
  locationDivElement.appendChild(locationArticle); 
  // create the heading for the content 
  const h2Element = document.createElement('h2');
  h2Element.textContent = this.name; 
  locationArticle.appendChild(h2Element); 
  // images of each location
  const imgElement = document.createElement('img'); 
  imgElement.setAttribute('src', this.photo);
  imgElement.setAttribute('alt', this.name); 
  imgElement.setAttribute('id', 'allImages'); 
  locationArticle.appendChild(imgElement); 
}
// A loop is made to render each location. The locations are pulled from the 'locationsArray' followed by the incrementing index and the render method. 
for(let i=0; i< locationsArray.length; i++){
  locationsArray[i].render(); 
}
 //Create am article element to house the table
  const locationArticle = document.createElement('article'); 
  locationDivElement.appendChild(locationArticle); 
  // Creat the table element 
  const tableElement = document.createElement('table');
  tableElement.setAttribute('id', 'salesTable'); 
  locationArticle.appendChild(tableElement);
// Create a normal global function so that you can render the table at the start, then also call it again with new data once you enter data into the form. 
function renderHeader() {  
  // a new row is created
  const trElementOne = document.createElement('tr');
  tableElement.appendChild(trElementOne);

  const thElement = document.createElement('th'); 
  trElementOne.appendChild(thElement);
  // A loop is created to push the operating hours into the headers of the table. This uses the operating hours array to index through each hour. 
  for(let i = 0; i < operatingHours.length; i++){
  const thElement = document.createElement('th'); 
  thElement.textContent = operatingHours[i];
  trElementOne.appendChild(thElement);
  }
  const thElementOne = document.createElement('th');
  thElementOne.textContent = 'Daily Total';
  trElementOne.appendChild(thElementOne); 
}
  // A locations prototype method is made to render the hourly sales into each cell under operating hours
  Locations.prototype.renderStore = function(){
  const trElement = document.createElement('tr'); 
  trElement.textContent = this.name;  
  tableElement.appendChild(trElement); 
    for(let i = 0; i < operatingHours.length; i++){
    const tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i]; 
    trElement.appendChild(tdElement); 
    } 
    // A single cell is created to house the grand total of of all the sales
    const tdElementTotal = document.createElement('td');
    tdElementTotal.textContent = this.grandTotal;  
    trElement.appendChild(tdElementTotal); 
  } 
  // A normal function is used to render all the stores within the locationsArray 
  function renderAllStores() {
    for(let i =0; i < locationsArray.length; i++){
    console.log(locationsArray);
    locationsArray[i].renderStore();
    }
  }
  // a normal function is used to create a footer for the table
  function wrapFooter() {
    // A table footer is created with the footer element
    const tfootElement = document.createElement('tfoot'); 
    tfootElement.setAttribute('id', 'tfooter');
    tableElement.appendChild(tfootElement);
    // A cell is created within the footer of the table and the first row will output 'Totals'
    const trFootElement = document.createElement('td'); 
    trFootElement.textContent = "Totals: "
    tfootElement.appendChild(trFootElement); 
    // A for loop is used to calculate the totals of each hour within the operating hours array
    let grandHourlyTotal =0;
    for(let i = 0; i<operatingHours.length; i++){
    let hourTotal = 0;
      for(let j =0; j< locationsArray.length; j++){
      let salesAtThisStoreThisHour = locationsArray[j].hourlySales[i];
      hourTotal += salesAtThisStoreThisHour;
      grandHourlyTotal += salesAtThisStoreThisHour;
      }
    // A cell is made to hold the hourly total for each store
    const trFootElement = document.createElement('td'); 
    trFootElement.textContent = hourTotal;
    tfootElement.appendChild(trFootElement); 
    }
    // A cell is created to house the grandtotal for each store
    const trFootTotal = document.createElement('td');
    trFootTotal.textContent = grandHourlyTotal; 
    tfootElement.appendChild(trFootTotal); 
  }
  // Normal function calls to render the table contents 
renderHeader(); 
renderAllStores();
wrapFooter();