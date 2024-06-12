var x = function(x,y){
    return x+y;
}

//arrow function

var y = (x,y) => x+y;


console.log(x(6,5));
console.log(y(6,5));


//spread operator

const q1 = ["Jan","Feb","Mar"];
const q2 = ["Apr","May","Jun"];
const q3 = ["Jul","Aug","Sept"];
const q4 = ["Oct","Nov","Dec"];

const year = [...q1,...q2,...q3,...q4];
console.log(year);


const myNum = [23,65,0,9,-12];
const maxVal = Math.max(...myNum);
console.log("Maximum value is:- "+maxVal);


//for each loop in js

const name = "Shivam Yadav";
let text = "";
for(let i of name)
    {
        text += i+" "
    }

    console.log(text);

//MAPS IN JAVASCRIPT

const fruits = new Map([
    ["apples",500],
    ["oranges",300],
    ["lemon",100]

]);

console.log(fruits);
console.log(fruits.get("lemon"));


//set

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a");//only identifies unique elements.
console.log(letters);


class Car{
    constructor(name,year,price) {
        this.name = name;
        this.year = year;
        this.price = price;
    }
}


const car1 = new Car("Mercedes",2011,100000000);
const car2 = new Car("Lamborgini",2021,100000000);
console.log(car1,car2);

const person = {
    firstName:"John",
    lastName:"Doe",
    age:30,
    eyeColor:"blue"
};

let id = Symbol("id");
person[id] = 140111;
console.log(person);

const addNum = (...args)=>{
    let sum = 0;
    for(let arg of args)
        {
            sum+=arg;
        }
        return sum;
}

console.log(addNum(10,19,12,21));








