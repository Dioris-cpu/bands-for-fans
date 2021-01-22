import React, { Component }  from 'react';
import "./App.css";
import ApolloClient from "apollo-boost";
import InMemoryCache from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
