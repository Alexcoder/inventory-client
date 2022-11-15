import React from "react";
import {useNavigate} from "react-router-dom";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import {NavHero} from "../index";
import {useGlobalContext} from '../../state/context';
import { useSelector } from "react-redux";
import './main.css'


const Main = () =>{ 
  const {open, setOpen}= useGlobalContext();
const {Loading} = useSelector((state)=> state.posts);
  const navigate = useNavigate();

  return (
    <div id="mainContainer">
           <div >
            <Dashboard/>
           </div>
           { Loading ? <h3 style={{color: "white", fontStyle:"italics"}}>Loading . . .</h3> :
              <div style={{ marginTop: "0.2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
              <ListSingle  />
           </div>
            }
            {
            open && <NavHero onClick1={()=>{navigate('/update'); setOpen(false)} }/>
           } 
    </div>
  );
};

export default Main;
