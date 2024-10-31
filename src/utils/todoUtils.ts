import { Todo } from "../recoil/atoms/atoms";

// get the next Id for newTodo to be added
export const getNextId = (todos: Todo[]): number =>
  todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

// filter todos based on filter type
export const filterTodos = (
  todos: Todo[],
  filter: "all" | "active" | "completed"
) => {
  if (filter === "active") return todos.filter((todo) => !todo.completed);
  if (filter === "completed") return todos.filter((todo) => todo.completed);
  return todos;
};
