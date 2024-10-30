import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  deleteTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={onToggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
