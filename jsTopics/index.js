// this refers to objects inside js

console.log(this);

// function

function myFunc() {
    console.log(this);
}

myFunc();

// object and methods go hand in hand

const myObj = {
    name: "xyz",
    age: 22,
    myFunc: function () {
        console.log(this.name, this.age);
    }
}


myObj.myFunc();


// this behvaes differently
let obj2 = myObj.myFunc;
obj2();

//  call apply and bind to change the context of this

const myObj2 = {
    name: "Xyz",
    age: 20,
    myFunc2: () => {
        console.log(this.name, this.age);
    }
}

myObj2.myFunc2();


// best practice

// always aware of the context in which this keyword is used
// call apply and bind to change the context of this
// working with objects use regular functions and not function expressions (arrow functions)

// this refers to current executing objects in javascript