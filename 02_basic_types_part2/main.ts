// Array Type
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];     //Generic type

// Tuple Type (кортеж)
// Multiple lines
let x: [string, number];
x = ["hello", 10]

// one line
let y: [string, number] = ['42', 42];

// Error case
x = [10, 'hello']; // Type 'string' is not assignable to type 'number'

// Any Type
// Any type for array
//TS предоставляет специальный тип any, который может использоваться для отключения проверки типов:
//Тип any может быть полезен, когда мы не хотим писать длинное определение типов для того, чтобы пройти проверку.
let y: [any, any] = ['goodbye', 42];
let z: Array<any> = [10, 'hello'];

//Any type for string
let notSure: any = false;

// Issue case (not error)
notSure = true;
notSure = 42;
notSure = 'hello';

//Enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;

//Custom enum
enum Directions {
    Up = 2,
    Down = 4,
    Left,
    Right
}

Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;

// Never Type  Тип функции от которых результата мы не получим
// Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
};

// Functiopn infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
}

// Object Type // тип о это или обьект или null
const create = (o: object | null): void => { };

create(1);		// Argument of type '1' is not assignable to parameter of type 'object | null'
create('42');	// Argument of type '"42"' is not assignable to parameter of type 'object | null'
create({ obj: 1 });

// Multiple types for one value // тип обьединения
let id: number | string;

id = 10;	// number is valid
id = '42';	// string is valid
id = true;	// Type 'true' is not assignable to type 'string | number'

// Type пользовательские типы

type Name = string; // Custom type creation

let id: Name; // Apply custom type

id = '42'; // not error
id = 10;   // error

