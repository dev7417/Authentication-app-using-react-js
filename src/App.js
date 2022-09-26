import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import Login from './Components/Login';
import Protected from './Components/Protected';
import Loader from './Components/Loader';
import React, {Suspense, lazy} from 'react'
const Logout = lazy(()=>import('./Components/Logout'))
const Login = lazy(()=> import('./Components/Login'))
const Dashboard = lazy(()=> import('./Components/Dashboard'))
const Signup = lazy(()=>import('./Components/Signup'))
function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Navbar/> */}
        <Suspense fallback={<Loader/>}>
    <Routes>
      <Route element = {<Protected Component={Navbar }/>}>
        <Route index element={<Logout/>}/>
        <Route path='/login' element={<Protected  Component={Login}/>}/>
        <Route path='/dashboard' element={<Protected Component={Dashboard}/>}/>
        <Route path='/logout' element={<Protected Component={Signup}/>}/>
        <Route path='/signup' element={<Logout/>}/>

        <Route path='/loader' element={<Loader/>}/>
        

      </Route>
    </Routes>
        </Suspense>
   </BrowserRouter>
   
   </>
  );
}

export default App;
