import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
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
    const { movie } = this.props;
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center movie">
        <img
          className="img-thumbnail"
          alt={movie.film_name_en}
          src={movie.poster_url}
        />
        <div className="btn-play" onClick={this.handleShow}>
          <i className="fas fa-play" />
        </div>
        <h5 className="text-info">{movie.film_name_en}</h5>
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
              src={`https://www.youtube.com/embed/${movie.media_id}`}
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

MovieComponent.propTypes = {
  movie: PropTypes.object
}

export default MovieComponent;
