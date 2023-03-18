import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { SIDEBAR_OPEN, UPDATE_TRUE,} from '../../state/constants';
import './sidebar.css';



export const NavButton = ({receive, placeHolder}) => {  
    const dispatch = useDispatch();
  return (
        <div>
          <button className="addTransaction"
           onClick={() => {
            dispatch({type: UPDATE_TRUE });
            dispatch({type: SIDEBAR_OPEN });
            dispatch({type: receive})}} >
            {placeHolder}
          </button>
         <hr />
         </div>
  )
}


export const ViewHistory = () => {
  const navigate = useNavigate();
  return (
        <div>
          <button className="addTransaction"
           onClick={() => navigate("/home/history")} >
            VIEW HISTORY
          </button>
         <hr />
         </div>
  )
}


export const Goto = ({placeHolder, path}) => {
  const navigate = useNavigate();
  return (
        <div>
          <button className="addTransaction"
           onClick={() => navigate(path)} >
            {placeHolder}
          </button>
         <hr />
         </div>
  )
}

