"use strict";
function getProperty(obj, propertyKey) {
    return obj[propertyKey];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
