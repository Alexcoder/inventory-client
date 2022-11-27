import React from "react";
import {Dashboard,List, Update } from '../'
import { useSelector } from "react-redux";
import { CircularProgress  } from "@mui/material";
import {useGlobalContext} from '../../state/context';
import './main.css'


const Main = () => {  
  const {update} = useGlobalContext()
  const { Loading } = useSelector((state) => state.posts);

  return (
    <div className="mainContainer" >

      <div>
        <Dashboard />

        <div style={{padding:"0rem 0.1rem"}}>
          <h1 className="record">RECORD</h1>
          {Loading ? <h3 className="loading"><CircularProgress/></h3> :
            <div style={{ marginTop: "-0.5rem", padding: "0rem 0.2rem" }}>
              <List />
            </div>
          }
        </div>
      </div>
      {update && 
      <div><Update/></div>}
    </div>
  );
};

export default Main;
