// Simple class example
class User {

}

// Class types
class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }

}

const Danil = new User ('danil', 29, 'Dan')

Danil // {name: 'danil, age: 29, nickName: 'Dan'}

//Приватные или публичные данные

class User {

    public name: string;        // по умолчанию  доступ всем
    private nickName: string;   // не может быть доступен за пределами класса
    protected age: number;      // доступ могут получить только наследники
    readonly pass: number;      // только чтение

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }

}

const yauhen = new User('Yauhen', 31, 'webDev', 123);

yauhen.name;	    // "Yauhen"
yauhen.nickName;  // Prop 'nickName' is private and only accessible within class 'User'
yauhen.age;		    // Prop 'age' is protected and only accessible within class 'User' and its subclasses
yauhen.pass = 42; // Cannot assign to 'pass' because it is a read-only property



// Minimization of Class properties
class User {

    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {
    }
}


// Try to change private property
class User {

    private age: number = 20;

    constructor(public name: string) {}
}

const yauhen = new User('Yauhen');

yauhen.age = 30;	// Property 'age' is private and only accessible within class 'User'

// Get access to private property
class User {

    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen = new User('Yauhen');

yauhen.setAge(30);	// 30
yauhen.myAge = 31;	// 31


