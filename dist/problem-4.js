"use strict";
function calculateShapeArea(shape) {
    let area = 0;
    if (shape.shape === "circle") {
        area = 3.1416 * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        area = shape.width * shape.height;
    }
    return area;
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6, });
console.log(rectangleArea);
