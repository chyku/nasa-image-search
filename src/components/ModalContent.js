import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"
import '../styles/App.css';

class ModalContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.item,
      preview: this.props.item["links"] ? this.props.item["links"][0]["href"] : null,
      title: this.props.item.data[0].title,
      description: this.props.item.data[0].description,
      keywords: this.props.item.data[0].keywords,
      nasaId: this.props.item.data[0].nasa_id
    };
  }

  render() {
    return (
      <div className="modal">
        <center>
          <Typography variant="h5" gutterBottom>
            {this.state.title}
          </Typography>
          {this.state.preview && <img src={this.state.preview} alt={this.state.title}/> }
        </center>
        <p><b>NASA ID:</b> {this.state.nasaId}</p>
        <p><b>Keywords:</b> {this.state.keywords.join(', ')}</p>
        <Typography variant="subtitle1" id="simple-modal-description">
          {this.state.description}
        </Typography>
      </div>
    );
  }
}

export default ModalContent;
