"use strict";
// Hovering over a variable will let you know it's current type and how you can assign a type to it if you haven't already
let num1 = 7;
// You can still declare variables with a type without initializing them
let str;
// We want to avoid the type 'any' because it defeats the whole purpose of typescript
let any;
function mappingGrades(data) {
    console.log(data.name);
    return data.grades.map(ele => {
        return ele;
    });
}
// Typing a function
function funk() {
    return "true";
}
// Typing an arrow function
// Giving arrowFunction variable the type of an arrow function that returns a string
const arrowFunction = () => {
    return "giselle";
};
// We can use interfaces to create our own types
let student1 = {
    name: "giselle",
    grades: [100, 100, 100],
    email: "lover@gmail",
    pet: "gea"
};
//Once a type is declared you can't change it again
// type Giselle = {
// }
function createStudent(data) {
    let newStudent = {
        name: data.name,
        grades: data.grades,
        email: data.email,
        pet: data.pet
    };
}
