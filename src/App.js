import React from 'react';
import { MovieComponent } from './components';

function App() {
  return (
    <div className="container">
      <div className='row text-center'>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </div>
    </div>
  );
}

export default App;
