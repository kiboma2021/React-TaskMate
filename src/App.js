import { useState,useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='components'>
        <Header />
        <Main />
      </div>


    </div>
  );
}

export default App;
