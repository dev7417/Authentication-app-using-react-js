import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
  const navigate = useNavigate();
    const {Component} = props;
    useEffect(()=>{
      let data = JSON.parse(localStorage.getItem('Item'));
      // let loginData = JSON.parse(localStorage.getItem('loginData'))
      console.log(data);
      if(data){
        navigate('/login')
      }else{
        navigate('/signup')
      }
    },[])
   
  return (
   <>

   {/* </ Component> */}
   <Component/>
   </>
  )
}
