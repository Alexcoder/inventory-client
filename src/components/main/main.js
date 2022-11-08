import React from "react";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import {NavHero} from "../index";
import {useGlobalContext} from '../../state/context';
import {
  Container,
} from "@mui/material";
import './main.css'


const Main = () =>{ 
  const {open}= useGlobalContext();

  return (
    <div id="mainContainer">
           <div >
            <Dashboard/>
           </div>
            <Container sx={{ marginTop: "2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
             <ListSingle style={{ marginTop: "4rem" }} />
           </Container>
           {
            open && <NavHero/>
           } 
    </div>
  );
};

export default Main;
