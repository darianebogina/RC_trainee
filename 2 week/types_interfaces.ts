export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
}

interface WideProduct extends Product {
    description: string;
}

type Discount = { discount: number; };
type DiscountProduct = Product & Discount;

type PartialProduct = Partial<Product>;
type ReadonlyProduct = Readonly<Product>;
type ProductPrice = Pick<Product, "id" | "price">;

const products1: Array<Product> = [
    { id: "1", name: "meme", price: 15, category: "th" },
    { id: "2", name: "emem", price: 25, category: "yew" }
];

const products2: Product[] = [
    { id: "1", name: "meme", price: 15, category: "th" },
    { id: "2", name: "emem", price: 25, category: "yew" }
];

const products3: [Product, Product] = [
    { id: "1", name: "meme", price: 15, category: "th" },
    { id: "2", name: "emem", price: 25, category: "yew" }
];