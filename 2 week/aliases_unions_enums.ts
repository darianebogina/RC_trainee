import type {Product} from "./types_interfaces";

type OrderStatus = 'pending' | 'collected' | 'delivered';

/*Определить тип Order с полями: id, products (массив Product), status (OrderStatus).*/
type Order = {
    id: string;
    products: Array<Product>;
    status: OrderStatus;
}

enum OrderType {
    pending = 'pending',
    collected = 'collected',
    delivered = 'delivered'
}

// Проверяет что объект — это Product.
const isProduct = (obj: Record<string, unknown>): obj is Product => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    return (typeof obj.id === 'string' &&
        typeof obj.name === 'string' &&
        typeof obj.price === 'number' &&
        typeof obj.category === 'string');
}

const isOrder = (obj: unknown): obj is Order => {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    const statusValues = Object.values(OrderType);
    const order = obj as Record<string, unknown>;
    return (typeof order.id === 'string' &&
        Array.isArray(order.products) &&
        order.products.every(isProduct) &&
        statusValues.includes(order.status as OrderType));
}

// Обрабатывает заказ только если он типа Order.
const processOrder = (order: Order | string) => {
    if (isOrder(order)) {
        console.log("processing order");
    } else {
        console.log("not order");
    }
};

const order1: Order = {
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

const order2: string = "Board";


processOrder(order1);
processOrder(order2);