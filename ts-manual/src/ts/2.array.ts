let arr = [1,2,3];

let str = 'a,b,c'.split(',');

/* generic type */
let _arr:Array<number> = [1,2,3];
let _str:Array<string> = ['a','b','c'];

/* 유니온 타입 union type + array type */
let multi:(number|string|boolean)[] = ['hi', 10, true];

// multi = [100, 'hello'];

// 자리 정하고 싶다!
/* tuple type */
let tupleA:[number, number, number] = [1,2,3];

/* 다차원 배열 */
const user:[string, number][] = [
    ['심선범', 30],
    ['심선범', 30],
    ['심선범', 30],
]