import { useState } from "react"
import AddTodoForm from "./components/AddTodoForm"
import Header from "./components/Header"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => !(todo.id === id && todo.completed)))
  }

  const markComplete = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    }))
  }
  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: nextId,
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
    setNextId(nextId + 1);
  };


  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;      // 'all'
  })
  
  return (
      <div className="width-[28rem] flex justify-center mt-10">
        <div className="container">
          <section className="rounded-sm">
            <Header />
          </section>
          <section className="shadow-md">
            <AddTodoForm addTodo={addTodo} />
          </section>
          <section className=" max-w-full p-6 shadow-lg rounded-sm mt-10 mb-10">
            <TodoList todos={filteredTodos} onToggleComplete={markComplete} deleteTodo={deleteTodo} />   
            <section>
              <TodoFilter todos={todos} onClearCompleted={handleClearCompleted} setFilter={setFilter} />
            </section>
          </section>
        </div>
      </div>
  )
}

export default App
