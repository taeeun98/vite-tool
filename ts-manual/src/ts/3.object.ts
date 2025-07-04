const user:{
    name:string;
    age:number;
    id?:number;
} = {
    name:'tiger',
    age:30,

}

// user.id = 123;

const config: {
    readonly apiKey:string // overrite 못하게 하려면
} = {
    apiKey: 'asd!0_12341524$Kak'
}

// config.apiKey = 'aaa' //오류