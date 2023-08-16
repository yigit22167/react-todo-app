import { useState, useEffect } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  }); // check local storage

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]); // save todos to local storage

  function addTodo(todo) {
    setTodos([...todos, { id: crypto.randomUUID(), text: todo }]);
  } // func to add todos to list

  function deleteTodo(id) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  } // func to delete todos using their ID's

  return (
    <div className="min-h-screen bg-teal-950 flex items-cente justify-center">
      <div className="flex flex-col">
        <h2 className="mt-36 font-pop font-bold text-4xl mb-2 text-white text-center text-teal-100">
          TODO APP
        </h2>
        <TodoForm addTodo={addTodo} />
        {/*pass addTodo props to TodoForm component*/}
        {todos.length < 1 && (
          <h2 className="font-pop font-medium text-2xl text-white text-teal-100">
            No todos
          </h2>
        )}
        <TodoList todos={todos} deleteTodo={deleteTodo} />

        {todos.length >= 1 && (
          <h2 className="font-pop font-medium text-2xl text-white my-5 text-teal-100">
            You have {todos.length} pending todos
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
