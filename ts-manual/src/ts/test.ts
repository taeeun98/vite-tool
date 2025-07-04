//Q1. 이름(userName)과 나이(userAge)를 변수로 선언해보세요.
const userName:string = "asdsd";
const age:number = 123;
//Q2. 좋아하는 과일 3가지를 배열(favoriteFruits)로 만들어 출력하세요.
const favoriteFruits:string[] = ['sdf', 'sdf', 'sdf'];
//Q3. 이름(name)과 점수(score)를 가지는 학생 객체(student)를 만들어보세요.
const student:{
    name:string;
    age:number;
} = {
    name : "안녕",
    age: 123
}

//Q4. 요일을 enum(DayOfWeek)으로 만들고, 오늘 요일(today)을 Monday로 설정하세요.
enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

const today:DayOfWeek = DayOfWeek.Monday;

//Q5. 어떤 값이 들어올 수 있는 변수(randomValue)를 만들고, 숫자 → 문자열 → 불린값 순서로 바꿔보세요
let randomValue:any = 123;
 randomValue = "123";
 randomValue = true;


//Q6. 숫자 또는 문자열을 받아 출력하는 함수(printValue)를 만들어보세요. 매개변수는 value로 하세요.
function printValue(value:string|number):void {
    
}

//Q7. 아무것도 반환하지 않는 함수(sayHello)를 만들어보세요.
function sayHello():void {
    
}
//Q8. 사용자 타입(User)을 alias로 만들고, 해당 타입의 사용자 객체(user1)를 만들어보세요.
type User = {
  id: number;
  name: string;
};

let user1: User = {
  id: 1,
  name: "지은"
};

//Q9. 어떤 값(someValue)을 문자열이라고 단언하고 길이(strLength)를 구하세요.
const someValue:unknown = "123";
const length:number = (someValue as string).length

//Q10. 매개변수(input)가 string이면 길이를 출력하고, number면 제곱을 출력하는 함수(handleInput)를 만들어보세요.
function handleInput(input:string | number) {
    
}