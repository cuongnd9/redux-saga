import { connect } from 'react-redux';
import { MoviesComponent } from '../components';
import { MoviesAction } from '../actions';

const mapStateToProps = state => ({
  movies: state.moviesReducer
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => dispatch(MoviesAction.fetchMoviesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesComponent);
