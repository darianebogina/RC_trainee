type User = {
    id: number;
    name: string;
    email: string;
};

type Product = {
    id: number;
    title: string;
    price: number;
};

type Schema<T> = {
    [Property in keyof T]: (propValue: unknown) => propValue is T[Property];
}

const validateApiResponse = <T>(data: unknown, typeGuardSchema: Schema<T>): data is T => {
    if (typeof data !== "object" || data === null) {
        return false;
    }
    return (Object.keys(typeGuardSchema) as (keyof T)[]).every((prop) => {
        const typeGuardProp = typeGuardSchema[prop];
        const dataProp = (data as Record<keyof T, unknown>)[prop];
        return typeGuardProp(dataProp);
        });
}

const isUser: Schema<User> = {
    id: (v): v is number => typeof v === "number",
    name: (v): v is string => typeof v === "string",
    email: (v): v is string => typeof v === "string"
};

const isProduct: Schema<Product> = {
    id: (v): v is number => typeof v === "number",
    title: (v): v is string => typeof v === "string",
    price: (v): v is number => typeof v === "number"
};

//проверка API-ответа
const raw: unknown = JSON.parse('{"id":1,"name":"Alice","email":"a@a.com"}');

if (validateApiResponse(raw, isUser)) {
    console.log(raw.name.toUpperCase());
}