const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
// const combinedObject = { ...object1, ...object2 };

const combinedObject = { ...object1, ...object2, points: 100 };

console.log(combinedObject);
