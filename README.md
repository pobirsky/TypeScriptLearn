TypeScript

Курс по Typescript, поехали!

Зачем нужен Typescript?
Ответ: TypeScript — это язык программирования для веб-разработки, основанный на JavaScript. TypeScript добавляет в язык строгую типизацию и при неверной типе данных в момент написания кода указывает на ошибки. Помимо основных типов еще добавляется типы any (разрешает использовать любое значение) и void (тип для функций, которые ничего не возвращают, у них нет return). 


Как типизировать аргументы функции? 

Ответ: После указаания переменной описать тип данныхю
const createPasswordNew = (name: string, age: number | string) => `${name} ${age}`

А возвращаемое значение функции?

Ответ: нужно после круглых скобок указать тип возращаемых данных

const createPassword = (name: string, age: number | string): string => `${name}${age}`;

Что такое дженерики (обобщение)?
Это просто обозначение типов в общем виде, они позволяют создавать компоненты способные работать с различными типами, а не только строго с одним. 
Мы сами создаем типы и контролируем весь процесс.
```
function identity <T>(value: T) : T {
    return value;
}

console.log(identity<Number>(1)) // 1
```

![image](https://habrastorage.org/getpro/habr/post_images/e46/0b8/821/e460b88216a1d8c217b256c91a931eac.gif)
[статья с на хабр про джерерики](https://habr.com/ru/post/455473/)
[видос про дженерики](https://www.youtube.com/watch?v=ysQb60CQB8U&ab_channel=webDev)

[Хороший курс](https://www.youtube.com/watch?v=5QnZ9AyDW6c&ab_channel=webDev)
