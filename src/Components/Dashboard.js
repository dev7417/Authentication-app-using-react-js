import React from 'react'
import { Grid,Typography,Box,CssBaseline,Button,Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function   () {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    console.log("Logout working");
    localStorage.clear();
   
      navigate('/login')
   
  }

  // let userData = localStorage.getItem("loginData");
  // let parseData = JSON.parse(userData);
  return (
    <>
    <CssBaseline />
    
      
      <Grid container sx={{ mt: 5, mx: 5 }}>
        <Grid
          item
          sm={8}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <Typography variant="h5">xyz12@gmail.com</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
          Peter
          </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ mt: 6 }}
            onClick={handleLogOut}
          >
            Logout
          </Button>
          
        </Grid>
       
      </Grid>   
    </>
  )
}
