import React, { Component } from "react";
import "./App.css";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const FEED_QUERY = gql`
  {
    tasks {
      id
      title
      description
      status
    }
  }
`;

class App extends Component {
  tasksList() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          return data.tasks.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{ item.description }</p>
              <p>{ item.status }</p>
            </div>
          ));
        }}
      </Query>
    );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">{this.tasksList()}</header>
      </div>
    );
  }
}

export default App;
