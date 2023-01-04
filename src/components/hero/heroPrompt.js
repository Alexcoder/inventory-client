import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useGlobalContext} from '../../state/context';
import { deletePost, } from "../../state/action/posts";

import {logOut} from '../../state/action/user'
import { BIN_CLOSE, LOGOUT_FALSE, } from '../../state/constants';
import './heroPrompt.css';

const HeroPrompt =()=>{ 
    const {bin, logout, deleteId} = useGlobalContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteItem = () => {
        dispatch(deletePost(deleteId));
        dispatch({type: BIN_CLOSE})
      }
    
    
    return(
        <div id="heroContainer">
         <div>
            <h3>{bin ? "Are You Sure You Want To Delete?" : logout? "Are You Sure You Want To Logout?": null}</h3>
             <div className="buttonContainer">
              <button className="button bColor1" 
                onClick={()=> {
                dispatch({type: BIN_CLOSE }); 
                dispatch({type: LOGOUT_FALSE })}}>
                    No
              </button>
              {
               logout ?
               <button className="button bColor2"
                onClick={()=>{
                dispatch(logOut(navigate)) ; 
                dispatch({type: LOGOUT_FALSE })}}>
                    Yes
                </button>:
               <button className="button bColor2"
                onClick={deleteItem}>
                    Delete
                </button>
              }
             </div>
         </div> 
        </div>
    )
}

export default HeroPrompt;