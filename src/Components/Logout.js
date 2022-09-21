import React from "react";
import { Grid, Box, Card, TextField, Typography, Button, form } from "@mui/material";
import Pic from "./images/pic-3.png";

export default function Logout() {
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
          }}
        ></Grid>
        <Grid textAlign='right' item lg={6} sm={5}>
        <Card sx={{width:'100%', height:'100%', py:2}}>
            <Typography textAlign='center' variant='h4'>Signup</Typography>
            <Box container='form' id='signup-form' noValidate sx={{mt:2, px:3}}>
                <TextField noValidate required name='First Name' label='First Name' fullWidth/>
                <TextField noValidate required name='email' sx={{mt:2}} label=' Email' fullWidth/>
                <TextField noValidate required name='password' sx={{mt:2}} label=' Password' fullWidth/>
                <TextField noValidate required name='confirm-password' sx={{mt:2}} label='Confirm Password' fullWidth/>
                <Box textAlign='center'>
                    <Button variant='contained' sx={{mt:3, mb:2, px:2}}>Signup</Button>
                </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
