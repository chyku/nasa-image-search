import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/App.css';

const searchTypes = [
  {
    value: 'q',
    label: 'term',
  },
  {
    value: 'keywords',
    label: 'keywords',
  },
  {
    value: 'location',
    label: 'location',
  },
  {
    value: 'nasa_id',
    label: 'NASA ID',
  },
  {
    value: 'photographer',
    label: 'photographer',
  },
  {
    value: 'secondary_creator',
    label: 'secondary creator',
  },
];

class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchType: this.props.searchType || 'q',
      value: this.props.searchTerm || '',
      media: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
    console.log(event.target.value);
  }

  handleSubmit(event) {
    this.props.history.push('/search?' + this.state.searchType + '=' + this.state.value);
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
              select
              label="Select"
              value={this.state.searchType}
              onChange={this.handleChange('searchType')}
              helperText="Refine your search"
              margin="normal"
              variant="outlined"
            >
              {searchTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Search"
              value={this.state.value}
              onChange={this.handleChange('value')}
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
