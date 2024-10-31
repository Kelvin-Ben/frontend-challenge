import { atom } from "recoil";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todosState = atom<Todo[]>({
  key: "todosState",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      // Load initial value from local storage
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos !== null) {
        setSelf(JSON.parse(savedTodos));
      }
      // save todos to local storage whenever they change
      onSet((newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
      });
    },
  ],
});
