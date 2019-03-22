import React, { Component } from 'react';
import '../styles/App.css';

class SearchResultItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.item,
      title: this.props.item["data"][0]["title"],
      preview: this.props.item["links"] ? this.props.item["links"][0]["href"] : null
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
