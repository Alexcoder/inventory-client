import React from 'react';
import {Dashboard} from '../'

import './welcome.css';

const Welcome =()=>{


    return(
     <main className="welcome_main">
            <Dashboard />

        <div >
            <div className="welcome_text">
                <h2 className="inventory_text"> INVENTORY CHECK </h2>
               <div>
                 Built to monitor and track inflow and outflow<br/>
                 of additives used for welbore cementing .<br/>
                 Create account or Login to continue 
               </div>
              </div>
        </div>
    </main>
    )
}

export default Welcome;