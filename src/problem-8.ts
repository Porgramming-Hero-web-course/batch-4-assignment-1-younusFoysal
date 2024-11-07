function validateKeys<T>(obj: T, keys : (keyof T)[]): boolean {
    return keys.every(key => key in (obj as object))
}

const personOld = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(personOld, ["name", "age"]));