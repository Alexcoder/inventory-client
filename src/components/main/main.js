import React from "react";
import ListSingle from "../list/list";
import Dashboard from "../dashboad/dashboard";
import { useSelector } from "react-redux";
import { CircularProgress  } from "@mui/material";
import './main.css'


const Main = () => {
  const { Loading } = useSelector((state) => state.posts);

  return (
    <div className="mainContainer" >

      <div>
        <Dashboard />

        <div style={{padding:"0rem 0.1rem"}}>
          <h1 className="record">RECORD</h1>
          
          {Loading ? <h3 className="loading"><CircularProgress/></h3> :
            <div style={{ marginTop: "-0.5rem", padding: "0rem 0.2rem" }}>
              <ListSingle />
            </div>
          }
          
        </div>
      </div>

    </div>
  );
};

export default Main;
