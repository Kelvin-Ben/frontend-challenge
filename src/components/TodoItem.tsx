import { XIcon } from "lucide-react";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
interface TodoItemProps {
  todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-white dark:bg-gray-800 rounded-sm shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 group font-sans">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          className="mr-3 cursor-pointer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-blue-600 checked:border-blue-600 checked:text-white checked:flex checked:items-center checked:justify-center checked:before:content-['✔'] checked:before:text-white checked:before:flex checked:before:text-xs transition-all duration-200"
        />
        <span
          className={`text-gray-800 dark:text-gray-200 font-mono ${
            todo.completed ? "line-through opacity-60" : ""
          }`}
        >
          {todo.title}
        </span>
      </div>
      <XIcon className="text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </div>
  );
};
export default TodoItem;
