'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const tableElement = document.getElementById('sales-table');
const formElement = document.getElementById('salmonsForm');
formElement.addEventListener('submit', handleForm);
//Store constructor function
const state = {
  allCookiesStand:[],
};
 
function CookiesStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesEachHour = [];
  this.customersEachHour = []
  this.totalDailyCookies = 0;
}

// //stores
// const seattle = {
// locationName:'seattle', //forgot ''
// minCustomersPerHour:12,
// maxCustomersPerHour:25,
// avgCookiesPerSale:8.5,
// cookiesEachHour: [],
// estimate: function () {
//   this.cookiesEachHour = estimateSales(this);
// }

// };

// const tokyo = {
// locationName:'tokyo',
// minCustomersPerHour:15,
// maxCustomersPerHour:30,
// avgCookiesPerSale:6.8,
// cookiesEachHour: [],
// estimate: function () {
//   this.cookiesEachHour = estimateSales(this);
// }
// };

// const dubai = {
// locationName:'dubai',
// minCustomersPerHour:20,
// maxCustomersPerHour:38,
// avgCookiesPerSale:9.5,
// cookiesEachHour: [],
// estimate: function () {
//   this.cookiesEachHour = estimateSales(this);
// }
// };
// const paris = {
// locationName:'paris',
// minCustomersPerHour:35,
// maxCustomersPerHour:48,
// avgCookiesPerSale:8.8,
// cookiesEachHour: [],
// estimate: function () {
//   this.cookiesEachHour = estimateSales(this);
// }

// };
// const lima = {
// locationName:'lima',
// minCustomersPerHour:10,
// maxCustomersPerHour:22,
// avgCookiesPerSale:9.2,
// cookiesEachHour: [],
// estimate: function () {
//   this.cookiesEachHour = estimateSales(this);
// }
// };
// //application 
// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
// const stores = [seattle, tokyo, dubai, paris, lima];
// function random (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
CookiesStand.prototype.calcCustemersEachHour = function (){
  for (let i=0; i< hours.length; i++){
    this.customersEachHour.push(random( this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};
CookiesStand.prototype.calcCookiesEachHour = function (){
  this.calcCustemersEachHour();
  for (let i=0; i< hours.length; i++){
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push (oneHour);
    this.totalDailyCookies += oneHour;
  }
};
// function estimateSales (store) {
//   const sales =[];
//   for (let i =0; i< hours.length; i++){
//     const numCustomers = random(store.minCustomersPerHour, store.maxCustomersPerHour);
//     const hoursSales = Math.ceil(numCustomers * store.avgCookiesPerSale); //fix here 
//     sales.push(hoursSales); // misspelled hoursSales hourSales
//   }
//   return sales;
// }
CookiesStand.prototype.render = function (){
this.calcCookiesEachHour();
const tableRow = document.createElement('tr');
let tableDataElement = document.createElement('td');
tableDataElement.textContent = this.locationName
tableRow.appendChild(tableDataElement);
for(let i=0; i<hours.length; i++){
  tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.cookiesEachHour[i];
  tableRow.appendChild(tableDataElement);
}
const tableHeader =document.createElement('th');
tableHeader.textContent = this.totalDailyCookies;
tableRow.appendChild(tableHeader);
tableElement.appendChild(tableRow);
};


let seattle = new CookiesStand('seattle', 12, 25, 8.5);
let tokyo = new CookiesStand('tokyo', 15, 30, 6.8);
let dubai = new CookiesStand('dubai', 20, 38, 9.5);
let paris = new CookiesStand('paris', 35, 48, 8.8);
let lima = new CookiesStand('lima', 10, 22, 9.2);
state.allCookiesStand.push(seattle,tokyo,dubai,paris,lima);
function random(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
}
  function makeHeadRow(){
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'location';
  tableRow.appendChild(tableHeader);
  for(let i=0; i< hours.length; i++){
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
    tableHeader = document.createElement('th');
    tableHeader.textContent = 'Lacation Totals';
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
 }
 function makeFooterRow (){
const tableRow = document.createElement('tr');
let tableHeader = document.createElement('th');
tableHeader.textContent = 'hourly totals for all locations';
tableRow.appendChild(tableHeader);
let totalOfTotals =0;
for(let i =0; i< hours.length; i++){
let hourlyTotal = 0;
for (let j=0; j< state.allCookiesStand.length;j++){

  hourlyTotal += state.allCookiesStand[j].cookiesEachHour[i];
  totalOfTotals += state.allCookiesStand[j].cookiesEachHour[i];
}
tableHeader = document.createElement('th');
tableHeader.textContent = hourlyTotal;
tableRow.appendChild(tableHeader);

}
tableHeader = document.createElement('th');
tableHeader.textContent = totalOfTotals;
tableRow.appendChild(tableHeader);
tableElement.appendChild(tableRow);
 }
 (function renderTable(){
  makeHeadRow();
  for(let i = 0; i< state.allCookiesStand.length;i++){
    state.allCookiesStand[i].render();
  }
  makeFooterRow();
 })();
// function render(store) {
 
//   let total = 0; //fix here
//   const root = document.getElementById('root');

// const storeSection = document.createElement('Section');
// root.appendChild(storeSection);

// const title = document.createElement('h2');
// title.textContent =store.locationName; //stores?
// storeSection.appendChild(title);

// const list = document.createElement('ul');
// storeSection.appendChild (list);

// for (let i = 0; i < hours.length; i++) {  //fix needed here
//   total += store.cookiesEachHour[i];
//   const listItems = document.createElement('li');
//   listItems.textContent =hours[i] + ':' + store.cookiesEachHour[i] + 'cookies';
//   list.appendChild(listItems);
// }

//   const totalItems = document.createElement('li');
//   totalItems.textContent = 'total:' + total + 'cookies';
//   list.appendChild(totalItems)
// }

// function runApplication() {
//   for (let i = 0; i < stores.length; i++){ 
//     stores[i].estimate();
//     render(stores[i]);
//   }
// }

// runApplication();

// Add the event listener with the defined formHandler function
function handleForm(e) {
  e.preventDefault(); // here work is needed to function
   console.log('event object', e);
   const loc = e. target.loc.value;
   const min = parseInt(e.target.min.value);
   const max = parseInt(e.target.max.value);
   const avg = parseFloat(e.target.avg.value); 
   const newStore = new CookiesStand(loc, min, max, avg);
   state.allCookiesStand.push(newStore);
   e.target.loc.value = null;
   e.target.min.value = null;
   e.target.max.value = null;
   e.target.avg.value = null;

   tableElement.deleteTFoot(); // Removes the footer if it exists
   makeFooterRow();
   tableElement.innerHTML = ''; // Clear existing table
  //handleForm(); //work also needed here
   // tableFooter.innerHTML = '';
   //makeFooterRowFooterRow();
}

   makeHeadRow();

   makeFooterRow();

   //formElement.addEventListener('submit', handleForm);
   //const formElement = document.getElementById('salmonsForm'); 2024
   //const newStore = new CookieStand(loc, min, max, avg);

   document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('salmonsForm');
    formElement.addEventListener('submit', handleForm);
  });
  
  function handleForm(e) {
    e.preventDefault();
    console.log("Form submitted!");
    // Your form handling logic here
}