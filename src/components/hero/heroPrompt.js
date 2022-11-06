import React from 'react';
import './heroPrompt.css';

const HeroPrompt=({promt, onClick1, onClick2})=>{

    return(
        <div id="heroContainer">
         <div>
            <h2>{"promt"}</h2>
             <div className="buttonContainer">
              <button className="button bColor1" onClick={onClick1}>Back</button>
              <button className="button bColor2" onClick={onClick2}>Continue</button>
             </div>
         </div> 
        </div>
    )
}

export default HeroPrompt;