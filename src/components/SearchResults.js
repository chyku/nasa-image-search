import React, { Component } from 'react';
import queryString from 'query-string';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';
import '../styles/App.css';

class SearchResults extends Component {
  constructor(props) {
    super(props)

    const query = queryString.parse(this.props.location.search);

    this.state = {
      searchType: Object.keys(query)[0],
      searchTerm: query[Object.keys(query)[0]],
      // can put extra search filters in here
      result: ''
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search(this.state.searchType, this.state.searchTerm);
  }

  search = (searchType, query) => {
    const url = `https://images-api.nasa.gov/search?${searchType}=${query}`;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({result: data.collection.items});
      });
  };

  render() {
    return (
      <div className="SearchResults">
        <SearchBar searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
        <SearchResultList result={this.state.result} />
      </div>
    );
  }
}

export default SearchResults;
