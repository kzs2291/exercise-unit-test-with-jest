// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen } = require('./app.js');


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// start your first test
test("1 Euro es igual a 1.2 dolares", () => {
    //inside the test we call our fromEuroToDollar function with 1 number
    let dollar = fromEuroToDollar(1);
    let expected = 1.2;

    // we expect the fromEuroToDollar with 1 number to be 1.2
    expect(dollar).toBe(expected);
});

test("1 dollar es igual a 106.58333333333334 yen", () =>{
    let yen = fromDollarToYen(1);
    let expected = 106.58333333333334;

    expect(yen).toBe(expected);
});

test("1 Yen es igual a 0.006254886630179828 pounds", () =>{
    let pound = fromYenToPound(1);
    let expect = 0.006254886630179828;

    expect(pound).toBe(expected);
});


