import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ListContainer} />
      </div>
    );
  }
}

export default App;
