import React, { Component } from 'react';
import '../styles/App.css';
import SearchResultItem from './SearchResultItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

class SearchResultList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: this.props.result,
      displayResult: this.props.result.slice(0, 25),
      lastIndex: 25,
      isLoading: false
    }
    console.log(this.state.result)

    this.renderItems = this.renderItems.bind(this);
    this.loadItems = this.loadItems.bind(this);
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
      this.setState({result: this.props.result,
        displayResult: this.props.result.slice(0, 25)});
    }
  }

  renderItems() {
    if (!this.state.displayResult) {
      return (<></>);
    }
    return this.state.displayResult.map((item, index) => (
      <Grid item xs={2}>
        <SearchResultItem
          key={index}
          item={item}
        />
      </Grid>
    ));
  }

  // Just sets the isLoading state to true so that renderItems can run
  loadItems() {
    console.log("loading items");
    console.log(this.state.result.slice(this.state.lastIndex, this.state.lastIndex + 25))
    this.setState({displayResult: [...this.state.displayResult, ...this.state.result.slice(this.state.lastIndex, this.state.lastIndex + 25)],
                  lastIndex: this.state.lastIndex + 25,});
    console.log(this.state.displayResult)
  }

  render() {
    return (
      <Grid
          container
          className="SearchResultList"
          spacing={16}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
        {!this.state.result || this.state.result.length === 0 ?
        <Grid item s={1} id="no-result">
          <div>No results found.</div>
        </Grid> :
          <>
            {this.renderItems()}
            {this.state.lastIndex < this.state.result.length &&
              <Grid item s={2}>
                <Button variant="contained" onClick={this.loadItems}>Load more</Button>
              </Grid>
            }
          </>
        }
      </Grid>
    );
  }
}

export default SearchResultList;
