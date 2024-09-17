import React, { useState } from "react";

export default function Form({ addTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoList(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[400px] text-white mb-8 rounded placeholder:text-gray-300 center"
        placeholder="What is your task?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="bg-gray-700 border-none p-4 text-white cursor-pointer rounded ml-2">
        Add Task
      </button>
    </form>
  );
}
