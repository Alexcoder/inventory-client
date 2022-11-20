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
            <Dashboard/>

            <button 
            className="newTransaction"
             onClick={()=> navigate(`/update`)}
             >
              ADD TRANSACTION
             </button>

             <div>
               <h2 className="record">RECORD</h2>
               { Loading ? <h3 style={{color: "white", fontStyle:"italics"}}>Loading ...</h3> :
                  <div style={{ marginTop: "0.2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
                  <ListSingle  />
               </div>
                }
             </div>
    </div>
  );
};

export default Main;
