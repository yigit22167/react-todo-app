import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState(""); // list item state

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    newItem.length > 0 && addTodo(newItem);
    // check if str is empty
    // if not, add new item to todo list
    setNewItem(""); // set placeholder to empty str
  };

  return (
    <>
      <form
        action=""
        className="flex max-w-md justify-between items-center mx-auto my-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="py-2 px-3 w-full rounded text-2xl outline-0"
          placeholder="Enter todo..."
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
        <button
          type="submit"
          class="bg-transparent transition-all duration-100 hover:bg-teal-400 ml-2 text-white text-2xl font-semibold hover:text-white py-2 px-4 border border-teal-300 hover:border-transparent rounded"
        >
          <IoAdd className="text-3xl" />
        </button>
      </form>
    </>
  );
};
