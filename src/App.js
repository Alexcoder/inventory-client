import React, {useEffect,} from 'react';
import {Route, Routes, Navigate, } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getPosts} from './state/action/posts';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';
import {Navbar, Main, Detail, Auth, SideBar,Hero, Update, Welcome} from './components';
import { SIDEBAR_CLOSE } from './state/constants';


function App() {
  const dispatch = useDispatch();
  const {user, logout, bin, sidebar, update}= useGlobalContext();
  
  useEffect(()=> {
     dispatch(getPosts());
  },[dispatch])


  return (
    <div >
      {user?.result
        ?<Navbar />
        :null
      }
          <div style={{display: "flex"}} onClick={()=> dispatch({type: SIDEBAR_CLOSE})} >
            {
              user?.result && sidebar ?
              <SideBar /> : null
            }
           <Routes >
             <Route path='/'  element={ <Navigate to="/home"/> } />
             <Route path='/home'  element={<ProtectedRoute><Main/></ProtectedRoute>}/>
             <Route path='/:category'  element={<ProtectedRoute><Detail/></ProtectedRoute>}/>
             <Route path='/auth'  element={<LoginRoute><Auth/></LoginRoute>}/>
             <Route path='/welcome'  element={<Welcome/>}/>
           </Routes>
         </div>
         { (logout || bin) && <Hero/> }
         { update && <div><Update/></div> }
    </div>
  );
}

export default App;
