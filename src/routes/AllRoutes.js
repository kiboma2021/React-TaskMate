import { Routes,Route, Navigate } from 'react-router-dom';
import { Main, Contact, Admin } from '../pages';

const AllRoutes = () => {
    const user=false;
  return (
    <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='admin' element={user? <Admin />: <Navigate to="/"/>}></Route>
    </Routes>

  )
}

export default AllRoutes
