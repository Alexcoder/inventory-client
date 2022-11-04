import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../state/context";

const SideBar = () => {
  const { transaction, setTransaction } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div style={{width: "15rem", margin:"0rem 0rem 0rem 0rem",
          background: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600))", 
          textAlign: "center", padding:"1rem",
          cursor:"pointer"}}>
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