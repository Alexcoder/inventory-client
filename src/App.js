import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {Container} from '@mui/material'
import {Navbar, Main, Detail, Auth, SideBar, Update, Hero} from './components';
import {getPosts,} from './state/action/posts';
import { useGlobalContext } from './state/context';
import ProtectedRoute from './components/protectedRoute';
// import BookSearch from './BookSearch';


function App() {
  const dispatch = useDispatch();
  const {user}= useGlobalContext();

  
  useEffect(()=> {
    dispatch(getPosts());
  },[dispatch])



  return (
    <Container  maxWidth="xl" >
     <Navbar />
        <div style={{display: "flex"}}>
          {
            user?.result &&
            <SideBar /> 
          }

      <Routes >
           <Route path='/'  element={ <Navigate to="/home"/> } />
           <Route path='/home'  element={<ProtectedRoute><Main/></ProtectedRoute>}/>
           <Route path='/:category'  element={<ProtectedRoute><Detail/></ProtectedRoute>}/>
           <Route path='/auth'  element={<Auth/>}/>
           <Route path='/update'  element={<ProtectedRoute><Update/></ProtectedRoute>}/>
           <Route path='/hero'  element={<Hero/>}/>
     </Routes>
         </div>
    </Container>
  );
}

export default App;
