import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  TextField,
  Typography,
  Button,
  form,
  Alert,
} from "@mui/material";
import Pic from "./images/pic-3.png";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState({
    status: false,
    type: "",
    msg: "",
  });
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();
    let item = { name, email, password, cnfpassword };
    let localData = localStorage.setItem("Item", JSON.stringify(item));
    console.log(item.email);

    if (item.name && item.email) {
      if (item.password === item.cnfpassword) {
        let result = await fetch("http://localhost:8001/user", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        });
        result = await result.json();

        console.log("result", result);

        setError({
          status: true,
          type: "success",
          msg: "you have registered successfully",
        });
        // setTimeout(() => {
        //   setLoggedIn(true);
          navigate("/login");
        // }, 3000);
      } else {
        // console.log("you are not allowed");
        setError({
          status: true,
          type: "error",
          msg: "your passwords does not match",
        });
      }
    } else {
      console.log("please fill the required fields");
      setError({
        status: true,
        type: "error",
        msg: "please fill the required fields",
      });
    }
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
          }}
        ></Grid>
        <Grid textAlign="right" item lg={6} sm={5}>
          <Card sx={{ width: "100%", height: "100%", py: 2 }}>
            <Typography textAlign="center" variant="h4">
              Signup
            </Typography>
            <Box
              container="form"
              id="signup-form"
              noValidate
              sx={{ mt: 2, px: 3 }}
            >
              <TextField
                noValidate
                required
                name="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="First Name"
                fullWidth
              />
              <TextField
                noValidate
                required
                name="email"
                sx={{ mt: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label=" Email"
                fullWidth
              />
              <TextField
                noValidate
                required
                name="password"
                sx={{ mt: 2 }}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                fullWidth
              />
              <TextField
                noValidate
                required
                name="confirm-password"
                type="password"
                sx={{ mt: 2 }}
                value={cnfpassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                label="Confirm Password"
                fullWidth
              />
              <Box textAlign="center">
                <Button
                  variant="contained"
                  onClick={signUp}
                  sx={{ mt: 3, mb: 2, px: 2 }}
                >
                  Signup
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
