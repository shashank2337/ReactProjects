import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { addTaskAction } from "../../../actions/taskActions";

class PersonForm extends Component {
  state = {
    name: "",
    age: "",
    address: "",
    pinCode: "",
    country: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      pinCode: this.state.pinCode,
      country: this.state.country,
    };

    this.props.addTask(data);
    this.setState({
      name: "",
      age: "",
      address: "",
      pinCode: "",
      country: "",
    });
  };

  handleChange = (e) => {
    if (e.target.id === "title") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === "description") {
      this.setState({
        description: e.target.value,
      });
    } else if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.id === "age") {
      this.setState({
        age: e.target.value,
      });
    } else if (e.target.id === "address") {
      this.setState({
        address: e.target.value,
      });
    } else if (e.target.id === "pinCode") {
      this.setState({
        pinCode: e.target.value,
      });
    } else if (e.target.id === "country") {
      this.setState({
        country: e.target.value,
      });
    }
  };

  render() {
    const { name, age, address, pinCode, country } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="age">Age</Label>
          <Input id="age" value={age} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input id="address" value={address} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="pinCode">Pin Code</Label>
          <Input id="pinCode" value={pinCode} onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">Country</Label>
          <Input id="country" value={country} onChange={this.handleChange} />
        </FormGroup>

        <Button color="primary">Add</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (args) => {
      dispatch(addTaskAction(args));
    },
  };
};

export default connect(null, mapDispatchToProps)(PersonForm);
