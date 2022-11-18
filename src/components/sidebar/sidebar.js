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
         <button onClick={()=> navigate(`/update`)} style={{border: "1px solid inherit", width:"100%",height:"3rem", background:"white", color:"black"}}>ADD TRANSACTION</button>

        </div>
      </div>

    </div>
  )
}

export default SideBar