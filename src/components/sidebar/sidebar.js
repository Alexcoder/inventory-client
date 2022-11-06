import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../state/context";
import './sidebar.css';

const SideBar = () => {
  const { setTransaction } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div id="sidebarContainer" >
      <div onClick={()=> navigate(`/update`)} style={{textDecoration: "none",}}>ADD TRANSACTION</div>
      <hr/>
      <Link to="/profile" style={{textDecoration: "none",}}>VIEW PROFILE</Link>
      <hr/>
      <Link to="/deleteUser" style={{textDecoration: "none",}}>DELETE USER</Link>
      <hr/>
      <div onClick={()=> setTransaction(true)} style={{textDecoration: "none",}}>VIEW ALL TRANSACTION</div>
      <hr/>

    </div>
  )
}

export default SideBar