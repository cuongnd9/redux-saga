import React from 'react';
import { MoviesContainer } from './containers';

function App() {
  return (
    <div className="container">
      <h1 className='text-success py-5'>Simple Redux Saga</h1>
      <MoviesContainer/>
    </div>
  );
}

export default App;
