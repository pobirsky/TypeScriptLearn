// Define object type
let user: {name: string, age: number} = {
    name: 'Danil',
    age: 29,
}

// Try to change property
let user: { name: string, age: number } = {
    name: 'Yauhen',
    /*
    Error:
   The expected type comes from property 'age'
   which is declared here on type '{ name: string; age: number; }'
  */
    age: 'test',		// <--- Must be a number
};

let user = 'string'

// Additional property
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev', // Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number; }'
};

// Updating object type
let user: { name: string, age: number, nickname: string } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',
};

// Using Type for objects structure

type Person = { name: string, age: number, nickName: string }

// Apply person type for Objects witn the same struucture
let user: Person = {
    name: 'Danil',
    age: 29,
    nickName: 'Pobir'
}

let admin: Person = {
    name: 'Max',
    age: 20,
    nickName: 'Mad'
}

// 2 object with almost the same structure
let user: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',			// <--- property
};

let admin: Person = {
    name: 'Max',
    age: 20,
    getPass(): string {			// <--- new method
        return `${this.name}${this.age}`;
    },
};

// Updating type with optional properties
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};
