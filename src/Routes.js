import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import Dog from "./Dog";

class Routes extends Component {
  render() {
    const getDog = (routeProps) => {
      const name = routeProps.match.params.name;
      const thisDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <Dog {...routeProps} dog={thisDog} />;
    };

    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
