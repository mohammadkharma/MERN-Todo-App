/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import logo from "./loupe.png"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">
            <img src={logo} width="30" height="30" alt="logo"/>
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div>
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
