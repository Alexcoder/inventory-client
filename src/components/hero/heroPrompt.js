import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useGlobalContext} from '../../state/context';
import {logOut} from '../../state/action/user'
import './heroPrompt.css';

const HeroPrompt=({onClickDelete})=>{ 
    const {bin, setBin, setLogout, logout, } = useGlobalContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div id="heroContainer">
         <div>
            <h3>{bin ? "Are You Sure You Want To Delete?" : logout? "Are You Sure You Want To Logout?": null}</h3>
             <div className="buttonContainer">
              <button className="button bColor1" onClick={()=> {setBin(false); setLogout(false)}}>No</button>
              {
               logout ?
               <button className="button bColor2" onClick={()=>{dispatch(logOut(navigate)) ; setLogout(false) }}>Yes</button>:
               <button className="button bColor2" onClick={onClickDelete}>Bin Yes</button>
              }
             </div>
         </div> 
        </div>
    )
}

export default HeroPrompt;