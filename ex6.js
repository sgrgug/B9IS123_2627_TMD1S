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