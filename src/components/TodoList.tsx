import useTodoActions from "../hooks/useTodoActions";
import { Todo } from "@/recoil/atoms/atoms";
import { filterTodos } from "../utils/todoUtils";
import TodoItem from "./TodoItem";

interface TodoListProp {
  todos: Todo[];
  filter: "all" | "active" | "completed";
}

const TodoList = ({ filter }: TodoListProp) => {
  const { todos, markComplete, deleteTodo } = useTodoActions();
  const filteredTodos = filterTodos(todos, filter);

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
