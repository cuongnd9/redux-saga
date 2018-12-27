import React, { Component } from 'react';
import MovieComponent from './MovieComponent';

class MoviesComponent extends Component {
  render() {
    return (
      <div className="row text-center">
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </div>
    );
  }
}

export default MoviesComponent;
