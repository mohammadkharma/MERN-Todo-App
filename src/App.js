/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand"><h1>TODOS</h1></a>
            {/* <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link> */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="navbar-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="navbar-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }

}

export default App;
