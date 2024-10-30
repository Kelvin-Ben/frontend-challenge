import { DeleteIcon } from "lucide-react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoItemProps {
  todo: Todo;
  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  markComplete,
  deleteTodo,
}) => {
  const handleMarkComplete = () => {
    markComplete(todo.id);
  };

  return (
    <div className="flex cursor-pointer items-center justify-between p-2 mb-2 bg-white dark:bg-gray-800 rounded shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleMarkComplete}
          className="mr-3 cursor-pointer"
        />
        <span className={`font-mono ${todo.completed ? "line-through opacity-60" : ""}`}>
          {todo.title}
        </span>
      </div>

      {/* Delete Icon - Visible only on hover */}
      <DeleteIcon
        className="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-400"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
