import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

class SignUp extends Component {
  state = {
    mainArray: { email: "", name: "", password: "" }
  };
  handleChange = (e) => {
    let { currentTarget: inp } = e;
    let localArray = this.state.mainArray;
    localArray[inp.name] = inp.value;
    this.setState({ mainArray: localArray });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let locaArray = this.state.mainArray;
    console.log(this.state.mainArray);
    const db = firebase.firestore();
    // db.settings({
    //   timeStampsInSnapShots: true
    // });
    const userRef = db.collection("/users").add({
      email: locaArray.email,
      name: locaArray.name,
      password: locaArray.password
    });
    console.log(userRef);
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
            <label for="exampleFormControlInput1">Enter Your Name</label>
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              name="name"
              value={this.state.mainArray.name}
              onChange={this.handleChange}
              placeholder="abcd"
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
          <Link to="/login">
            <div className="text-center">Already Login go to sign In Page</div>
          </Link>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
