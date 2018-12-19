import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateToDo from "./components/create-todo.component";
import EditToDo from "./components/edit-todo.component";
import ToDoList from "./components/todo-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack To-Do App</h2>
          <Route path="/" exact component={ToDoList} />
          <Route path="/edit/:id" component={EditToDo} />
          <Route path="/create" component={CreateToDo} />
        </div>
      </Router>
    );
  }
}

export default App;
