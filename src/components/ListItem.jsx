import { FaTrash } from "react-icons/fa";

export const ListItem = ({ id, todo, deleteTodo }) => {
  return (
    <li
      key={id}
      className="flex relative group justify-between max-w-screen-md mt-3 rounded bg-teal-600"
    >
      <p className="p-2 text-2xl text-white font-medium max-w-screen-sm px-4 py-3">
        {todo}
      </p>
      <button
        onClick={() => deleteTodo(id)}
        className="h-full hidden group-hover:block -right-0 rounded-r absolute"
      >
        <FaTrash className="text-2xl w-14 text-red-800" />
      </button>
    </li>
  );
};
