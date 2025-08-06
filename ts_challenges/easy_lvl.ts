/*
Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.

For example:

```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
```
*/

type First<T extends any[]> =
    T extends [] ? never : T[0];

/* Implement the built-in `Readonly<T>` generic without using it.
Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

For example:
```ts
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}*/

type MyReadonly<T>= {
    readonly [P in keyof T]: T[P];
}

/*
Implement the built-in `Pick<T, K>` generic without using it.
Constructs a type by picking the set of properties `K` from `T`
For example:
    ```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
*/

type MyPick<T, K extends keyof T> = {
    [P in K ]: T[P];
};
