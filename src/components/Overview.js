import React from "react";

const Overview = (props) => {
  const { tasks, editTask, deleteTask } = props;

  return (
    <ul style={{ listStyle: "none" }}>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.index.toString()} {task.text}
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
