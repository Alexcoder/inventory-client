import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useGlobalContext} from '../../state/context';
import "./navHero.css";


const NavHero = ({onClick1, onClick2, onClick3, onClick4,}) => { 
  const {setOpen} = useGlobalContext();


  return (
    <div className="navHeroContainer" onClick={()=> {setOpen(false)}}>
      <div className="container">
        <div>
          <button 
          onClick={()=> {setOpen(false)}}
          style={{float:"right",width:"2rem"}}><CloseIcon/></button>
        </div>
        <button onClick={onClick1} style={{marginTop:"0.5rem", height:"4rem"}}>CREATE TRANSACTION</button>
      </div>
    </div>
  )
}

export default NavHero;
