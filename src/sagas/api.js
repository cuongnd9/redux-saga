import axios from 'axios';

function* fetchMovies() {
  const params = {
    param: {
      url: '/film/list?status=2',
      keyCache: 'showing-film'
    },
    method: 'GET'
  };
  const response = yield axios.post('/apitomapp', params, {
    headers: { 'content-type': 'application/json' }
  });
  return response.data ? response.data.result : [];
}

export const Api = { fetchMovies };
