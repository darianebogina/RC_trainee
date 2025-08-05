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
const isProduct = (obj: Object): obj is Product => {
    return (obj !== null &&
            typeof (obj as any).id === 'string' &&
            typeof (obj as any).name === 'string' &&
            typeof (obj as any).price === 'number'&&
            typeof (obj as any).category === 'string');
}

const isOrder = (obj: Object): obj is Order => {
    const statusValues = Object.values(OrderType);
    return (obj !== null &&
            typeof (obj as any).id === 'string' &&
            Array.isArray((obj as any).products) &&
            (obj as any).products.every(isProduct) &&
            statusValues.includes((obj as any).status));
}

// Обрабатывает заказ только если он типа Order.
const processOrder= (order: Order | string) => {
    if (isOrder(order)) {
        console.log("processing order");
    }
    else {
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