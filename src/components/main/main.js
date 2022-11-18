import React from "react";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import { useSelector } from "react-redux";
import './main.css'


const Main = () =>{ 
const {Loading} = useSelector((state)=> state.posts);

  return (
    <div id="mainContainer" >
           <div >
            <Dashboard/>
           </div>
           { Loading ? <h3 style={{color: "white", fontStyle:"italics"}}>Loading ...</h3> :
              <div style={{ marginTop: "0.2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
              <ListSingle  />
           </div>
            }
    </div>
  );
};

export default Main;
