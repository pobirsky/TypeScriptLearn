// Simple example of enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up;      // 0
Directions.Down;    // 1
Directions.Left;    // 2
Directions.Right;   // 3

// Reverse enum
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions[0] // Up


// Custom index for enum elements

enum Directions2 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
}

Directions2.Up; // 2
Directions2.Down; // 4
Directions2[6]; // 'left'
Directions2[8]; // 'Right'

// Custom name for keys
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using
links.vk        // "https://vk.com/"
links.youtube 	// "https://youtube.com/"

// Compiled code Собирается обьект
"use strict";
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["vk"] = "https://vk.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));

// const enum (without using)
const enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Compiled code is empty
"use strict";

// const enum (with using)
const enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// Using of enum properties
const arr = [links.vk, links.facebook];

// Compiled code
"use strict";
const arr = ["https://vk.com/" /* vk */, "https://facebook.com/" /* facebook */];
