import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Container, Grid, Paper, TextField, Button, CircularProgress} from '@mui/material';
import {signIn, signUp} from '../../state/action/user';
import Dashboard from '../dashboad/dashboard';
import './auth.css';

const Auth = () => { 
    const dispatch = useDispatch();
    const {Loading, alert} = useSelector((state)=> state.auth);
    const navigate = useNavigate();
    const initialState = {username: "", password: "", confirmPassword: "", firstName: "", lastName: ""};
    const [mode, setMode] = useState(true)
    const [authPage, setAuthPage] = useState(initialState)
    const location= useLocation()

useEffect(()=>{
   JSON.parse(localStorage.getItem("profile"))
},[location])

  const handleAuthChange =(e)=>{
   setAuthPage({...authPage, [e.target.name] : e.target.value})
  }  

  const handleAuthSubmit =(e)=>{
    e.preventDefault();
    if(mode) dispatch(signIn({...authPage}, navigate));
    else dispatch(signUp({...authPage}, navigate));
    setAuthPage(initialState);
  }  

 

  return (
    <div className="authContainer">

  <Container maxWidth="xs" sx={{marginTop: {md:"6rem", xs:"2rem", sm:"2rem"},}}>
    <Paper elevation={5} pt={1} >
    {
       Loading && (
        <div className="circularProgress">
          <CircularProgress />
        </div>) 
        }

    <Grid sx={{textAlign:"center", color:"red", fontWeight:"600", paddingTop:"1rem"}}>{alert}</Grid>

    <Grid container textAlign="center" p={3} rowSpacing={2}>
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
          <Button disabled={Loading} sx={{width:"15rem"}} variant="contained" onClick={handleAuthSubmit}>
           { mode ? "LOGIN" : "CREATE ACCOUNT" }
            </Button>
       </Grid>
        
       
    </Grid>
  </Paper>
  </Container>

  <Dashboard/>

  </div>

  )
}

export default Auth