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
        <div><Dashboard /></div>
        <div>
          {Loading ? <h3 className="loading"><CircularProgress/></h3> :
            <div>
              <List />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Main;
