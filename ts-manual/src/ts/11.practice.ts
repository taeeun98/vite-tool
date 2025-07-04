import { EditorSettings } from "../../node_modules/typescript/lib/typescript";


const person = {
  name: "Alice",
  age: 25,
  job: "developer"
};



// 1. person의 타입을 Person으로 정의해보세요
type Person = typeof person;


// 2. Person의 key만 모은 타입은?
type PersonKeys = keyof Person; // "name" | "age" | "job"


// 다음 객체의 value값 만을 추출해 EditorValue의 타입을 지정해주세요.
const editorSettings = {
  theme: "light",            
  tabSize: 2,                  
  autoSave: true,             
  fontFamily: "Fira Code",    
  showLineNumbers: true      
};
// 여기서 as const 붙이면 상수로 바뀌어서, keyof, typeof 뽑은 값도 literal 로 바뀜


type EditorKey = keyof typeof editorSettings;
type EditorValue = typeof editorSettings[EditorKey];




// 다음 배열에서 as const와 typeof를 이용해 "red" | "green" | "blue" 타입을 만드는 코드를 완성하세요.

const colors = ["red", "green", "blue"] as const;
const colors2 = ["red", "green", "blue"];

// [number] 라는 지시자를 쓰면 배열의 모든 인덱스를 돈다
type Color = typeof colors[number]; //"red" | "green" | "blue"
type Color2 = typeof colors2[number]; //string
type Color3 = keyof typeof colors; // "0" | "1" | "2"

const selected: Color = "red";      // ✅
const errorTest: Color = "yellow";  // ❌ 오류




// 아래 액션 객체에서 type 속성이 "ADD_TODO"임을 정확하게 인식하도록 타입 단언을 적용하세요.

const action = {
  type: "ADD_TODO",
  payload: "공부하기"
};

function reducer(act:typeof action) {
  if (act.type === "ADD_TODO") {
    console.log("할 일을 추가합니다:", act.payload);
  }
}


