// Simple interface example
interface User {
    name: string,
    age: number,
}


interface User {
    name: string,
    age?: number,
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
}
