
const arr =[1,2,3];

const newArray = arr.map((item, index)=>{
    return item * index;
})



type Map = <T,U>(arr:T[], f:(n:T)=>U) => U[];

// const map = <T, U>(arr:T[], f:(n:T)=>U):U[] => {
const map:Map = (arr, f) => {
  let result = [];

  for (const a of arr) {
    result.push(f(a));
  }

  return result;
}


type CallBack<T> = (a:T, i:number) => void;
type forEach = <T>(arr:T[], f:CallBack<T>) => void;


const forEach = <T>(arr:T[], f:CallBack<T>) => {
    let i = 0;
    for(const a of arr) {
        f(a, i++);
    }
}

// forEach(arr, (a, i)=>console.log(a))

interface _CallBack<T> {(a:T, i:number) : boolean}
type Filter= <T>(arr:T[], f:_CallBack<T>) => T[];



// 여기선 Filter type 못집어넣는다.
// 함수 선언식에서는 안됨
function filter<T>(arr:T[], f:_CallBack<T>):T[] {
    const result = [];
    let i = 0;
    for(const a of arr){
        if(f(a, i++)) result.push(a)
    }

    return result;
}

// 여기서만 넣을수있음
// 함수 표현식에선 타입 지정 가능
// const filter:Filter = (arr, f) => {
//     const result = [];
//     let i = 0;
//     for(const a of arr){
//         if(f(a, i++)) result.push(a)
//     }

//     return result;
// }

//filter(arr, (a)=> a > 1)



type Reduce = <T, U>(arr:T[], f:__Callback<T, U>, initial:U) => U;
type __Callback<T, U> = (acc:U, a:T, i:number)=>U;

const reduce = <T, U>(arr:T[], f:__Callback<T, U>, initial:U):U => {
    let acc = initial;
    let i = 0;

    for(const a of arr){
        acc = f(acc, a, i++);
    }

    return acc;
}


// reduce(arr, (a)=> a*2, 0)

