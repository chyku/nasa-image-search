import React, { Component } from 'react';
import '../styles/App.css';
import ModalContent from './ModalContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';

class SearchResultItem extends Component {
  constructor(props) {
    super(props)

    // Need better testing if these things exist
    this.state = {
      item: this.props.item,
      title: this.props.item["data"][0]["title"],
      preview: this.props.item["links"] ? this.props.item["links"][0]["href"] : null,
      modal: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({modal: true});
  }

  handleClose() {
    this.setState({ modal: false });
  };

  render() {
    return (
      <Card className="SearchResultItem">
      <CardActionArea onClick={this.handleClick}>
        <CardContent>
          <h4>{this.state.title}</h4>
        </CardContent>
        <CardMedia
          className="search-preview"
          component="img"
          image={this.state.preview}
          title={this.state.title}
        />
        </CardActionArea>
        <Modal
          open={this.state.modal} 
          onClose={this.handleClose}>
          <ModalContent item={this.state.item} />
        </Modal>
      </Card>
    );
  }
}

export default SearchResultItem;
