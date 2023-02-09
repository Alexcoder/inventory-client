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
     <main className="welcome-main">
        <section>
            <h1 style={{color: "white", textAlign:"center", padding:"1rem 0rem"}}>ALEX HUB</h1>
        <div> <Dashboard /> </div>

        <div className="welcome-text-cont">
            <div className="welcome-text">
                <h2 className="inventory_text"> INVENTORY CHECK </h2>
               <div>
                 Built to monitor and track inflow and outflow<br/><br/>
                 of welbore cementing additives used.<br/>

                 <Button
                  sx={{textTransform:"lowercase", marginTop:"2rem", width:"50%"}}
                  variant="contained"
                  color ="secondary"
                  onClick={() => {
                  dispatch({type: HAVEACCOUNT_TRUE});
                  navigate(`/auth`);}}> SIGN IN
               </Button> 
               </div>
              </div>
        </div>
        </section>  
    </main>
    )
}

export default Welcome;