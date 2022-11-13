import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// import {AiOutlineMenu} from 'react-icons/ai'
// import {BiMenu} from 'react-icons/bi'
import {MdMenu} from 'react-icons/md'
import { useGlobalContext } from "../../state/context";
import {logOut} from '../../state/action/user'
import './navbar.css';

const Navbar = () => {
  const { user, search, setSearch, setOpen } = useGlobalContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  return (
    <div id="navContainer" >
      <div>
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
                    width:{md:"8rem",xs:"4.3rem"}
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
