<h1 align="center">Why are Type Guards Necessary? <br> Discuss Various Types of Type Guards <br> and Their Use Cases.</h1>

Static typing in TypeScript makes code safer and clearer,
but type guards are needed to work with union types and complicated objects. 
Type guards let TypeScript understand and narrow down types while the program is running.
This lets you safely do certain things based on the type of a variable.

## Why Type Guards Are Necessary

Type guards help:
1. **Narrow Union Types:** Type guards figure out the exact type of a variable that can be more than one type.
2. **Prevent Runtime Errors:** They ensure only valid operations are performed.
3. **Improve Type Inference:** TypeScript makes code safer by improving type inference.


## Common Type Guards in TypeScript

1. `typeof` **Type Guard:** Use for primitive types.

    `function double(value: number | string) {
return typeof value === "number" ? value * 2 : value + value;
}`

2. `instanceof` **Type Guard:** Use for class instances.

    `if (animal instanceof Dog) animal.bark();`

3. **Custom Type Guards:** Define functions to check types, particularly for interfaces.

    `function isBird(animal: Bird | Fish): animal is Bird {
return (animal as Bird).fly !== undefined;
}
`
4. `in` **Operator:** Check if a property exists on an object.

    `if ("drive" in vehicle) vehicle.drive();`

5. **Literal Type Guards:** Distinguish specific values in union types.

    `if (shape === "circle") return 0; `





To ensure that type-specific operations are secure and predictable,
TypeScript programs must have type guards. Whether you're working with complex types, class instances,
or primitives, TypeScript may maintain accuracy and security in your applications by employing the appropriate type guard.




