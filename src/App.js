import { Routes,Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Admin from './components/Admin';
import './App.css';

function App() {

  const user=false;

  return (
    <div className="App">
      <div className='components'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='admin' element={user? <Admin />: <Navigate to="/"/>}></Route>
        </Routes>


      </div>


    </div>
  );
}

export default App;
