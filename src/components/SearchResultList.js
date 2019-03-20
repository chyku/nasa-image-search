import React, { Component } from 'react';
import '../styles/App.css';
import MockData from '../data/MockData'

// TODO: limit the items shown on a page (or infinite load)
// TODO: get the right kind of list

class SearchResultList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: this.props.result,
      title: MockData["data"][0]["title"],
      preview: MockData["links"][0]["href"]
    }
  }

  render() {
    return (
      <div className="SearchResultList">
        <h3>
          {this.state.title}
        </h3>
          <img src={this.state.preview} className="search-preview" alt={this.state.title} />
      </div>
    );
  }
}

export default SearchResultList;
