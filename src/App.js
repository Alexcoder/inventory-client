import React, {useEffect} from 'react';
import {Route, Routes, Navigate, } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import {getAllDashboard} from './state/action/dashboard';
import {getAllHistory} from './state/action/history';
import { useGlobalContext } from './state/context';
import {ProtectedRoute, LoginRoute} from './components/protectedRoute';
import {Navbar, Detail, Auth, SideBar,Hero, Update, Welcome, 
        LoadingPage, SuccessPage, History, DashboardAuto,
        } from './components';
import { SIDEBAR_CLOSE } from './state/constants';


function App() {
  const dispatch = useDispatch();
  const { Loading,  } = useSelector((state) => state.dashboard);
  const { user, creator, logout, bin, sidebar, update, }= useGlobalContext();


  useEffect(()=> {
    //  dispatch(getAllDashboard(creator));
     dispatch(getAllHistory(creator));
  },[dispatch, creator, ])


  
  return (
    <div style={{maxWidth:"100%", overflow:"hidden", display:"", alignContent:""}}>
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
             <Route path='/home'  element={<ProtectedRoute><DashboardAuto/></ProtectedRoute>}/>
             <Route path='/home/history'  element={<ProtectedRoute><History/></ProtectedRoute>}/>
             <Route path='/home/find'  element={<ProtectedRoute><Detail/></ProtectedRoute>}/>
             <Route path='/auth'  element={<LoginRoute><Auth/></LoginRoute>}/>
             <Route path='/welcome'  element={<Welcome/>}/>
             <Route path='/success'  element={<SuccessPage/>}/>
           </Routes>
         </div>
         { (logout || bin) && <Hero/> }
         { update && <div><Update/></div> }
         { Loading && <div><LoadingPage/></div> }
    </div>
  );
}

export default App;
