"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//все поля заполнены, и при успешной проверке возвращает объект с типом полностью заполненной формы.
function isCompleteForm(form) {
    return typeof form.name === "string" &&
        typeof form.age === "number" &&
        typeof form.email === "string";
}
const draft = { name: "Alice", age: 25, email: "@mail" };
if (isCompleteForm(draft)) {
    console.log("complete");
}
//# sourceMappingURL=typeguard.js.map