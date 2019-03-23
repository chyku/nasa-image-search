import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
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
      <div class="searchbar">
        <span>
          <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo"/>
          <h1>NASA Image Search</h1>
        </span>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            <TextField
              fullWidth
              label="Search"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
