'use strict';

//stores

const seattle = {
locationName:seattle,
minCustomersPerHour:12,
maxCustomersPerHour:25,
avgCookiesPerSale:8.5,
cookiesEachHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}

};


const tokyo = {
locationName:tokyo,
minCustomersPerHour:15,
maxCustomersPerHour:30,
avgCookiesPerSale:6.8,
cookiesEachHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}

};


const dubai = {
locationName:dubai,
minCustomersPerHour:20,
maxCustomersPerHour:38,
avgCookiesPerSale:9.5,
cookiesEachHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}

};


const paris = {
locationName:paris,
minCustomersPerHour:35,
maxCustomersPerHour:48,
avgCookiesPerSale:8.8,
cookiesEachHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}

};


const lima = {
locationName:lima,
minCustomersPerHour:10,
maxCustomersPerHour:22,
avgCookiesPerSale:9.2,
cookiesEachHour: [],
estimate: function () {
  this.cookiesEachHour = estimateSales(this);
}

};

//application 

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [seattle, tokyo, dubai, paris, lima];
