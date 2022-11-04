import React, {useEffect} from "react";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import {
  Container,
} from "@mui/material";



const Main = () => {



  return (
    <div>
      <Dashboard/>
       <Container sx={{ marginTop: "2rem", display: {md:"flex", sm:"grid",xs:"grid"}, gap: "2rem"}}>
        <ListSingle style={{ marginTop: "4rem" }} />
      </Container> 
    </div>
  );
};

export default Main;
