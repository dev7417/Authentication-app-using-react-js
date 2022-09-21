import React from "react";
import { Grid, Box, TextField, Button, form,Card, Typography } from "@mui/material";
import Pic from "./images/pic-1.png";

export default function Login() {
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          textAlign="left"
          item
          lg={6}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            //   display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid textAlign="right" item lg={6} sm={5}>
          <Card sx={{width:'100%', height:'100%'}}>
            <Typography textAlign='center' variant='h4' fontFamily='san-serif' sx={{mt:2}}>Login Here </Typography>
          <Box component='form' noValidate sx={{mt:2, px:3}} id='login-form'>
            <TextField noValidate required name='Name' fullWidth label='Enter Your Name' id='your-name'/>
            <TextField noValidate required fullWidth margin='normal' sx={{mt:2}} name='email' label='Enter Your email'/>
            <TextField   noValidate required fullWidth margin='normal' name='password' label='Your Password'/>
            <Box textAlign='center'>
                <Button type='submit' variant="contained" sx={{mt:3, mb:2, px:2}}>Login</Button>
            </Box>
          </Box>
          </Card>

        </Grid>
      </Grid>
    </>
  );
}
