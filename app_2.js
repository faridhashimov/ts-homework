"use strict";
const totalPrice = ({ price, discount, isInstallment, months, }) => {
    let discountedPrice = price - price * (discount / 100);
    if (isInstallment) {
        return discountedPrice / months;
    }
    else {
        return discountedPrice;
    }
};
const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: false,
    months: 12,
});
console.log(price); // 6250
