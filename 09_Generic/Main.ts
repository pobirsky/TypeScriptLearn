// Example of using 'any'
const getter = (data: any): any => data;

getter(10);
getter('test')

// Issue we have

const getter = (data: any): any => data;

getter(10).length;      // undefined
getter('test').length;  // 4

const cars: string[] = ['Ford', 'Audi']
const cars2 = ['Ford', 'Audi']

// Using of generic type
// ES6 syntax
const getter1 = <Type>(data: Type): Type => data;

getter1(10).length;      // undefined
getter1('test').length;  // 4

// Simple class example
class User {

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Generic class

class User<T> {
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

const yauhen = new User('Danil', '29');
const max = new User(123, 321);

yauhen.getPass();     // "Danil29"
max.getPass();        // "123321"


// Multiple generic types
class User<T, K> {

    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

const yauhen = new User('Danil', '29');	// string, string
const max = new User(123, 321);				// number, number
const leo = new User('Leo', 22);			// string, number

yauhen.getPass();     // "Yauhen31"
max.getPass();        // "123321"
leo.getPass();        // "Leo22"

// identity.js
function identity (value) {
    return value;
}

console.log(identity(1)) // 1

// Сделаем так, чтобы она работала с числами: TS
function identityN (value: number): number {
    return value;
}

console.log(identityN(1)) // 1

// Отлично, мы добавили в определение тождественной функции тип,
// но хотелось бы, чтобы она была более гибкой и срабатывала для значений любого типа, а не только для чисел.
// Именно для этого и нужны дженерики

function identityNJ <T> (value: T): T {
    return value;
}

console.log(identityNJ<string>(1)) // '1'
