import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import { HttpLink } from "apollo-boost";

const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
