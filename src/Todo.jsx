import { useState, useEffect } from "react";
export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    if(!e.trim()) return; 
    setTodos([...todos, e]);
    setInputValue("");
  }
  function handleDeleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div
      style={{
        backgroundColor: "#6969e9",
        padding: "20px",
        borderRadius: "10px",
        margin: "auto",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width:"50%"
      }}
    >
      {/* Todo & Delete  */}
      {todos.map((todo, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <p>{todo}</p>
            <button
              style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </div>

          <hr></hr>
        </div>
      ))}
      {/* Add & input  */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            padding: "10px",
            width: "20%",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => handleAddTodo(inputValue)}
        >
          Add
        </button>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            width: "70%",
            border: "none",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="Add a todo"
        />
      </div>
    </div>
  );
}
