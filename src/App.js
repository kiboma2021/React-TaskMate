import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='components'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>


      </div>


    </div>
  );
}

export default App;
