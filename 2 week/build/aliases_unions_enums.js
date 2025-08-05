"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderType;
(function (OrderType) {
    OrderType["pending"] = "pending";
    OrderType["collected"] = "collected";
    OrderType["delivered"] = "delivered";
})(OrderType || (OrderType = {}));
// Проверяет что объект — это Product.
const isProduct = (obj) => {
    return (obj !== null &&
        typeof obj.id === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.price === 'number' &&
        typeof obj.category === 'string');
};
const isOrder = (obj) => {
    const statusValues = Object.values(OrderType);
    return (obj !== null &&
        typeof obj.id === 'string' &&
        Array.isArray(obj.products) &&
        obj.products.every(isProduct) &&
        statusValues.includes(obj.status));
};
// Обрабатывает заказ только если он типа Order.
const processOrder = (order) => {
    if (isOrder(order)) {
        console.log("processing order");
    }
    else {
        console.log("not order");
    }
};
const order1 = {
    id: "order123",
    products: [
        {
            id: "111",
            name: "Board",
            price: 50,
            category: "surfing"
        }
    ],
    status: "pending"
};
const order2 = "Board";
processOrder(order1);
processOrder(order2);
//# sourceMappingURL=aliases_unions_enums.js.map