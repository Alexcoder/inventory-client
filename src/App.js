import React, {useEffect,} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {Navbar, Main, Detail, Auth, SideBar,Hero, NavHero} from './components';
import {getPosts,} from './state/action/posts';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';


function App() {
  const dispatch = useDispatch();
  const {user, logout, setOpen, open, sidebar, setUpdate}= useGlobalContext();

  
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
     {logout ? <Hero/> : null}
         </div>
         {
            open && <NavHero onClick={()=>{setUpdate(true); setOpen((prev)=> !prev)} }/>
         } 

    </div>
  );
}

export default App;
