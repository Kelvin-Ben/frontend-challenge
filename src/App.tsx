import { useState } from "react";

import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import useTodoActions from "./hooks/useTodoActions";

function App() {
  const { todos } = useTodoActions();
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  return (
    <div className="width-[28rem] flex justify-center mt-10">
      <div className="container">
        <section className="rounded-sm">
          <Header />
        </section>
        <section className="shadow-md">
          <AddTodoForm />
        </section>
        <section className=" max-w-full p-6 shadow-lg rounded-sm mt-10 mb-10">
          <TodoList todos={todos} filter={filter} />
          <section>
            <TodoFilter setFilter={setFilter} filter={filter} />
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
