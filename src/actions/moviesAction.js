import { ActionTypes } from './actionTypes';

export const MoviesAction = {
  fetchMoviesAction: () => ({
    type: ActionTypes.FETCH_MOVIES
  }),
  fetchSuccessAction: movies => ({
    type: ActionTypes.FETCH_SUCCEEDED,
    payload: movies
  }),
  fetchFaildedAction: error => ({
    type: ActionTypes.FETCH_FAILDED,
    payload: error
  })
};
