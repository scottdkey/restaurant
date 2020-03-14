import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import { Container } from "semantic-ui-react";
import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    todos: [],
    loadTodoError: false,
    errorStatusCode: null
  };

  addTodo = todo => {
    axios
      .post("/api/items", {
        name: todo.name,
        complete: todo.complete
        //data
      })
      .then(res => {
        //success
        const newArray = [res.data, ...this.state.todos];
        this.setState({
          todos: newArray
        });
      })
      .catch(err => {
        //error
        console.log(err);
      });
  };

  updateTodo = (todoForm, id) => {
    axios
      .put(`/api/items/${id}`, {
        name: todoForm.name,
        complete: todoForm.complete
      })
      .then(res => {
        const newArray = this.state.todos.map( currentItem => {
          if(currentItem.id != id){
            return currentItem
          } return {...currentItem, ...todoForm};
          })
          this.setState({
            todos: newArray
          })
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderTodos() {
    if (this.state.loading) {
      return "loading";
    }
    if (this.state.loadTodoError) {
      return (
        <>
          <h1 style={{ color: "red" }}>error</h1>
          <p>status Code: {this.state.errorStatusCode}</p>
        </>
      );
    }
    return this.state.todos.map(todo => {
      return (
        <Todo key={`todo-${todo.id}`} {...todo} updateTodo={this.updateTodo} />
      );
    });
  }
  componentDidMount() {
    console.log("get data here");
    axios
      .get("api/items")
      .then(response => {
        this.setState({
          loading: false,
          todos: response.data
        });
        console.log(response);
      })
      .catch(error => {
        this.setState({
          loadTodoError: true,
          errorStatusCode: error.toString()
        });
      });
  }

  render() {
    return (
      <Container>
        <div className="App">
          <TodoForm addTodo={this.addTodo} />
          {this.renderTodos()}
        </div>
      </Container>
    );
  }
}
