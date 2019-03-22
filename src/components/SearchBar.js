import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/App.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.searchTerm || '',
      media: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push('/search?q=' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default withRouter(SearchBar);
