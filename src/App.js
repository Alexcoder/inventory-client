import React, {useEffect,} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {Navbar, Main, Detail, Auth, SideBar, Update, Hero, NavHero} from './components';
import {getPosts,} from './state/action/posts';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';
// import BookSearch from './BookSearch';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, logout, setOpen, open}= useGlobalContext();

  
  useEffect(()=> {
    dispatch(getPosts());
  },[dispatch])



  return (
    <div 
    style={{height: "100%", width:"100%", 
        background: "linear-gradient(to top right, brown, rgba(0, 0, 0, 0.600))"}} >
     <Navbar />
        <div style={{display: "flex"}}>
          {
            user?.result || setOpen ?
            <SideBar /> : null
          }

      <Routes >
           <Route path='/'  element={ <Navigate to="/home"/> } />
           <Route path='/home'  element={<ProtectedRoute><Main/></ProtectedRoute>}/>
           <Route path='/:category'  element={<ProtectedRoute><Detail/></ProtectedRoute>}/>
           <Route path='/auth'  element={<LoginRoute><Auth/></LoginRoute>}/>
           <Route path='/update'  element={<ProtectedRoute><Update/></ProtectedRoute>}/>
     </Routes>
     {logout ? <Hero/> : null}
         </div>
         {
            open && <NavHero onClick1={()=>{navigate('/update'); setOpen(false)} }/>
           } 

    </div>
  );
}

export default App;
