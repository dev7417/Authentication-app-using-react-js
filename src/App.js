import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>

      </Route>
    </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
