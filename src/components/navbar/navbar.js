import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useGlobalContext } from "../../state/context";
import {logOut} from '../../state/action/user'

const Navbar = () => {
  const { user, search, setSearch } = useGlobalContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  return (
    <div  style={{position: "sticky"}}>
      <div
        style={{
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
          opacity: "0.8",
          boxShadow: "0px 1px 0.4rem 0.2px gray",
          border: "1px solid gray",
        }}
        
      >
        <h1 style={{ flexBasis: "50%", color: "white", margin: "1.2rem 0rem 1rem 0rem"}}> INVENTORY </h1>
        <h4
          style={{
            flexBasis: "10%",
            color: "white",
            margin: "1.7rem 0rem 0rem 0rem",
          }}
        >
          {user?.result ? user?.result.name : null}
        </h4>
        <input
          placeholder="search"
          type="text"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          style={{ height: "2rem", margin: "1.2rem 0rem 0rem 0rem", textTransform: "capitalize" }}
        />
        { user?.result?
        <Button
                  style={{
                    flexBasis: "10%",
                    color: "white",
                    margin: "1.1rem 0rem 1.3rem 1rem",
                  }}
        
          variant="contained"
          color ="secondary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(logOut(navigate));
          }}
        >
          LOGOUT
        </Button> : null
}
      </div>
    </div>
  );
};

export default Navbar;
