import { useRecoilState } from "recoil";
import { Todo, todosState } from "../recoil/atoms/atoms";
import { getNextId } from "../utils/todoUtils";
import { useEffect, useState } from "react";

const useTodoActions = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [nextId, setNextId] = useState(() => getNextId(todos));

  useEffect(() => {
    setNextId(getNextId(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = { id: nextId, title, completed: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const deleteTodo = () => {
    setTodos(todos.filter((todo) => !(todo.id && todo.completed)));
  };

  const markComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return { todos, addTodo, deleteTodo, markComplete, clearCompleted };
};
export default useTodoActions;
