import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        text: "",
        id: uniqid(),
        index: 1,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        index: this.state.task.index,
      },
    });
  };

  editTask = (editId) => {
    for (let t of this.state.tasks) {
      if (t.id === editId) {
        this.setState({
          tasks: this.state.tasks.filter((item) => item !== t),
          task: t,
        });
      }
    }
  };

  deleteTask = (delId) => {
    for (let t of this.state.tasks) {
      if (t.id === delId) {
        this.setState({
          tasks: this.state.tasks.filter((item) => item !== t),
        });
      }
    }
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid(), index: this.state.task.index + 1 },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview
          tasks={tasks}
          editTask={this.editTask}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
