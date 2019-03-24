import React, { Component } from 'react';
import queryString from 'query-string';
import SearchResultList from './SearchResultList';
import SearchBar from './SearchBar';
import '../styles/App.css';

class SearchResults extends Component {
  constructor(props) {
    super(props)

    const query = queryString.parse(this.props.location.search);
    const keys = Object.keys(query);
    const yearSearch = keys.length > 1;

    this.state = {
      searchType: yearSearch ? keys[1] : keys[0],
      searchTerm: yearSearch ? query[keys[1]] : query[keys[0]],
      startYear: yearSearch && query[keys[1]],
      endYear: yearSearch && query[keys[0]],
      result: ''
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search(this.state.searchType, this.state.searchTerm);
  }

  search = (searchType, query) => {
    let url = `https://images-api.nasa.gov/search?${searchType}=${query}`;

    // Accounting for year start/end searches
    if (searchType === "year_start") {
      url += "&year_end=" + this.state.endYear;
    }

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (data.collection) {
          this.setState({result: data.collection.items});
        }
      });
  };

  render() {
    return (
      <div className="SearchResults">
        <SearchBar searchType={this.state.searchType} 
          searchTerm={this.state.searchTerm} 
          startYear={this.state.startYear} 
          endYear={this.state.endYear} 
        />
        <SearchResultList result={this.state.result} />
      </div>
    );
  }
}

export default SearchResults;
