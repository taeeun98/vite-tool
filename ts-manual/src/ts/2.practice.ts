
// 자료형에 맞는 타입을 입력해주세요.


// 숫자만 담을 수 있는 배열

let numbers1:number[] = [1,2,3,4,5];
let numbers2:Array<number> = [1,2,3,4,5];


// 문자만 담을 수 있는 배열

let string1:string[] = ['apple','banana','cherry'];
let string2:Array<string> = ['apple','banana','cherry'];



// 다양한 타입을 포함할 수 있는 배열 (튜플 아님)

let mixed:(string|number)[] = [1,'apple',2,'banana','...',3];



// 숫자만 담을 수 있는 배열 (튜플로 정의)

let matrix:[number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];





