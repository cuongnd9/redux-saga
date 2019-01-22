import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieComponent from './MovieComponent';

class MoviesComponent extends Component {
  componentDidMount() {
    this.props.onFetchMovies();
  }

  render() {
    return (
      <div className="row text-center">
        {this.props.movies &&
          this.props.movies.map((movie, index) => (
            <MovieComponent key={index} movie={movie} />
          ))}
        {!this.props.movies && (
          <h5 className="text-danger">Nothing to display!</h5>
        )}
      </div>
    );
  }
}

MoviesComponent.propTypes = {
  movies: PropTypes.array,
  onFetchMovies: PropTypes.func
};

export default MoviesComponent;
