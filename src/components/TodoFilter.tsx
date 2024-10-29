interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoFilterProps {
  todos: Todo[];
  onClearCompleted: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
}
const TodoFilter: React.FC<TodoFilterProps> = ({
  todos,
  onClearCompleted,
  setFilter,
}) => {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 px-0 gap-4">
      <div className="text-gray-600 font-bold">{activeCount} items left</div>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-2 gap-2 sm:gap-4">
        <button
          className="bg-transparent p-0 text-gray-500 hover:underline font-semibold"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="bg-transparent p-0 text-gray-500 hover:underline font-semibold"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="bg-transparent p-0 text-gray-500 hover:underline font-semibold"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button
        className="hover:text-red-400 bg-transparent p-0 text-gray-500 font-semibold"
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};
export default TodoFilter;
