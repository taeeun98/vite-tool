
// generic type
// 함수처럼 생각하면 된다, type의 <> 제네릭 문법 안에 변수명을 짓고, 그것을 사용할수있음,
// 매개변수를 호출하는 부분 (const user ) 에서는 매개변수 타입을 지정해줘야함
// 당연히 매개변수는 두개 이상 들어갈 수 있음


/*
T ⇒ Type  
U ⇒ Util ⇒ Unique  
K ⇒ Key  
V ⇒ Value  
R ⇒ return type  
E ⇒ Element / Error  
S ⇒ State
*/


type User<Type, Util> = {name:Type; age:Util};

const user:User<string, number> = {
    name:'tiger',
    age:30
}

function fn<T>(value:T):T {
    return value
}

fn(10)
fn('hi');




function swapAtoB<T, U>(a:T, b:U):(U|T)[] {
    return [b,a];
}

swapAtoB(0,'a');
swapAtoB([],'a');





// function getLength(arr:number[] | string[] | {length:number}):number {
//     return arr.length;
// }

function getLength<T extends {length:number}>(arr:T):number {
    return arr.length;
}

getLength([1,2,3]);
getLength(['1','2','3']);
getLength({length:10});
getLength('hello');






type Response<T> = T extends string ? {type:string; content:string} : {type:string; content:T};

const r1:Response<string> = {type:'text', content:'hello'};
const r2:Response<{name:string}> = {type:'json', content:{name:'tiger'}};
const r3:Response<object> = {type:'json', content:{name:'tiger'}};
// 이것도 에러는 아니나, 어떤 객체를 넣어도 오류가 나지 않기에 타입스크립트를 쓰는 이유가 없다. 마치 any


function getById<T extends {id:number}>(item:T):number {
    return item.id;
}

getById({id:10, title:'아이폰'})
getById({id:20, title:'갤럭시'})
// getById({title:'맥북'}) // 에러