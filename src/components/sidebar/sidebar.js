import React from 'react'
import {useDispatch} from 'react-redux';
import { SIDEBAR_FALSE, UPDATE_TRUE, } from '../../state/constants';


import './sidebar.css';

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div id="sidebarContainer" >
      <div>
        <div>
          <button className="addTransaction"
           onClick={() => {dispatch({type: UPDATE_TRUE }); dispatch({type: SIDEBAR_FALSE })}} >ADD TRANSACTION</button>
         <hr />
        </div>
      </div>

    </div>
  )
}

export default SideBar