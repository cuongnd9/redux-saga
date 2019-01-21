import { call } from 'redux-saga/effects';
import { watchFetchMoviesAsync } from './moviesSaga';

export default function* rootSaga() {
  yield call(watchFetchMoviesAsync);
}
