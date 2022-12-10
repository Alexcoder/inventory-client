import React from 'react';
import {useDispatch} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
// import {useGlobalContext} from '../../state/context';
import { OPEN_FALSE, OPEN_TRUE, UPDATE_TRUE } from '../../state/constants';

import "./navHero.css";


const NavHero = () => { 
  // const {open} = useGlobalContext();
  const dispatch = useDispatch()


  return (
    <div className="navHeroContainer" onClick={()=> {dispatch({type: OPEN_FALSE })}}>
      <div className="container">
        <div>
          <button 
          onClick={()=> { dispatch({type: OPEN_FALSE }) }}
          style={{float:"right",width:"2rem"}}><CloseIcon/></button>
        </div>
        <button className="heroNavButton" 
          onClick={()=>{dispatch({type: UPDATE_TRUE}); dispatch({type: OPEN_TRUE}) }}>
          ADD TRANSACTION
        </button>
        <hr style={{background: "black"}}/>
      </div>
    </div>
  )
}

export default NavHero;
