import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { App } from './App';
import './index.css';

const token = process.env.REACT_APP_GITHUB_TOKEN;
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: token ? `Token ${token}` : null,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: process.env.REACT_APP_GITHUB_URL })),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
