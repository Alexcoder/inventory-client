import React, {useEffect,} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {Navbar, Main, Detail, Auth, SideBar, Update, Hero} from './components';
import {getPosts,} from './state/action/posts';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';
// import BookSearch from './BookSearch';


function App() {
  const dispatch = useDispatch();
  const {user, logout, }= useGlobalContext();

  
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
            user?.result &&
            <SideBar /> 
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
    </div>
  );
}

export default App;
