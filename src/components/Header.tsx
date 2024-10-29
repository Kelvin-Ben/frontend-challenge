import { useThemeContext } from "../context/ThemeProvider";
import { SunIcon, MoonIcon } from "lucide-react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <header className="flex justify-between items-center p-4 rounded-sm shadow-md mb-6">
      <h1 className="px-1 text-2xl font-bold text-gray-600 font-mono">
        Todo List
      </h1>
      <button
        onClick={toggleDarkMode}
        className={`rounded-full p-2 transition-colors duration-100 ${
          darkMode
            ? "bg-transparent hover:bg-gray-700"
            : "bg-transparent hover:bg-gray-100"
        }`}
      >
        {darkMode ? (
          <MoonIcon className="text-gray-600 dark:text-yellow-600" />
        ) : (
          <SunIcon className="text-yellow-500 dark:text-yellow-600" />
        )}
      </button>
    </header>
  );
};
export default Header;
