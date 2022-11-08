import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
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
            <button 
             onClick={()=> {setOpen((prev)=> !prev)}}
             className="menuIcon"><MenuOutlinedIcon/></button>
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
                    margin: "1.1rem 0rem 1.3rem 1rem",
                    width:{xs:"4.3rem"}
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
