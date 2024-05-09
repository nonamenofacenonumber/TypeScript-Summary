"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// --------------------------------------------------
console.log('\n\n#number\t#string\t#boolean');
// --------------------------------------------------
// let myString = "aa";
// myString = true;
let myString2; // type : any
myString2 = "aa";
myString2 = true;
let myString3 = 'Saeed CR';
let myBoolean = true;
let myNumber = 522;
// --------------------------------------------------
console.log('\n\n#array\t#tuple');
// --------------------------------------------------
let myList = [1, 2, 3];
// myList[0] = 'Saeed';
let myList2 = [1, 2, 3];
let myList3 = ['1', 2, true];
myList3[0] = 22;
let myList4 = ['1', 2]; // tuple
// --------------------------------------------------
console.log('\n\n#null\t#undefined\t#void');
// --------------------------------------------------
let myUndefined = undefined;
let myNull = null;
let myString4 = 'Saeed CR'; // union define
myString4 = null;
function log(message) {
    console.log(message);
}
// --------------------------------------------------
console.log('\n\n#enums');
// --------------------------------------------------
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 20] = "Down";
    Direction[Direction["Left"] = 30] = "Left";
    Direction[Direction["Right"] = 40] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Right);
// --------------------------------------------------
console.log('\n\n#Functions');
// --------------------------------------------------
function sum(x, y) {
    return x + y;
}
let sum2 = function (x, y) {
    return x + y;
};
let sum3 = (x, y) => {
    return x + y;
};
let sum4; // define function type
// sum4 = (x: string, y: string): number => {
//     return 5;
// }
sum4 = (x, y) => {
    return x + y;
};
let sum5 = (x, y) => x + y;
let sum6 = (x = 1, y = 2) => x + y; // default value
console.log(sum6());
// let sum7 = (x: number = 1, y?: number) => x + y 
// undefined argument
let sum7 = (x = 1, y) => {
    if (y)
        return x + y;
    return x;
};
console.log(sum7());
console.log(sum7(10));
console.log(sum7(10, 20));
let sum8 = (x, ...numbers) => {
    let output = x;
    numbers.forEach(numberItem => {
        output += numberItem;
    });
    return output;
};
console.log(sum8(1));
console.log(sum8(1, 2));
console.log(sum8(1, 2, 3, 4, 5));
// --------------------------------------------------
console.log('\n\n#Objects and Functions as types');
// --------------------------------------------------
let myObj = {};
let myObj2;
myObj2 = {
    fullname: 'Saeed',
    age: (x) => {
        return `age : ${x}`;
    }
};
let myObj3 = {
    fullname: 'Saeed',
    age: (x) => {
        return `age : ${x}`;
    }
};
let sum9 = (x, y) => {
    return x + y;
};
// --------------------------------------------------
console.log('\n\n#class properties');
// --------------------------------------------------
class Car {
    constructor(model) {
        // year1:number                        // get error
        this.year2 = 2012;
        this.year3 = 2013;
        this.model = model;
    }
}
let car1 = new Car("Ford");
console.log(car1);
// --------------------------------------------------
console.log('\n\n#encapsulation');
// --------------------------------------------------
class Car2 {
    constructor(model) {
        this.maxSpeed = 320; // private
        this.year = 2013; // protected
        this.model = model;
    }
    sayMaxSpeed() {
        return this.maxSpeed;
    }
    sayModel() {
        return this.model;
    }
}
let car2 = new Car2("BMW");
// console.log(car2.maxSpeed);                     // get error
class IranCar extends Car2 {
    sayYear() {
        return this.year;
    }
}
class Car3 {
    constructor(model, maxSpeed = 320, year = 2013) {
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.year = year;
    }
    sayMaxSpeed() {
        return this.maxSpeed;
    }
    sayModel() {
        return this.model;
    }
}
// --------------------------------------------------
console.log('\n\n#getter & setter');
// --------------------------------------------------
class Car4 {
    constructor(model) {
        this.model = model;
    }
    set setModel(theModel) {
        this.model = theModel;
    }
    get getModel() {
        return this.model;
    }
}
// --------------------------------------------------
console.log('\n\n#abstract');
// --------------------------------------------------
class Car5 {
    constructor(model) {
        this.model = model;
    }
    set setModel(theModel) {
        this.model = theModel;
    }
    get getModel() {
        return this.model;
    }
    foo() {
        return this.bar();
    }
}
class IranCar2 extends Car5 {
    bar() {
        return 'Saeed!';
    }
}
let car5 = new IranCar2('Benz');
console.log(car5.foo());
// --------------------------------------------------
console.log('\n\n#static\t#readonly');
// --------------------------------------------------
class Car6 {
    constructor(model, year) {
        Car6.model = model;
        Car6.year = year;
    }
    static getModel() {
        return Car6.model;
    }
    getModel2() {
        return Car6.model;
    }
}
Car6.model = '4WD';
console.log(Car6.getModel());
let car6 = new Car6('Toyota', 2018);
console.log(car6.getModel2());
class Car7 {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    changeModel() {
        // this.model = '405';                  // we can write just in constructor
    }
}
let car7 = new Car7('Honda', 2017);
console.log(car7.model);
// car7.model = 'Hyundai';                         // get error
// --------------------------------------------------
console.log('\n\n#design pattern (singleton)');
// --------------------------------------------------
class Car8 {
    constructor() { }
    static getInstance() {
        if (!Car8.instance)
            Car8.instance = new Car8();
        return Car8.instance;
    }
}
let car8 = Car8.getInstance();
// let car9 = new Car8;                                 // because of private constructor
// --------------------------------------------------
console.log('\n\n#interface');
// --------------------------------------------------
function printLabel(labelObj) {
    console.log(labelObj.label);
}
let labelObj1 = { size: 10, label: 'Size 10' };
printLabel(labelObj1);
let labelObj2 = { size: 10, myLabel: 'Size 10' };
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
let labelObj3 = { size: 10, label: 'Size 10' };
printLabel(labelObj3);
let labelObj4 = { size: 10, myLabel: 'Size 10' };
// printLabel(labelObj4);                               // get error
// notice: we use const in variables and readonly in properties
// --------------------------------------------------
console.log('\n\n#interface as function type');
// type searchFunc = (source: string, subString: string) => boolean
// notice: it's better to use interface than type
let mySearch = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
// --------------------------------------------------
console.log('\n\n#interface as class type');
class Employer {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return this.name + ' ' + this.family;
    }
}
class Employee {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return this.name + ' ' + this.family;
    }
}
class Boss {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    fullname() {
        return this.name + ' ' + this.family;
    }
}
let user = new Employee('jack', 'jacky', 26);
user = new Employer('John', 'Johny', 27);
console.log(user.fullname());
class Auth {
    login(user) {
        // user.password
    }
}
// --------------------------------------------------
console.log('\n\n#generics');
// --------------------------------------------------
function logData(data) {
    return data;
}
console.log(logData(1234));
console.log(logData('Saeed'));
let myList5 = [1, 2, 3, 4, 5];
let myList6 = [1, 2, 3, 4, 5];
function logData2(data) {
    return data[0];
}
console.log(logData2([111, 222, 333, 444, 555, 666, 777, 888, 999]));
// --------------------------------------------------
console.log('\n\n#generics as types');
// --------------------------------------------------
// Functions as types
let myLogFunc2;
myLogFunc2 = function (data) {
    return data;
};
let myLogFunc3;
myLogFunc3 = function (data) {
    return data;
};
let myLogFunc4;
myLogFunc4 = function (data) {
    return data;
};
let myLogFunc5;
myLogFunc5 = function (data) {
    return data;
};
let myLogFunc6;
myLogFunc6 = function (data) {
    return data;
};
// --------------------------------------------------
console.log('\n\n#generics in classes');
// --------------------------------------------------
class myArray {
    constructor(data, data2) {
        this.data = data;
        this.data2 = data2;
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem(index) {
        return this.data[index];
    }
}
let mylist7 = new myArray(['item1', 'item2'], [false, true]);
mylist7.addItem('4');
console.log(mylist7.getItem(0));
function logParameters(x, y) {
    console.log(x, y);
}
// --------------------------------------------------
console.log('\n\n#Decorators');
// --------------------------------------------------
function first(myConstructor) {
    console.log(`first=> ${myConstructor}`);
    return class extends myConstructor {
        constructor() {
            super(...arguments);
            this.property = 'first property';
        }
    };
}
function second(myConstructor) {
    console.log(`second=> ${myConstructor}`);
    return class extends myConstructor {
        constructor() {
            super(...arguments);
            this.property = 'second property';
        }
    };
}
let User2 = class User2 {
    constructor(message) {
        this.message = message;
        this.name = 'Saeed';
    }
};
User2 = __decorate([
    second,
    first
], User2);
let user2 = new User2('Hello!');
console.log(user2);
// --------------------------------------------------
console.log('\n\n#method decorators');
// --------------------------------------------------
function authFactory(value) {
    return function second(myConstructor) {
        console.log(`authFactory=> ${myConstructor}`);
        return class extends myConstructor {
            constructor() {
                super(...arguments);
                this.auth = value;
            }
        };
    };
}
function changeable(value) {
    return function (target, propertyKey, descriptor) {
        console.log('target= ');
        console.log(target);
        console.log('propertyKey= ');
        console.log(propertyKey);
        console.log('descriptor= ');
        console.log(descriptor);
        descriptor.writable = value;
    };
}
let User3 = class User3 {
    constructor() {
        this.name = 'Saeed';
    }
    getName() {
        return this.name;
    }
};
__decorate([
    changeable(true)
], User3.prototype, "getName", null);
User3 = __decorate([
    authFactory(true)
], User3);
let user3 = new User3();
console.log(user3.getName());
// user3.getName=()=>'something';
// console.log(user3.getName())
// --------------------------------------------------
console.log('\n\n#property and parameter decerators');
// --------------------------------------------------
function emoji() {
    return function (target, propertyKey) {
        let val = target[propertyKey];
        Object.defineProperty(target, propertyKey, {
            get: () => val,
            set: (newVal) => {
                val = `${newVal}`;
            },
            configurable: true,
            enumerable: true
        });
    };
}
function log2(target, propertyKey, parameterIndex) {
    console.log('target= ');
    console.log(target);
    console.log('propertyKey= ');
    console.log(propertyKey);
    console.log('parameterIndex= ');
    console.log(parameterIndex);
}
class IceCream {
    constructor() {
        // @emoji()
        this.flavor = 'vanilla';
    }
    getInfo(name) { }
}
__decorate([
    __param(0, log2)
], IceCream.prototype, "getInfo", null);
let iceCream = new IceCream();
console.log(iceCream.getInfo('saeed\'s ice cream'));
// --------------------------------------------------
console.log('\n\n#Module');
// --------------------------------------------------
