import React from "react";
import {useNavigate} from "react-router-dom";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import { useSelector } from "react-redux";
import './main.css'


const Main = () =>{ 
const {Loading} = useSelector((state)=> state.posts);
const navigate = useNavigate();

  return (
    <div id="mainContainer" >
           <div >
            <h2 style={{color:"gold"}}>DASHBOARD</h2>
            <Dashboard/>
           </div>
           {/* <div className="addTransaction"> */}

            <button 
            className="newTransaction"
             onClick={()=> navigate(`/update`)}
             >
              ADD TRANSACTION
             </button>
<hr style={{width:"100%", backgroundColor:"gray", marginLeft:"0.5rem"}}/>
           <h2 style={{color:"gold"}}>RECORD</h2>
           { Loading ? <h3 style={{color: "white", fontStyle:"italics"}}>Loading ...</h3> :
              <div style={{ marginTop: "0.2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
              <ListSingle  />
           </div>
            }
    </div>
  );
};

export default Main;
