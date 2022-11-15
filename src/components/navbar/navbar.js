import React from "react";
import { Button } from "@mui/material";
import {MdMenu} from 'react-icons/md'
import { useGlobalContext } from "../../state/context";
import './navbar.css';

const Navbar = () => {
  const { user, search, setSearch, setOpen,setLogout, } = useGlobalContext();


  return (
    <div id="navContainer"  >
      <div >
        {
          user?.result &&
            <button 
             onClick={()=> {setOpen((prev)=> !prev)}}
             className="menuIcon"><MdMenu/></button>
        }
        <h1 >INVENTORY</h1>
        <h4 className="user">
          {user?.result ? user?.result.name : null}
        </h4>
        {
         user &&
        <input
          className="navInput"
          placeholder="search"
          type="text"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
        }
        { user?.result?
        <Button
                  sx={{
                    flexBasis: "10%",
                    color: "white",
                    margin: "0.5rem 0rem 1.3rem 1rem",
                    width:{md:"8rem",xs:"6.3rem", sm:"6.3rem"}
                  }}
        
          variant="contained"
          color ="secondary"
          onClick={(e) => {
            e.preventDefault();
            setLogout(true);
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
