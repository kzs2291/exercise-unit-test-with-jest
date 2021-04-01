// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
} 

const fromEuroToDollar = euroAmount =>{
    return euroAmount * oneEuroIs.USD;
}

const fromDollarToYen = dollarAmount =>{
    return (dollarAmount / oneEuroIs.USD) * oneEuroIs.JPY; 
}

const fromYenToPound = yenAmount =>{
    return (yenAmount / oneEuroIs.JPY) * oneEuroIs.GBP;
}
// just a console log for ourselves.
console.log(sum(7,3))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(1))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen};