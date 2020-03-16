import React, { Component, useState } from 'react';
import { Form, Button, Checkbox} from 'semantic-ui-react'

export default class ItemForm extends Component {
  state = {
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    meal: this.props.meal,
    course: this.props.course,
    gluten: this.props.gluten === undefined ? false : this.props.gluten,
    v: this.props.v === undefined ? false : this.props.v,
    veg: this.props.veg === undefined ? false : this.props.veg,
    nuts: this.props.nuts === undefined ? false : this.props.nuts,
    dairy: this.props.dairy === undefined ? false : this.props.dairy,
    soy: this.props.soy === undefined ? false : this.props.soy,
    meals: [
      { key: "b", text: "Breakfast", value: "breakfast" },
      { key: "l", text: "Lunch", value: "lunch" },
      { key: "d", text: "Dinner", value: "dinner" }
    ]
  }
  clearForm() {
    this.setState({
      name: "",
      description: "",
      price: null,
      meal: 'select',
      course: "",
      gluten: false,
      v: false,
      veg: false,
      nuts: false,
      dairy: false,
      soy: false
    })
  }
  handleSubmit = e => {
    console.log(this.props.id);
    console.log(this.state)
    console.log('id should be here')
    e.preventDefault();
    if (this.props.id) {
      this.props.updateItem(this.state, this.props.id)
      this.props.toggleForm()
    } else {
      this.props.addItem(this.state)
    }
    this.clearForm()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  flipBoolean = e => {
    this.setState({
      [e.target.id] : e.target.checked
    })
  }
  handleSelector = e => {
    this.setState({
      [e.target.name] : e.target.options
    })
  }


  render() {
    const { meals } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="name"
          name="name"
          placeholder="new dish"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Form.Input
          label="Description"
          name="description"
          placeholder="dish description"
          required
          onChange={this.handleChange}
          value={this.state.description}
        />
        <Form.Input
          label="Price"
          name="price"
          placeholder="price"
          required
          onChange={this.handleChange}
          value={this.state.price}
        />
        <Form.Select
          fluid
          label="Meal"
          name="meal"
          options={meals}
          placeholder="Which menu?"
          onChange={this.handleSelector}
          value={meals.value}
        />
        <Checkbox
          onClick={this.flipBoolean}
          id="gluten"
          control={Checkbox}
          checked={this.state.gluten}
          label="GF"
          value={this.state.gluten}
        />
        <Checkbox
          onClick={this.flipBoolean}
          id="dairy"
          control={Checkbox}
          checked={this.state.dairy}
          label="Dairy"
          value={this.state.dairy}
        />
        <Checkbox
          onClick={this.flipBoolean}
          id="nuts"
          control={Checkbox}
          checked={this.state.nuts}
          label="Nuts"
        />
        <Form.Field
          onClick={this.flipBoolean}
          id="soy"
          control={Checkbox}
          checked={this.state.soy}
          label="Soy"
        />
        <Form.Field
          onClick={this.flipBoolean}
          id="v"
          control={Checkbox}
          checked={this.state.v}
          label="Vegan"
        />
        <Checkbox
          onClick={this.flipBoolean}
          id="veg"
          control={Checkbox}
          checked={this.state.veg}
          label="Vegetarian"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }

}