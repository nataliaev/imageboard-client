import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
import FavoritesListContainer from './components/FavoritesListContainer'
import TravelingPlanner from './components/TravelingPlanner'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ListContainer} />
        <Route exact path="/favorites" component={FavoritesListContainer} />
        <Route exact path="/travel-planner" component={TravelingPlanner} />
      </div>
    );
  }
}

export default App;
