import React from 'react';
import {Dashboard} from '../'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { HAVEACCOUNT_TRUE,  } from '../../state/constants';

import './welcome.css';

const Welcome =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();  


    return(
     <main className="welcome_main">
            <Dashboard />

        <div >
            <div className="welcome_text">
                <h2 className="inventory_text"> INVENTORY CHECK </h2>
               <div>
                 Built to monitor and track inflow and outflow<br/>
                 of additives used for welbore cementing .<br/>

                 <Button
                  sx={{textTransform:"lowercase"}}
                  variant="contained"
                  color ="secondary"
                  onClick={() => {
                  dispatch({type: HAVEACCOUNT_TRUE});
                  navigate(`/auth`);}}> SIGN IN
               </Button> 
               </div>
              </div>
        </div>
    </main>
    )
}

export default Welcome;