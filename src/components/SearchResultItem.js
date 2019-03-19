import React, { Component } from 'react';
import '../styles/App.css';
import MockData from '../data/MockData'

class SearchResultItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: MockData,
      title: MockData["data"][0]["title"],
      preview: MockData["links"][0]["href"]
    }
  }

  render() {
    return (
      <div className="SearchResultItem">
        <h3>
          {this.state.title}
        </h3>
          <img src={this.state.preview} className="search-preview" alt={this.state.title} />
      </div>
    );
  }
}

export default SearchResultItem;
