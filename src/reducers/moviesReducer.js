import {ActionTypes} from '../actions';

const moviesReducers = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCEEDED:
      return action.payload;
    case ActionTypes.FETCH_FAILDED:
      return [];
    default:
      return state;
  }
}

export default moviesReducers;