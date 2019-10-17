/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>MERN</h1>
        </div>
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
