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
    <div className="mainContainer" >
      <div>
            <Dashboard/>

            <button 
            className="newTransaction"
             onClick={()=> navigate(`/update`)}
             >
              ADD TRANSACTION
             </button>

             <div>
               <h1 className="record">RECORD</h1>
               { Loading ? <h3 className="loading" >Loading . . .</h3> :
                  <div style={{ marginTop: "0.1rem"}}>
                  <ListSingle  />
               </div>
                }
             </div>
    </div>
    </div>
  );
};

export default Main;
