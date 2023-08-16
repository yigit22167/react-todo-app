import { ListItem } from "./ListItem";

export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            deleteTodo={deleteTodo}
            id={todo.id}
            todo={todo.text}
          />
        );
      })}
    </ul>
  );
};
