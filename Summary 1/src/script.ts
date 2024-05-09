// --------------------------------------------------
console.log('\n\n#number\t#string\t#boolean');
// --------------------------------------------------
// let myString = "aa";
// myString = true;
let myString2;                                  // type : any
myString2 = "aa";
myString2 = true;
let myString3: string = 'Saeed CR';
let myBoolean: boolean = true;
let myNumber: number = 522;


// --------------------------------------------------
console.log('\n\n#array\t#tuple');
// --------------------------------------------------
let myList = [1, 2, 3];
// myList[0] = 'Saeed';
let myList2: number[] = [1, 2, 3];
let myList3: any[] = ['1', 2, true];
myList3[0] = 22;
let myList4: [string, number] = ['1', 2];       // tuple


// --------------------------------------------------
console.log('\n\n#null\t#undefined\t#void');
// --------------------------------------------------
let myUndefined: undefined = undefined;
let myNull: null = null;

let myString4: string | null = 'Saeed CR';      // union define
myString4 = null;

function log(message: string): void {              // void
    console.log(message)
}


// --------------------------------------------------
console.log('\n\n#enums');
// --------------------------------------------------
enum Direction {                                  // const value
    Up = 10,
    Down = 20,
    Left = 30,
    Right = 40
}
console.log(Direction.Right);


// --------------------------------------------------
console.log('\n\n#Functions');
// --------------------------------------------------
function sum(x: number, y: number): number {
    return x + y;
}
let sum2 = function (x: number, y: number): number {
    return x + y;
}
let sum3 = (x: number, y: number): number => {
    return x + y;
}
let sum4: (x: number, y: number) => number;         // define function type
// sum4 = (x: string, y: string): number => {
//     return 5;
// }
sum4 = (x: number, y: number): number => {
    return x + y;
}
let sum5: (x: number, y: number) => number = (x: number, y: number) => x + y
let sum6 = (x: number = 1, y: number = 2) => x + y  // default value
console.log(sum6());
// let sum7 = (x: number = 1, y?: number) => x + y 
// undefined argument
let sum7 = (x: number = 1, y?: number) => {
    if (y)
        return x + y;
    return x;
}
console.log(sum7());
console.log(sum7(10));
console.log(sum7(10, 20));
let sum8 = (x: number, ...numbers: number[]) => {   // rest operator (ES6)
    let output = x;
    numbers.forEach(numberItem => {
        output += numberItem;
    });
    return output;
}
console.log(sum8(1));
console.log(sum8(1, 2));
console.log(sum8(1, 2, 3, 4, 5));


// --------------------------------------------------
console.log('\n\n#Objects and Functions as types');
// --------------------------------------------------
let myObj: object = {};
let myObj2: {
    fullname: string,
    age: (num: number) => string
};
myObj2 = {
    fullname: 'Saeed',
    age: (x: number) => {
        return `age : ${x}`
    }
};

type objectType = {
    fullname: string,
    age: (num: number) => string
};
let myObj3: objectType = {
    fullname: 'Saeed',
    age: (x: number) => {
        return `age : ${x}`
    }
};

type functionType = (x: number, y: number) => number;
let sum9: functionType = (x: number, y: number): number => {
    return x + y;
}


// --------------------------------------------------
console.log('\n\n#class properties');
// --------------------------------------------------
class Car {
    model: string
    // year1:number                        // get error
    year2: number = 2012
    year3 = 2013
    constructor(model: string) {
        this.model = model
    }
}
let car1 = new Car("Ford");
console.log(car1);


// --------------------------------------------------
console.log('\n\n#encapsulation');
// --------------------------------------------------
class Car2 {
    public model: string                            // public
    private maxSpeed = 320                          // private
    protected year = 2013                           // protected
    constructor(model: string) {
        this.model = model
    }
    sayMaxSpeed() {                                  // public
        return this.maxSpeed;
    }
    private sayModel() {                             // private
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
    constructor(public model: string, private maxSpeed = 320, protected year = 2013) { }
    sayMaxSpeed() {                                  // public
        return this.maxSpeed;
    }
    private sayModel() {                             // private
        return this.model;
    }
}


// --------------------------------------------------
console.log('\n\n#getter & setter');
// --------------------------------------------------
class Car4 {
    private model: string
    constructor(model: string) {
        this.model = model
    }
    set setModel(theModel: string) {
        this.model = theModel;
    }
    get getModel() {
        return this.model;
    }
}


// --------------------------------------------------
console.log('\n\n#abstract');
// --------------------------------------------------
abstract class Car5 {
    private model: string
    constructor(model: string) {
        this.model = model
    }
    set setModel(theModel: string) {
        this.model = theModel;
    }
    get getModel() {
        return this.model;
    }
    abstract bar(): string
    foo(): string {
        return this.bar()
    }
}

class IranCar2 extends Car5 {
    bar() {
        return 'Saeed!'
    }
}
let car5 = new IranCar2('Benz');
console.log(car5.foo())


// --------------------------------------------------
console.log('\n\n#static\t#readonly');
// --------------------------------------------------
class Car6 {
    static model: string = '4WD'
    protected static year: number
    constructor(model: string, year: number) {
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
console.log(Car6.getModel());
let car6 = new Car6('Toyota', 2018);
console.log(car6.getModel2());

class Car7 {
    readonly model: string
    year: number
    constructor(model: string, year: number) {
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
    private static instance: Car8
    private constructor() { }
    static getInstance(): Car8 {
        if (!Car8.instance)
            Car8.instance = new Car8()
        return Car8.instance;
    }
    // methods and properties
}
let car8 = Car8.getInstance();
// let car9 = new Car8;                                 // because of private constructor


// --------------------------------------------------
console.log('\n\n#interface');
// --------------------------------------------------
function printLabel(labelObj: { size: number, label: string }) {
    console.log(labelObj.label)
}
let labelObj1 = { size: 10, label: 'Size 10' }
printLabel(labelObj1);
let labelObj2 = { size: 10, myLabel: 'Size 10' }
// printLabel(labelObj2);                               // get error

interface labelInterface {
    size: number
    label: string
    shape?: string
    readonly color: string
    [propName: string]: string
}

function printLabel2(labelObj: labelInterface) {
    console.log(labelObj.label)
}
let labelObj3 = { size: 10, label: 'Size 10' }
printLabel(labelObj3);
let labelObj4 = { size: 10, myLabel: 'Size 10' }
// printLabel(labelObj4);                               // get error

// notice: we use const in variables and readonly in properties


// --------------------------------------------------
console.log('\n\n#interface as function type');
// --------------------------------------------------
interface searchFunc {
    (source: string, subString: string): boolean
}
// type searchFunc = (source: string, subString: string) => boolean
// notice: it's better to use interface than type
let mySearch: searchFunc = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
}


// --------------------------------------------------
console.log('\n\n#interface as class type');
// --------------------------------------------------
interface Person {
    name: string,
    family: string,
    age: number,
    fullname(): string
}

class Employer implements Person {
    constructor(public name: string, public family: string, public age: number) {
    }
    fullname(): string {
        return this.name + ' ' + this.family;
    }
}
class Employee implements Person {
    constructor(public name: string, public family: string, public age: number) {
    }
    fullname(): string {
        return this.name + ' ' + this.family;
    }
}
class Boss implements Person {
    constructor(public name: string, public family: string, public age: number) {
    }
    fullname(): string {
        return this.name + ' ' + this.family;
    }
}
let user: Person = new Employee('jack', 'jacky', 26);
user = new Employer('John', 'Johny', 27);
console.log(user.fullname());

class Auth {
    login(user: Person) {
        // user.password
    }
}


// --------------------------------------------------
console.log('\n\n#generics');
// --------------------------------------------------
function logData<T>(data: T): T {
    return data;
}
console.log(logData<number>(1234));
console.log(logData<string>('Saeed'));
let myList5: number[] = [1, 2, 3, 4, 5]
let myList6: Array<number> = [1, 2, 3, 4, 5]

function logData2<T>(data: T[]): T {
    return data[0];
}
console.log(logData2<number>([111, 222, 333, 444, 555, 666, 777, 888, 999]));


// --------------------------------------------------
console.log('\n\n#generics as types');
// --------------------------------------------------

// Functions as types
let myLogFunc2: (data: number) => number;
myLogFunc2 = function <T>(data: T): T {
    return data
}

let myLogFunc3: <T>(data: T) => T;
myLogFunc3 = function <T>(data: T): T {
    return data
}

type myLogFuncType = <T>(data: T) => T;
let myLogFunc4: myLogFuncType;
myLogFunc4 = function <T>(data: T): T {
    return data
}

interface myLogFuncInterface {
    <T>(data: T): T
}
let myLogFunc5: myLogFuncInterface;
myLogFunc5 = function <T>(data: T): T {
    return data
}

interface myLogFuncInterface2<T> {
    (data: T): T
}
let myLogFunc6: myLogFuncInterface2<number>;
myLogFunc6 = function (data: number): number {
    return data
}


// --------------------------------------------------
console.log('\n\n#generics in classes');
// --------------------------------------------------
class myArray<T extends number | string, U>{
    constructor(public data: T[], public data2: U[]) { }
    addItem(item: T) {
        this.data.push(item)
    }
    getItem(index: number) {
        return this.data[index]
    }
}

let mylist7 = new myArray<string, boolean>(['item1', 'item2'], [false, true])
mylist7.addItem('4')
console.log(mylist7.getItem(0))

function logParameters<T extends number | string, U extends boolean | object>(x: T, y: U): void {
    console.log(x, y)
}


// --------------------------------------------------
console.log('\n\n#Decorators');
// --------------------------------------------------
function first<T extends { new(...args: any[]): {} }>(myConstructor: T) {
    console.log(`first=> ${myConstructor}`);
    return class extends myConstructor {
        property = 'first property'
    }
}
function second<T extends { new(...args: any[]): {} }>(myConstructor: T) {
    console.log(`second=> ${myConstructor}`);
    return class extends myConstructor {
        property = 'second property'
    }
}

@second
@first
class User2 {
    name = 'Saeed'
    constructor(public message: string) { }
}
let user2 = new User2('Hello!');
console.log(user2)


// --------------------------------------------------
console.log('\n\n#method decorators');
// --------------------------------------------------
function authFactory(value: boolean) {
    return function second<T extends { new(...args: any[]): {} }>(myConstructor: T) {
        console.log(`authFactory=> ${myConstructor}`);
        return class extends myConstructor {
            auth = value
        }
    }
}

function changeable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('target= ')
        console.log(target)
        console.log('propertyKey= ')
        console.log(propertyKey)
        console.log('descriptor= ')
        console.log(descriptor)
        descriptor.writable = value;
    }
}

@authFactory(true)
class User3 {
    private name = 'Saeed'

    @changeable(true)
    getName() {
        return this.name;
    }
}
let user3 = new User3();
console.log(user3.getName())
// user3.getName=()=>'something';
// console.log(user3.getName())


// --------------------------------------------------
console.log('\n\n#property and parameter decerators');
// --------------------------------------------------
function emoji() {
    return function (target: any, propertyKey: string) {
        let val = target[propertyKey]

        Object.defineProperty(target, propertyKey, {
            get: () => val,
            set: (newVal) => {
                val = `${newVal}`
            },
            configurable: true,
            enumerable: true
        })
    }
}

function log2(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log('target= ')
    console.log(target)
    console.log('propertyKey= ')
    console.log(propertyKey)
    console.log('parameterIndex= ')
    console.log(parameterIndex)  
}

class IceCream {
    // @emoji()
    flavor = 'vanilla'
    getInfo(@log2 name: string) { }
}

let iceCream = new IceCream()
console.log(iceCream.getInfo('saeed\'s ice cream'))


// --------------------------------------------------
console.log('\n\n#Module');
// --------------------------------------------------
