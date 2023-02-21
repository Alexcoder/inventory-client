import React from 'react'
import {useDispatch} from 'react-redux';
import { SIDEBAR_OPEN, UPDATE_TRUE, RECEIVE_TRUE, RECEIVE_FALSE} from '../../state/constants';

import './sidebar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div id="sidebarContainer" >
      <div>
        <div>
          <button className="addTransaction"
           onClick={() => {
            dispatch({type: UPDATE_TRUE });
            dispatch({type: SIDEBAR_OPEN });
            dispatch({type: RECEIVE_TRUE})}} >
            RECEIVE
          </button>
         <hr />
          <button className="addTransaction"
           onClick={() => {
            dispatch({type: UPDATE_TRUE }); 
            dispatch({type: SIDEBAR_OPEN });
            dispatch({type:  RECEIVE_FALSE });
            }} >
            SEND
          </button>
         <hr />
        </div>
      </div>

    </div>
  )
}

export default SideBar