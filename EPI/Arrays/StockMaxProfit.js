


function stockMaxProfit(prices) {
    let min = prices[0], maxProfit = 0;

    prices.forEach(price => {
        const curProfit = price - min;

        if (curProfit > maxProfit) {
            maxProfit = curProfit;
        }

        if (price < min) {
            min = price;
        }
    })

    return maxProfit;
}