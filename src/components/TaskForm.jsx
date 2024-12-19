/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginRight: "10px",
        }}
      />
      <button type="submit" style={{ padding: "10px" }}>
        Add
      </button>
    </form>
  );
};

export default TaskForm;
