import React from 'react'
import{Box, AppBar, Toolbar, Typography, Button} from '@mui/material'
import {Outlet, NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                    AUTHO
                </Typography>
                <Button component={NavLink} to='/' style = {({isActive})=>{return{backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white', textTransform: 'none'}}>Home</Button>
                <Button component={NavLink} style={({isActive})=>{return{backgroundColor:isActive?'#6d1b7b':''}}} to='/contact' sx={{color:'white', textTransform: 'none'}}>Contact</Button>
                <Button component={NavLink} to='/LoginReg' style={({isActive})=>{return{backgroundColor:isActive?'#6d1b7b':''}}} sx={{color:'white', textTransform: 'none'}}>Login/Registration</Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Outlet/>
     </>
  )
}
