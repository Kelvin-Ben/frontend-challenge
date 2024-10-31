import { Todo } from "@/recoil/atoms/atoms";
import { DeleteIcon } from "lucide-react";

interface TodoItemsProp {
  todo: Todo;
  markComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, markComplete, deleteTodo }: TodoItemsProp) => {
  const handleToggleComplete = () => {
    markComplete(todo.id);
  };

  return (
    <div className="flex cursor-pointer items-center justify-between p-2 mb-2 bg-white dark:bg-gray-800 rounded shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="mr-3 cursor-pointer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-blue-600 checked:border-blue-600 checked:text-white checked:flex checked:items-center checked:justify-center checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:text-xs transition-all duration-200"
        />
        <span
          className={`font-mono ${
            todo.completed ? "line-through opacity-60" : ""
          }`}
        >
          {todo.title}
        </span>
      </div>

      <DeleteIcon
        className="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-400"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
