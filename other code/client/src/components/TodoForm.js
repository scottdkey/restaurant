import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class TodoForm extends Component {
  state = {
    name: this.props.name,
    complete: this.props.complete === undefined ? false : this.props.complete
  };
  clearForm() {
    this.setState({
      name: "",
      complete: false
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateTodo(this.state, this.props.id);
      this.props.toggleForm()
    } else {
      this.props.addTodo(this.state);
    }
    this.clearForm();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Todo"
          name="name"
          placeholder="enter a todo"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
