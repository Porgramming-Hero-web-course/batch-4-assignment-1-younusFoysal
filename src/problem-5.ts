function getProperty<T, K extends keyof T>(obj: T, propertyKey: K): T[K] {
    return obj[propertyKey];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));