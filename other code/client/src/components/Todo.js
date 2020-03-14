import React, { Component } from 'react'
import {Button, Card} from 'semantic-ui-react'
import TodoForm from './TodoForm'

export default class Todo extends Component {
  state = {
    showForm: false
  }
  showForm(){
    return(
      <TodoForm 
        updateTodo={this.props.updateTodo} 
        name={this.props.name} id={this.props.id} 
        completed={this.props.completed}
        toggleForm={this.toggleForm}
      />
    )
  }
  showTodo(){
    return(
      <>
          <Card.Meta content={this.props.id} />
          <Card.Description content={this.props.name} />
      </>
    )
  }
  toggleForm = (e) =>  {
    this.setState({
      showForm: !this.state.showForm
    })

  }
  deleteTodo = () => {
    
  }

  render(){
    return (
      <>
        <Card>
          <Card.Content>
            {this.state.showForm ? this.showForm() : this.showTodo()}
          </Card.Content>
          <Button onClick={this.toggleForm}>
            {this.state.showForm ? "hide form" : "edit"}
          </Button>
          <Button onClick={this.deleteTodo}>
            delete shit
          </Button>
        </Card>
      </>
    );
  }
}