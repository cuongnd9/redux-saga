import React from 'react';
import { MoviesComponent } from './components';

function App() {
  return (
    <div className="container">
      <h1 className='text-success py-5'>Simple Redux Saga</h1>
      <MoviesComponent/>
    </div>
  );
}

export default App;
