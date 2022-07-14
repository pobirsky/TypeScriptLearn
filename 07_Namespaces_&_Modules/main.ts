// Just example of functionality
const SECRET: string = '123321';
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;

// каждая из констант становится глобальной

// ES5 Module решение в JS
(function () {
    const SECRET: string = '123321';
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
}());

//Простраство имен Define namespace

namespace Utils {
    const SECRET: string = '123321';
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
}

// try to call method outside namespace
const myPass = Utils.getPass('Yauhen', 31);	// Property 'getPass' does not exist on type 'typeof Utils'

//нужно сначала экспортировать
namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;
    export const getPass = (name: string, age: number): string => `${name}${age}`;
    export const isEmpty = <T>(data: T): boolean => !data;
}

// Calling exported from namespace methods
const myPasss = Utils.getPass('Yauhen', 31);	// Property 'getPass' does not exist on type 'typeof Utils'
const isSecret = Utils.isEmpty(Utils.SECRET);

// Export
// File "Utils.ts"
namespace Utils {
    export const SECRET: string = '123321';
    export const getPass = (name: string, age: number): string => `${name}${age}`;
}

// File "Customers.ts"
// Import
/// <reference path="Utils.ts" />			// <--- Import

// Calling "Utils" namespace method
const myPass = Utils.getPass('Yauhen', 31);	// "Yauhen31"

// Import/Export (ES6 Modules)

// File "Utils.ts"
export const SECRET: string = '123321';

export const getPass = (name: string, age: number): string => `${name}${age}`;

// File "Customers.ts"
import { getPass, SECRET } from "./Utils";

const myPass = getPass(SECRET, 31);	// "Yauhen31"
