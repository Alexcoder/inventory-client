import React from 'react'
import {useNavigate } from 'react-router-dom';
// import { useGlobalContext } from "../../state/context";
import './sidebar.css';

const SideBar = () => {
  // const { setTransaction } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div id="sidebarContainer" >
      <div>
        <div>
         <button className="addTransaction" onClick={()=> navigate(`/update`)} >ADD TRANSACTION</button>

        </div>
      </div>

    </div>
  )
}

export default SideBar