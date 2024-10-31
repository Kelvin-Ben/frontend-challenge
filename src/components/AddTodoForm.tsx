import { useState } from "react";
import { useThemeContext } from "../context/ThemeProvider";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useTodoActions from "../hooks/useTodoActions";

const AddTodoForm = () => {
  const { addTodo } = useTodoActions();
  const { darkMode } = useThemeContext();
  const [title, setTitle] = useState("");

  function Clear() {
    setTitle("");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      Clear();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center justify-between gap-4 p-4"
    >
      <div className="flex items-center w-full px-1">
        <Input
          className="w-full md:w-[50%] rounded-sm shadow-none font-mono"
          placeholder="Create a new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        className={`rounded-sm font-bold w-full md:w-auto px-6 py-2 transition-colors duration-200 ${
          darkMode
            ? "bg-transparent text-white hover:bg-gray-700"
            : "bg-gray-600 text-white hover:bg-gray-500"
        }`}
      >
        Add Item
      </Button>
    </form>
  );
};
export default AddTodoForm;
