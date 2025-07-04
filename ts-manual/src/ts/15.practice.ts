import { Pokemon } from "./type";

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';


async function fetchData(url:string):Promise<Pokemon> {
    const response = await fetch(url);
    const respnoseData = response.json();
    return respnoseData;
}

fetchData(END_POINT);




function createCard({ sprites, name }: Pick<Pokemon, 'sprites' | 'name'>):string {
  const tag = `
    <div class="card">
      <img src="${sprites['front_default']}" alt="${name}" />
      <h2>${name}</h2>
    </div>
  `;

  return tag;
}

function renderCard(target:HTMLElement|null,data:Pokemon):void {
    target?.insertAdjacentHTML('beforeend', createCard(data));
}




function fetchPokemon() {
  const arr:Promise<Pokemon>[] = [];

  // null 담은 10길이 배열 만들고 반복문 사용
  // 매개변수에 _ 넣으면 안쓰는값이라는 뜻. i 인덱스만 사용할 것
  Array(10).fill(null).forEach((_, i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
    arr.push(fetch(url).then((res) => res.json())); // Pokemon 타입 promise를 반환한 것을 arr 배열에 담음.
  });

  return arr;
}

function createPokemonObject(arr:Promise<Pokemon>[]) {
    let pokemon:unknown;

    // [Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise]
    // Promise.all(arr) arr promise 객체 한번에 열기 -> 통신 전부 다 될때까지 기다려줌
    // Promise.race(arr) arr 중에 프로미스 통신이 가장 빠르게 완료되는거 하나를 찾음
    Promise.all(arr).then((all)=>{
        pokemon = all.map((p)=>{
            return {
                name:p.name,
                Image:p.sprites['front_default'] //인텔리센스로 타입스크립트가 data값을 자동으로 로딩해줌
            }
        })
    })

    return pokemon;
}


createPokemonObject(fetchPokemon());

/*
 pwd
cd VITE-TOOL
 npm creat vite@latest
Project name:
│  ts-auto
Select a framework:
│  Vanilla
Select a variant:
│  TypeScript
cd ts-auto
  npm install
  npm run dev
*/
