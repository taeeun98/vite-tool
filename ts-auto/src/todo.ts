import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


let todos: TodoList = loadStorage();


export function addTodo(content: string): void {
    const newTodo = {
        id: Date.now(),
        content: content,
        completed: false
    }

    todos.push(newTodo);

    saveStorage(todos);
}

export function deleteTodo(id: number): void {
    todos = todos.filter(todo => todo.id !== id)
    saveStorage(todos);
}

export function toggleTodo(id: number): void {
    todos = todos.map(todo => 
        //forEach 돌릴때의 각 todo.id === 체크박스 이벤트 내에서 id
        // ... 은 이뮤터블 데이터 처리한것
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )

    saveStorage(todos);
}

export function updateTodo(id: number, newContent: string): void {
  todos = todos.map(todo =>
    // 일치하는 id 찾으면 todo 데이터 일단 넣고 새컨텐츠 text 내용 덮어써서 반환.
    todo.id === id ? { ...todo, content: newContent } : todo
  );

  saveStorage(todos);
}