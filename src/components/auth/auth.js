import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {Container, Grid, Paper, TextField, Typography, Button} from '@mui/material';
import {signIn, signUp} from '../../state/action/user';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialState = {username: "", password: "", confirmPassword: "", firstName: "", lastName: ""};
    const [mode, setMode] = useState(true)
    const [authPage, setAuthPage] = useState(initialState)

  const handleAuthChange =(e)=>{
   setAuthPage({...authPage, [e.target.name] : e.target.value})
  }  

  const handleAuthSubmit =(e)=>{
    e.preventDefault();
    if(!mode & authPage.password !== authPage.confirmPassword) alert("password mismatch");
    else if(mode) dispatch(signIn({...authPage}, navigate));
    else dispatch(signUp({...authPage}, navigate));
    setAuthPage(initialState);
  }  

  return (
  <Container maxWidth="xs" sx={{marginTop: {md:"6rem", xs:"10rem", sm:"7rem"}}}>
    <Paper elevation={5} >
    <Grid container textAlign="center" p={4} rowSpacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <TextField value={authPage.username} name="username" type="email" label="Username"
            onChange={handleAuthChange}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField value={authPage.password} name="password" type={mode ? "password" : "string"} label="Password"
            onChange={handleAuthChange}/>
        </Grid>
        {
            !mode?
            <> 
        <Grid item xs={12} sm={12} md={12}>
            <TextField value={authPage.confirmPassword} name="confirmPassword" type="password" label="Confirm password"
            onChange={handleAuthChange}/>
        </Grid> 
        <Grid item xs={12} sm={12} md={12}>
            <TextField value={authPage.firstName} name="firstName" label="First name"
            onChange={handleAuthChange}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField value={authPage.lastName} name="lastName" label="Last name"
            onChange={handleAuthChange}/>
        </Grid> 
        </>
       : null 
        }

        <Grid item xs={12} sm={12} md={12}>
        <Button onClick={()=> setMode((prev)=> !prev)}> { mode? "DONT HAVE AN ACCOUNT ? Sign Up": "ALREADY HAVE AN ACCOUNT? Sign In"}
      </Button>
        </Grid>

     <Grid item xs={12} sm={12} md={12}>
     <Button sx={{width:"15rem"}} variant="contained" onClick={handleAuthSubmit}>LOGIN</Button>
     </Grid>
    </Grid>

    </Paper>

  </Container>
  )
}

export default Auth