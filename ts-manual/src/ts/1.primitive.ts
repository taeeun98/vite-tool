// number, string, boolean, null, undefined
// 타입 추론

/* number type */
let num1:number = 10;
let num2:number = NaN;
let num3:number = -123;
let num4:number = 0.12345;
let num5:number = Infinity;

num1 = num2 && num5;

/* string type */
let str1 = 'hi';
let str2 = "hi";
let str3 = `hi${num1}`;

/* boolean type */
let bool1 = true;
let bool2 = false;

/* null type */
let nullA = null;

/* undefined type */
let undef = undefined;

/* unknown type */
let unknown: unknown;

/* never type */
let never: never;

/* any type */
let any: any;

/* literal type */
let nickName:'tiger' = 'tiger'
let age:35 = 35
let happy:true = true
let numA: 10 = 10;
let strA: 'hello' = 'hello';
let boolA: true = true;

