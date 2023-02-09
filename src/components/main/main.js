import React from "react";
import {Dashboard,List, } from '../'
import { useSelector } from "react-redux";
import { CircularProgress  } from "@mui/material";
import './main.css'


const Main = () => {  
  const { Loading } = useSelector((state) => state.posts);

  return (
    <div className="mainContainer" >
      <div>

        <Dashboard />
      <div>
          {Loading ? <div className="loading"><CircularProgress/> Fetching data...</div> :
            <div style={{ marginTop:"1rem"}}>
              <List />
            </div>
          }
    </div>
    </div>
    </div>
  );
};

export default Main;
