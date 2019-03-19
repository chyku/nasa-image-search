import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import SearchResultItem from './SearchResultItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchResultItem />
      </div>
    );
  }
}

export default App;
