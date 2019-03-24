import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
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
    value: 'photographer',
    label: 'photographer',
  },
  {
    value: 'secondary_creator',
    label: 'secondary creator',
  },
  {
    value: 'year_start',
    label: 'time range',
  },
];

class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      searchType: this.props.searchType || 'q',
      value: this.props.searchTerm || '',
      startYear: this.props.startYear || '',
      endYear: this.props.endYear || '',
      media: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    this.props.history.push('/search?' + this.state.searchType + '=' + this.state.value);
    if (this.state.searchType === "year_start") {
      this.props.history.push('/search?' + this.state.searchType + '=' + this.state.startYear + "&year_end=" + this.state.endYear);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div class="searchbar">
        <span id="search-span">
        <h1>
          <a href="/">
            <img id="nasa-logo" src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA logo"/>
          </a>
          Image Search
        </h1>
        
        <form id="search-form" onSubmit={this.handleSubmit}>
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
            
            {this.state.searchType === "year_start" ? 
              <>
                <TextField
                label="Start Year"
                value={this.state.startYear}
                onChange={this.handleChange('startYear')}
                margin="normal"
                variant="outlined"
              /> 
                <TextField
                  label="End Year"
                  value={this.state.endYear}
                  onChange={this.handleChange('endYear')}
                  margin="normal"
                  variant="outlined"
                />
                <Button type="submit" id="submit-button"></Button>
              </>
              :
              <TextField
              label="Search"
              value={this.state.value}
              onChange={this.handleChange('value')}
              margin="normal"
              variant="outlined"
            />
            }
          </label>
        </form>
        </span>
      </div>
    );
  }
}

export default withRouter(SearchBar);
