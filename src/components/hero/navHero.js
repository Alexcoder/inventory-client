import React from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { OPEN_FALSE, OPEN_TRUE, UPDATE_TRUE, RECEIVE_TRUE, RECEIVE_FALSE } from '../../state/constants';

import "./navHero.css";


const NavHero = () => { 
  const dispatch = useDispatch();
  // const {receive} = useSelector((state)=> state.stateReducer);


  return (
    <div className="navHeroContainer" onClick={()=> {dispatch({type: OPEN_FALSE })}}>
      <div className="container">
        <div>
          <button 
          onClick={()=> { dispatch({type: OPEN_FALSE }) }}
          style={{float:"right",width:"2rem"}}><CloseIcon/></button>
        </div>
        <button className="heroNavButton" 
          onClick={()=>{
            dispatch({type: UPDATE_TRUE}); 
            dispatch({type: OPEN_TRUE});
            dispatch({type: RECEIVE_TRUE});
             }}>
          RECEIVE
        </button>
        <hr style={{background: "black"}}/>
        <button className="heroNavButton mt" 
          onClick={()=>{
            dispatch({type: UPDATE_TRUE}); 
            dispatch({type: OPEN_TRUE});
            dispatch({type: RECEIVE_FALSE});
             }}>
          SEND
        </button>
        <hr style={{background: "black"}}/>
      </div>
    </div>
  )
}

export default NavHero;
