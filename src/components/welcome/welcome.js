import React from 'react';
import {Dashboard} from '../'

import './welcome.css';

const Welcome =()=>{


    return(
     <main style={{margin: "5rem 0rem 1rem 9rem", width: "80rem"}}>
            <Dashboard />

        <div className="welcome_main">
            <Dashboard />
            <div className="welcome_text">
                <h2 className="inventory_text"> INVENTORY CHECK </h2>
               <div>
                 Built to monitor and track inflow and outflow<br/>
                 of additives used for welbore cementing .<br/>
                 Create account or Login to continue 
               </div>
              </div>
        </div>
    )
}

export default Welcome;