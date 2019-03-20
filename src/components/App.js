import React, { Component } from 'react';
import '../styles/App.css';
import SearchBar from './SearchBar'
import SearchResultItem from './SearchResultItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchResultItem />
      </div>
    );
  }
}

export default App;
