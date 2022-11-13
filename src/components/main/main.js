import React from "react";
import {useNavigate} from "react-router-dom";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import {NavHero} from "../index";
import {useGlobalContext} from '../../state/context';
import { useSelector } from "react-redux";
import {
  Container,
} from "@mui/material";
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
           { Loading ? <h2 style={{color: "blue", fontStyle:"italics"}}>Loading . . .</h2> :
              <Container sx={{ marginTop: "2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
              <ListSingle style={{ marginTop: "4rem" }} />
           </Container>
            }
            {
            open && <NavHero onClick1={()=>{navigate('/update'); setOpen(false)} }/>
           } 
    </div>
  );
};

export default Main;
