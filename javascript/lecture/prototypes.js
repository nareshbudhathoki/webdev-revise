//prototype and classes

// const obj = {
//     name:"jenn",
//     age:40,
//     greet: function(){
//         console.log("Hello There");
//     },
// };

// console.log(obj.name);

// console.log(obj.greet());


// console.log(obj.hasOwnProperty("name")); //true cause there is a property
// console.log(obj.hasOwnProperty("names")); //false cause there is no such property

// console.log(obj.toString());

// const obj2 = {
//     account:30,
//     // name:"jason",
// };

// obj2.__proto__ = obj; //object prototyping

// console.log(obj2.account);
// console.log(obj2.age);  


//below are the objects and they have almost same properties and methods,
//so this is violating the DRY principle.
//so to solve this we have class in js.
// const obj1 = {
//     name:"Kit",
//     age:40,
//     greet: function(){
//         console.log(`Hello there ${this.name}`);
//     }
// }

// const obj2 = {
//     name:"Kit",
//     age:40,
//     greet: function(){
//         console.log(`Hello there ${this.name}`);
//     }
// }

// const obj3 = {
//     name:"Kit",
//     age:40,
//     greet: function(){
//         console.log(`Hello there ${this.name}`);
//     }
// }

// obj1.greet();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello there! ${this.name}`);
        return 1;
    }
}

//here we are creating the multiple objects having the same properties and methods

// const person1 = new Person("jen", 40);

//person1 will looks like this under the hood

// person1 = {
//     name:"jen",
//     name:40,

// }

// const person2 = new Person("kinrati", 30);


// console.log(person1.sayHello());

// person2.sayHello();

// console.log(person2.name);


// console.log(person1); //here it did not print method sayHello() why?


//Banking examples

class Customer extends Person{
    constructor(name, age, account, balance){
        super(name, age);
        this.account = account;
        this.balance = balance;

    }

    checkBalance(){
        console.log(`Your Balance is : ${this.balance}`);
    }
}

const c1 = new Customer("jnsa", 30, 12, 5000);

// c1.checkBalance();
// c1.sayHello();

console.log(c1.name);

c1.checkBalance();

//create methods

const obj1 = {
    name: "killa",
    age:44,
}

const obj3 = Object.create(obj1);

obj3.account = 443;

console.log(obj3.name);