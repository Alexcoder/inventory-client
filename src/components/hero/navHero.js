import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useGlobalContext} from '../../state/context';


const NavHero = ({onClick1, onClick2, onClick3, onClick4,}) => { 
  const {setOpen} = useGlobalContext();


  return (
    <div >
      <div style={{width: "17rem", top:"0", margin:"0rem 0rem 0rem 0rem",left:"0", position: "fixed",
               border:"1px solid gray", height:"100vh", background:"linear-gradient(blue, seagreen)",
                zIndex:"100000", display:"grid", gridTemplateColumns:"repeat(1, 1fr)" }}>
        <div>
          <button 
          onClick={()=> {setOpen(false)}}
          style={{float:"right",width:"2rem"}}><CloseIcon/></button>
        </div>
        <button onClick={onClick1} style={{marginTop:"0.5rem", height:"4rem"}}>CREATE TRANSACTION</button>
        <hr/>
        <button onClick={onClick2} style={{ height:"4rem"}}>VIEW USER</button>
        <hr/>
        <button onClick={onClick3} style={{ height:"4rem"}}>OTHER PAGE</button>
        <hr/>
        <button onClick={onClick4} style={{ height:"4rem"}}>LAST PAGE</button>
        <hr/>
      </div>
    </div>
  )
}

export default NavHero;
