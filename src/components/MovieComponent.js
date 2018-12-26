import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/MovieStyle.scss';

class MovieComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center movie">
        <img
          className="img-thumbnail"
          alt="poster"
          src="https://s3img.vcdn.vn/123phim/2018/09/godzilla-king-of-the-monsters-15381106977444.jpg"
        />
        <div className="btn-play" onClick={this.handleShow}>
          <i className="fas fa-play" />
        </div>
        <h5 className="text-info">Godzilla</h5>
        <Modal
          centered
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Body>
            <iframe
              className="center"
              title="trailer"
              width="766"
              height="500"
              src="https://www.youtube.com/embed/QFxN2oDKk0E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default MovieComponent;
