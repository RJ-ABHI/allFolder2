import React, { Component } from "react";
import base from "./firebase";

class Home extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div>My Home Page</div>
        <button onClick={() => base.auth().signOut()}>Click to SignOut</button>
      </div>
    );
  }
}
export default Home;
