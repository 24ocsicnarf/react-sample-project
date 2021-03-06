import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello, { Hi } from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Hello name="Albert" />
      <Hi />
      <Welcome />
    </div>
  );
}

export default App;
