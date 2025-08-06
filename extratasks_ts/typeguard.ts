type Form = {
    name: string;
    age: number;
    email: string;
};

type PartialForm = Partial<Form>;

//все поля заполнены, и при успешной проверке возвращает объект с типом полностью заполненной формы.
function isCompleteForm(form: PartialForm): form is Form {
    return typeof form.name === "string" &&
        typeof form.age === "number" &&
        typeof form.email === "string";

}

const draft: PartialForm = {name: "Alice", age: 25, email: "@mail"};

if (isCompleteForm(draft)) {
    console.log("complete");
}
