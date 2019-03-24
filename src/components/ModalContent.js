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
      description: this.props.item.data[0].description,
      keywords: this.props.item.data[0].keywords,
      nasaId: this.props.item.data[0].nasa_id
    };
  }

  render() {
    return (
      <div className="modal">
        <h3>{this.state.title}</h3>
        <p><b>NASA ID:</b> {this.state.nasaId}</p>
        <p><b>Keywords:</b> {this.state.keywords}</p>
        <Typography variant="subtitle1" id="simple-modal-description">
          {this.state.description}
        </Typography>
      </div>
    );
  }
}

export default ModalContent;
