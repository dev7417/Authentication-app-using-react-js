import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  form,
  Card,
  Typography,
  Alert
} from "@mui/material";
import Pic from "./images/pic-1.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    status:false,
    type:"",
    msg:""
  })
  let navigate = useNavigate();

  async function handleLogin() {
    let data = { name, email, password };
    // console.log(data.email);
    let response = await fetch("http://localhost:8001/user");
    let responseData = await response.json();
    console.log(responseData);
    responseData.map((item) => {
      console.log(item);
      console.log(item.name);
      if (data.email === item.email && data.password === item.cnfpassword) {
        if(data.name && data.email === " "){
          console.log("please fill the required fields")
        }
        setError({status:true,type:"success", msg:"logged in sucessfully"})
        setTimeout(()=>{
          navigate("/contact");

        }, 3000)
      } 
      else{
        setError({status:true, type:"error", msg:"Please create your account"});
        console.log("You are not allowed")
      }
    });
  }
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
          <Card sx={{ width: "100%", height: "100%" }}>
            <Typography
              textAlign="center"
              variant="h4"
              fontFamily="san-serif"
              sx={{ mt: 2 }}
            >
              Login Here{" "}
            </Typography>
            <Box noValidate sx={{ mt: 2, px: 3 }} id="login-form">
              <TextField
                noValidate
                required
                name="Name"
                fullWidth
                label="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                id="your-name"
              />
              <TextField
                noValidate
                required
                fullWidth
                margin="normal"
                sx={{ mt: 2 }}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Enter Your email"
              />
              <TextField
                noValidate
                required
                fullWidth
                margin="normal"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Your Password"
              />
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 2 }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Alert severity={error.type}>{error.msg}</Alert>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
