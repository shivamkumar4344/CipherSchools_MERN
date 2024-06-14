
//ways to declare objects in javascript

//way1
let person = {
    firstName : "Shivam",
    lastName : "Yadav",

    getFullName: function()
    {
        return `This is the name of the person ${person.firstName} ${person.lastName}`;
    },

    phoneNumber:{
        mobileNum:"12345",
        Landline:"6789",
    }
};


console.log(person.getFullName());
console.log(person.phoneNumber.mobileNum);

//way2
function per(fName,lName)
{
    this.fName = fName;
    this.lName = lName;
}


let person1 = new per("Abhay","Bharti");
let person2 = new per("Ritik","Kumar");

console.log(person1.fName);

console.log(`The name of the person is ${person2.fName} ${person2.lName}`);

//way3
const coder = {
    isStudying: false,

    printIntroduction(){
        console.log(`This is ${this.name} and he is studying: ${this.isStudying}`);
    }
};

const me = Object.create(coder);

me.name = "Shivam Yadav";
me.isStudying = true;

me.printIntroduction();

class Vechile{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;

    }
   getFullDetails()
    {
        console.log(`vechile details are name ${this.name} maker ${this.maker} and engine ${this.engine}`);
    }

};

let v1 = new Vechile("Thar","Mahindra","2500cc");
let v2 = new Vechile("Verna","Hyundai","2000cc");

console.log(v1.name);
console.log(v2.maker);

v1.getFullDetails();
v2.getFullDetails();


class Person{
    constructor(name,id)
    {
        this.name = name;
        this.id = id;
    }

    addAddress(newAddress)
    {
        this.address = newAddress;
    }

    getDetails()
    {
        console.log(`The name of the person is ${this.name} and his/her address is ${this.address}.`);
    }
}

let p1 = new Person("Shivam",101);
p1.addAddress("Patna");
p1.getDetails();

//Inheritance

class Car{
    constructor(name,model)
    {
        this.name = name;
        this.model = model;
    }

    getDetails()
    {
        return `The name of the Car is ${this.name} and ${this.model}.`;
    }
};

class Audi extends Car{
    constructor(name,model,price)
    {
        super(name,model);
        this.price = price;
    }

    getDetails()
    {
        return `The name of the Car is ${this.name} and ${this.model} and price is ${this.price}`;
    }
};

let car1 = new Audi("Audi","Q5",20000000);
console.log(car1.getDetails());

