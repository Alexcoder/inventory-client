import React from 'react'
// import {useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../state/context";
import './sidebar.css';

const SideBar = () => {
  const { setUpdate, setSidebar } = useGlobalContext();
  // const navigate = useNavigate();
  return (
    <div id="sidebarContainer" >
      <div>
        <div>
          <button className="addTransaction" onClick={() => { setUpdate(true); setSidebar(false) }} >ADD TRANSACTION</button>
         <hr />
        </div>
      </div>

    </div>
  )
}

export default SideBar