/* alias : 별칭 */

// type, interface

type User1 = {
    id:number;
    name:string;
    auth:string;
    isPaid:boolean
}

type User2 = User1 & {address:string};

const user1:User1 = {
    id:1,
    name:'tiger',
    auth:'admin',
    isPaid:true
}

const user2:User2 = {
    id:2,
    name:'beom',
    auth:'user',
    isPaid:false,
    address:'남양주시'
}

interface User3 {
    id:number;
    name:string;
    auth:string;
    isPaid:boolean
}

interface User4 extends User3 {
    address:string
}

const user3:User4 = {
    id:3,
    name:'sun',
    auth:'user',
    isPaid:true,
    address:'남양주시'
}



type Person = {
  name: string;
  age: number;
  email: string;
  [key:string]:string | number
}

// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는 index signature
const person: Person = {
  name: 'tiger',
  age: 30,
  email: 'tiger@gmail.com'
}
