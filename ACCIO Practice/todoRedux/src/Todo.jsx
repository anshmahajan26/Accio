
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  deleteTodo,
  toggleTodo
} from "./todoSlice";

function Todo() { 
  const [text, setText] = useState("");

  const todos = useSelector(
    (state) => state.todos.items
  );

  const dispatch = useDispatch();

  function handleAdd() {
    if (text.trim() === "") return;

    dispatch(addTodo(text.trim()));
    setText("");
  }

  return (
    <div>
      <h1>Todo App</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAdd}>Add</button>

      <h3>Total Todos: {todos.length}</h3>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              cursor: "pointer"
            }}
          >
            {todo.text}
          </span>

          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
