// Hovering over a variable will let you know it's current type and how you can assign a type to it if you haven't already
let num1: number = 7;

// You can still declare variables with a type without initializing them
let str: string;

// We want to avoid the type 'any' because it defeats the whole purpose of typescript
let any;

function mappingGrades(data: { name: string, grades: number[]}){
    console.log(data.name)
    return data.grades.map(ele => {
        return ele;
    })
}

// Typing a function
function funk(): string {
    return "true";
}

// Typing an arrow function
// Giving arrowFunction variable the type of an arrow function that returns a string
const arrowFunction:() => string = () => {
    return "giselle";
}



interface IStudent {
    name: string,
    grades: number[],
    email: string
}


// We can use interfaces to create our own types
let student1: IStudent = {
    name: "giselle",
    grades: [100, 100, 100],
    email: "lover@gmail"
}