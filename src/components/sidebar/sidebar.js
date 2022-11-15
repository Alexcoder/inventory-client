import React from 'react'
import {useNavigate } from 'react-router-dom';
// import { useGlobalContext } from "../../state/context";
import './sidebar.css';

const SideBar = () => {
  // const { setTransaction } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div id="sidebarContainer" >
      <button onClick={()=> navigate(`/update`)} style={{border: "1px solid inherit", width:"100%",height:"3rem", background:"white", color:"black"}}>ADD TRANSACTION</button>
      {/* <button onClick={()=>{ navigate(`/profile`)}} style={{border: "1px solid inherit", width:"100%",height:"3rem", background:"white", color:"black"}}>VIEW PROFILE</button>
      <button onClick={()=>{navigate(`/deleteUser`)}} style={{border: "1px solid inherit", width:"100%",height:"3rem", background:"white", color:"black"}}>DELETE USER</button>
      <button onClick={()=> setTransaction(true)} style={{border: "1px solid inherit", width:"100%",height:"3rem", background:"white", color:"black"}}>VIEW ALL TRANSACTION</button> */}

    </div>
  )
}

export default SideBar