import React, { Component } from "react";

class Main extends Component {
  state = {
    mainArray: { email: "", password: "" }
  };
  handleChange = (e) => {
    let { currentTarget: inp } = e;
    let localArray = this.state.mainArray;
    localArray[inp.name] = inp.value;
    this.setState({ mainArray: localArray });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.mainArray);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              name="email"
              value={this.state.mainArray.email}
              onChange={this.handleChange}
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={this.state.mainArray.password}
              onChange={this.handleChange}
              id="exampleFormControlInput1"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default Main;
