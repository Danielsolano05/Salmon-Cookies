'use strict';

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const tableElement = document.getElementById('sales-table');
//Store constructor function
const state = {
  allCookiesStands:[],
};
 
functioncookiesStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesEachHour = [];
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
cookiesStands.prototype.calcCustemersEachHour = function (){
  for (let i=0; i< hours.length; i++){
    this.customersEachHour.push(Random( this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};
cookiesStands.prototype.calcCookiesEachHour = function (){
  this.calcCustemersEachHour();
  for (let i=0; i< hours.length; i++){
    const oneHour = math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
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
cookiesStands.prototype.render = function (){
this.callCookiesEachHour();
const tableRow = document.createElement('tr');
let TableDataElement = document.createElement('td');
tableDataElement.textContent = this.locationName
tableRow.appendChild(tableDateElement);
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


let seattle = new cookiesStands('seattle', 12, 25, 8.5);
let tokyo = new cookiesStands('tokyo', 15, 30, 6.8);
let dubai = new cookiesStands('dubai', 20, 38, 9.5);
let paris = new cookiesStands('paris', 35, 48, 8.8);
let lima = new cookiesStands('lima', 10, 22, 9.2);
state.allCookiesStands.push(seattle,tokyo,dubai,paris,lima);
function random(min, max){
  return math.floor(math.random() * (max-min + 1)) + min;
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
    tableHeader.textContent = 'lacation Totals';
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
 }
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
