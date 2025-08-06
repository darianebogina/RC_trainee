"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateApiResponse = (data, typeGuardSchema) => {
    if (typeof data !== "object" || data === null) {
        return false;
    }
    return Object.keys(typeGuardSchema).every((prop) => {
        const typeGuardProp = typeGuardSchema[prop];
        const dataProp = data[prop];
        return typeGuardProp(dataProp);
    });
};
const isUser = {
    id: (v) => typeof v === "number",
    name: (v) => typeof v === "string",
    email: (v) => typeof v === "string"
};
const isProduct = {
    id: (v) => typeof v === "number",
    title: (v) => typeof v === "string",
    price: (v) => typeof v === "number"
};
//проверка API-ответа
const raw = JSON.parse('{"id":1,"name":"Alice","email":"a@a.com"}');
if (validateApiResponse(raw, isUser)) {
    console.log(raw.name.toUpperCase());
}
//# sourceMappingURL=typeSafe_API_validator.js.map