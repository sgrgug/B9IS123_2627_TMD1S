// Exercise 6 object["key"] to access a keyed element of an object. <BR></BR>
// Create a function taking two objects, basket and prices, and returns the total cost.
// The basket object should contain an integer quantity for each product in the basket, while the prices object should contain a number representing the price of each product in the shop.

const basket = {
    apple: 2,
    banana: 3,
    milk: 1
};

const prices = {
    apple: 100,
    banana: 50,
    milk: 80
};

const totalCost = (basket, prices) => {
    let total = 0;

    for (let product in basket) {
        total += basket[product] * prices[product];
    }

    return total;
}

console.log(totalCost(basket, prices))