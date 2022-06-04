// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar){
    let valueinYen = valueInDollar * 130.83;
    return valueinYen;
}

module.exports = { sum, fromDollarToYen }

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0061
    return valueInPound
}
module.exports = { sum, fromYenToPound }