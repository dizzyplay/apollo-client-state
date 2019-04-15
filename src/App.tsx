import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { GET_NOTES } from "./queries";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_NOTES}>
          {(data: any) => data && <div>{data.id}</div>}
        </Query>
      </div>
    );
  }
}

export default App;
