import React from "react";
import { Button } from "@mui/material";
import {BiMenu} from 'react-icons/bi'
import { useGlobalContext } from "../../state/context";
import './navbar.css';

const Navbar = () => {
  const { user, search, setSearch, setOpen,setLogout, sidebar, setSidebar } = useGlobalContext();


  return (
    <div id="navContainer"  >
      <div >
        {
          user?.result &&
            <button 
             onClick={()=> {setOpen((prev)=> !prev); setSidebar(!sidebar)}}
             className="menuIcon"><BiMenu/></button>
        }
        <h1 className="inventoryControl" style={{textAlign:"start", width:"12rem"}}>INVENTORY</h1>
        <h4 className="user">
          {user?.result ? user?.result.name : null}
        </h4>
        {
         user &&
        <input
          className="navSearch"
          placeholder="search..."
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
                    margin: "0.5rem -1.2rem 1.3rem 1rem",
                    width:{md:"8rem",xs:"4.5rem", sm:"6.3rem"}
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
