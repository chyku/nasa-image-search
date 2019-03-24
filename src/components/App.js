import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';

class App extends Component {
  render() {
    return (
      <HashRouter forceRefresh={true}>
        <div className="App">
          <Route exact path="/" component={SearchBar} />
          <Route path="/search" component={SearchResults} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
