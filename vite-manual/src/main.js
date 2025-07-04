import '@/style.css';
import { getNode, insertLast } from "kind-tiger";
import logo from '@/assets/js.svg';
import logo_8b from '@/assets/8b.jpg';
import classes from '@/style.module.css';
// css 모듈로 불러오려면 module.css' 를 붙여야함.

// named export = 원하는걸 as 명시하고 이름 바꿀수있음
// import { box as S } from "./test";

// export default = 어차피 내보내는게 하나니까 내가 변수로 지정함
// import S from './test'
// import {box, figure} from './test' // 구조분해도 가능




const app = getNode('#app');
const template = `
<figure class="figure">
  <img src="${logo}" alt="" />
  <figcaption>자바스크립트 로고</figcaption>
</figure>

<figure class="${classes.figure}">
  <img width="100px" src="${logo_8b}" alt="" />
  <figcaption>8b studio 로고</figcaption>
</figure>

`;



insertLast(app, template);
console.log(app);
