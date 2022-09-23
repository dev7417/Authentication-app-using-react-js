import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Contact from './Components/Contact';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Components/Login';
import Logout from './Components/Logout';
import Protected from './Components/Protected';
import Signup from './Components/Signup';
import { Component } from 'react';

function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Navbar/> */}
    <Routes>
      <Route element = {<Protected Component={Navbar }/>}>
        <Route index element={<Logout/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Protected Component={Login}/>}/>
        <Route path='/signup' element={<Logout/>}/>
        <Route path='/dashboard' element={<Protected Component={Dashboard}/>}/>
        <Route path='/logout' element={<Protected Component={Signup}/>}/>
        

      </Route>
    </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
