import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { Button } from "@mui/material";
import {BiMenu} from 'react-icons/bi'
import { useGlobalContext } from "../../state/context";
<<<<<<< HEAD
import { SIDEBAR_TOGGLE, OPEN_TOGGLE, LOGOUT_TRUE, SEARCH } from '../../state/constants';

=======
import { SIDEBAR_TOGGLE, OPEN_TOGGLE, LOGOUT_TRUE, SEARCH, HAVEACCOUNT_TRUE, HAVEACCOUNT_FALSE } from '../../state/constants';
>>>>>>> 177e499 (refactor login)

import './navbar.css';

const Navbar = () => {
  const { user, search } = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div id="navContainer"  >
      <div >
        {
          user?.result &&
            <button 
<<<<<<< HEAD
             onClick={()=> { dispatch({type: OPEN_TOGGLE }); dispatch({type: SIDEBAR_TOGGLE }) }}
             className="menuIcon"><BiMenu/></button>
=======
               onClick={()=> {
               dispatch({type: OPEN_TOGGLE }); 
               dispatch({type: SIDEBAR_TOGGLE }) }}
               className="menuIcon"><BiMenu/>
            </button>
>>>>>>> 177e499 (refactor login)
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
          onChange={(e)=> dispatch({type: SEARCH , payload: e.target.value})}
        />
        }
        { user?.result?
        <Button
                  sx={{
                    flexBasis: "10%",
                    color: "white",
<<<<<<< HEAD
                    margin: "0.5rem -1rem 1.3rem 1rem",
=======
                    margin: "1rem -1rem 1.3rem 1rem",
>>>>>>> 177e499 (refactor login)
                    width:{md:"8rem",xs:"4.5rem", sm:"6.3rem"}
                  }}
        
          variant="contained"
          color ="secondary"
          onClick={(e) => {
            e.preventDefault();
            dispatch({type: LOGOUT_TRUE});
          }}
        >
          LOGOUT
        </Button> : null
<<<<<<< HEAD
}
=======
        }
>>>>>>> 177e499 (refactor login)
        { !user?.result?
        <Button
                  sx={{
                    flexBasis: "10%",
                    color: "white",
<<<<<<< HEAD
                    margin: "0.5rem -1rem 1.3rem 1rem",
                    width:{md:"8rem",xs:"4.5rem", sm:"6.3rem"}
=======
                    margin: "1rem 1rem 1.3rem 1rem",
                    width:{md:"8rem",xs:"6rem", sm:"6.3rem"}
>>>>>>> 177e499 (refactor login)
                  }}
        
          variant="contained"
          color ="secondary"
<<<<<<< HEAD
          onClick={(e) => {
            e.preventDefault();
=======
          onClick={() => {
            dispatch({type: HAVEACCOUNT_TRUE});
>>>>>>> 177e499 (refactor login)
            navigate(`/auth`);
          }}
        >
          SIGN IN
        </Button> : null
<<<<<<< HEAD
}
=======
        } 
>>>>>>> 177e499 (refactor login)

        { !user?.result?
        <Button
                  sx={{
                    flexBasis: "10%",
                    color: "white",
<<<<<<< HEAD
                    margin: "0.5rem -1rem 1.3rem 1rem",
                    width:{md:"8rem",xs:"4.5rem", sm:"6.3rem"}
=======
                    margin: "1rem 0rem 1.3rem 0rem",
                    width:{md:"8rem",xs:"6rem", sm:"6.3rem"}
>>>>>>> 177e499 (refactor login)
                  }}
        
          variant="contained"
          color ="secondary"
<<<<<<< HEAD
          onClick={(e) => {
            e.preventDefault();
=======
          onClick={() => {
            dispatch({type: HAVEACCOUNT_FALSE});
>>>>>>> 177e499 (refactor login)
            navigate(`/auth`);
          }}
        >
          SIGN UP
        </Button> : null
<<<<<<< HEAD
}
=======
    }
>>>>>>> 177e499 (refactor login)
      </div>
    </div>
  );
};

export default Navbar;
