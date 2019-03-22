import React, { Component } from 'react';
import '../styles/App.css';
import SearchResultItem from './SearchResultItem';

// TODO: limit the items shown on a page (or infinite load)
// TODO: get the right kind of list

class SearchResultList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: this.props.result
    }
  }

  static getDerivedStateFromProps(props, current_state) {
    if (current_state.result !== props.result) {
      return {
        result: props.result
      }
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.result !== this.props.result){
      this.setState({result: this.props.result});
    }
  }

  render() {
    return (
      <div className="SearchResultList">
        {!this.state.result || this.state.result.length === 0 ?
        <div>No results found.</div> :
        this.state.result.slice(0, 20).map((item, index) => (
          <SearchResultItem
            key={index}
            item={item}
          />
        ))}
      </div>
    );
  }
}

export default SearchResultList;
