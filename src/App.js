import React, {useEffect,} from 'react';
import {Route, Routes, Navigate, } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getPosts} from './state/action/posts';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';
import {Navbar, Main, Detail, Auth, SideBar,Hero, NavHero, Update} from './components';


function App() {
  const dispatch = useDispatch();
  const {user, logout, open, sidebar, update}= useGlobalContext();
  
  useEffect(()=> {
     dispatch(getPosts());
  },[dispatch])


  return (
    <div >
        <Navbar />
          <div style={{display: "flex"}}>
            {
              user?.result && sidebar ?
              <SideBar /> : null
            }
           <Routes >
             <Route path='/'  element={ <Navigate to="/home"/> } />
             <Route path='/home'  element={<ProtectedRoute><Main/></ProtectedRoute>}/>
             <Route path='/:category'  element={<ProtectedRoute><Detail/></ProtectedRoute>}/>
             <Route path='/auth'  element={<LoginRoute><Auth/></LoginRoute>}/>
           </Routes>
         </div>
         { logout && <Hero/> }
         { open && <NavHero /> } 
         { update && <div><Update/></div> }
    </div>
  );
}

export default App;
