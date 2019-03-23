import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography"
import '../styles/App.css';

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item,
      title: this.props.item.data[0].title,
      description: this.props.item.data[0].description
    };
  }

  render() {
    return (
      <div className="modal">
        <h3>{this.state.title}</h3>
        <Typography variant="subtitle1" id="simple-modal-description">
          {this.state.description}
        </Typography>
      </div>
    );
  }
}

export default ModalContent;
