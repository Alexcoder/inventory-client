import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useGlobalContext} from '../../state/context';
import "./navHero.css";


const NavHero = ({onClick}) => { 
  const {setOpen} = useGlobalContext();


  return (
    <div className="navHeroContainer" onClick={()=> {setOpen(false)}}>
      <div className="container">
        <div>
          <button 
          onClick={()=> {setOpen(false)}}
          style={{float:"right",width:"2rem"}}><CloseIcon/></button>
        </div>
        <button className="heroNavButton" onClick={onClick}>ADD TRANSACTION</button>
      </div>
    </div>
  )
}

export default NavHero;
