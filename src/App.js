import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import Login from './Components/Login';
import Logout from './Components/Logout';
import Protected from './Components/Protected';
import Signup from './Components/Signup';
import { Component } from 'react';
import Loader from './Components/Loader';
import React, {Suspense, lazy} from 'react'
const Login = lazy(()=> import('./Components/Login'))
function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Navbar/> */}
    <Routes>
      <Route element = {<Suspense fallback={<div><Loader/></div>}><Protected Component={Navbar }/></Suspense>}>
        <Route index element={<Logout/>}/>
       
        <Route path='/login' element={<Suspense fallback={<div><Loader/></div>}><Protected  Component={Login}/> </Suspense>}/>
       
        <Route path='/signup' element={<Logout/>}/>
        <Route path='/dashboard' element={<Suspense fallback={<div><Loader/></div>}><Protected Component={Dashboard}/></Suspense>}/>
        <Route path='/logout' element={<Protected Component={Signup}/>}/>
        <Route path='/loader' element={<Loader/>}/>
        

      </Route>
    </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
