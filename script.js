// 1

function isMultipleOfThree(number) {
  if (number % 3 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isMultipleOfThree(39));

// 2

function getCurrencySymbolFromCode(currency) {
  let upperCaseCurrency = currency.toUpperCase();
  if (upperCaseCurrency === "GEL") {
    return "ლ";
  } else if (upperCaseCurrency === "USD") {
    return "$";
  } else if (upperCaseCurrency === "EUR") {
    return "€";
  } else {
    return "write currency correctly";
  }
}
console.log(getCurrencySymbolFromCode("usd"));

// 3

function transformToUpperCase(string) {
  string = string.toUpperCase();
  console.log(string);
}
transformToUpperCase("my name is joe");

// 4

function profit(priceForSale, priceForCompany) {
  let companyProfit = priceForSale - priceForCompany;
  let profitInPercents = (companyProfit / priceForCompany) * 100;
  let result = `company profit for this sale is ${profitInPercents}%`;
  console.log(result);
}
profit(1250, 1000);

// 5

let unFilteredNumbers = [
  1321, 3212, 6346, 1234, 5343, 7575, 2347, 7556, 4564, 2340,
];
let evenNumbers = unFilteredNumbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 6

let players = [
  {
    name: "khvicha kvaratskhelia",
    rank: "pro",
    goals: 142,
  },
  {
    name: "victor osimen",
    rank: "pro",
    goals: 192,
  },
  {
    name: "gia suramelashvili",
    rank: "legend",
    goals: 323,
  },
];

// 6

function searchInArray(array) {
  let searchResult = array.find((name) => name.name === "victor osimen");
  console.log(searchResult);
}
searchInArray(players);
