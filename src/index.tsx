import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import client from "./apollo";
import { ApolloProvider } from "react-apollo-hooks";
import GlobalStyles from "./Styles/globalStyles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
