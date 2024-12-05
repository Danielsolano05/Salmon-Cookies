'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('sales-table');
const formElement = document.getElementById('salmonsForm');
const state = {
  allCookiesStand: [],
};

function CookiesStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesEachHour = [];
  this.customersEachHour = [];
  this.totalDailyCookies = 0;
}

CookiesStand.prototype.calcCustemersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

CookiesStand.prototype.calcCookiesEachHour = function () {
  this.calcCustemersEachHour();
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies += oneHour;
  }
};

CookiesStand.prototype.render = function () {
  this.calcCookiesEachHour();
  const tableRow = document.createElement('tr');
  let tableDataElement = document.createElement('td');
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);

  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }

  const tableHeader = document.createElement('th');
  tableHeader.textContent = this.totalDailyCookies;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeadRow() {
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location';
  tableRow.appendChild(tableHeader);

  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }

  tableHeader = document.createElement('th');
  tableHeader.textContent = 'Location Totals';
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFooterRow() {
  const tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Totals for All Locations';
  tableRow.appendChild(tableHeader);

  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < state.allCookiesStand.length; j++) {
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

function renderTable() {
  makeHeadRow();
  for (let i = 0; i < state.allCookiesStand.length; i++) {
    state.allCookiesStand[i].render();
  }
  makeFooterRow();
}

function handleForm(e) {
  e.preventDefault();
  const loc = e.target.loc.value;
  const min = parseInt(e.target.min.value);
  const max = parseInt(e.target.max.value);
  const avg = parseFloat(e.target.avg.value);

  if (!loc || isNaN(min) || isNaN(max) || isNaN(avg) || min > max) {
    alert('Please enter valid inputs. Ensure min ≤ max.');
    return;
  }

  const newStore = new CookiesStand(loc, min, max, avg);
  state.allCookiesStand.push(newStore);

  e.target.loc.value = '';
  e.target.min.value = '';
  e.target.max.value = '';
  e.target.avg.value = '';

  tableElement.innerHTML = '';
  renderTable();
}

document.addEventListener('DOMContentLoaded', () => {
  formElement.addEventListener('submit', handleForm);
});

let seattle = new CookiesStand('Seattle', 12, 25, 8.5);
let tokyo = new CookiesStand('Tokyo', 15, 30, 6.8);
let dubai = new CookiesStand('Dubai', 20, 38, 9.5);
let paris = new CookiesStand('Paris', 35, 48, 8.8);
let lima = new CookiesStand('Lima', 10, 22, 9.2);

state.allCookiesStand.push(seattle, tokyo, dubai, paris, lima);
renderTable();
