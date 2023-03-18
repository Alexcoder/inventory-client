import React from 'react';
import {NavButton, ViewHistory, Goto} from "./sub";
import { RECEIVE_TRUE, RECEIVE_FALSE} from '../../state/constants';
import './sidebar.css';

const SideBar = () => {

  return (
    <div id="sidebarContainer" >
      <div>
        <div>
         <Goto placeHolder="HOME" path="/home" />
         <NavButton receive={RECEIVE_TRUE} placeHolder="RECEIVE"/>
         <NavButton receive={RECEIVE_FALSE} placeHolder="SEND"/>
         <ViewHistory/>
        </div>
      </div>

    </div>
  )
}

export default SideBar