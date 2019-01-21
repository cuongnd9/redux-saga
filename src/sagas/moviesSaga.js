import { put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../actions';
import { Api } from './api';

function* fetchMoviesAsync() {
  try {
    const movies = yield Api.fetchMovies();
    yield put({ type: ActionTypes.FETCH_SUCCEEDED, payload: movies });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_FAILDED, payload: error });
  }
}

export function* watchFetchMoviesAsync() {
  yield takeLatest(ActionTypes.FETCH_MOVIES, fetchMoviesAsync);
}
