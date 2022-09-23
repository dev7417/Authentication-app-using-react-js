import React from 'react'
import { Grid,Typography,Box,CssBaseline,Button,Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function   () {
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    console.log("Logout working");
    localStorage.clear();
    setTimeout(()=>{
      navigate('/login')
    },3000)
  }
  return (
    <>
    <CssBaseline />
    
      
      <Grid container sx={{ mt: 5, mx: 5 }}>
        <Grid
          item
          sm={8}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <Typography variant="h5">hello125@gmail.com</Typography>
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
       
        {/* <Alert severity={error.type}>{error.msg}</Alert> */}
      </Grid>   
    </>
  )
}
