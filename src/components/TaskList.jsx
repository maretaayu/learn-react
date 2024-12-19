/* eslint-disable react/prop-types */

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f9f9f9",
            marginBottom: "10px",
          }}
        >
          <span
            onClick={() => onToggleTask(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "green" : "black",
            }}
          >
            {task.title}
          </span>
          <div>
            <button
              onClick={() => onToggleTask(task.id)}
              style={{
                background: task.completed ? "#4caf50" : "#f0ad4e",
                color: "white",
                border: "none",
                padding: "5px 10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              {task.completed ? "Incomplete" : "Complete"}
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
