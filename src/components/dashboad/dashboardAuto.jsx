import {useEffect, } from "react";
import { useDispatch } from 'react-redux';
import Summary from "./summary";
import { useGlobalContext } from "../../state/context";
import {getAllDashboard} from '../../state/action/dashboard'
import Heading from "./sub/heading";
import Category from "./sub/category";
import Values from "./sub/values";
// import AddIcon from "@mui/icons-material/Add"
// import RemoveIcon from "@mui/icons-material/Remove"
import { UPDATE_TRUE, RECEIVE_TRUE, } from '../../state/constants';
// RECEIVE_FALSE 
import './dashboard.css';


const DashboardAuto = () => { 
  const dispatch = useDispatch();
  const {user, query, creator, setCurrentPage} = useGlobalContext();

  const page = query.get('page') || 1;
  const category = query.get('category') || "all";


  const addTransaction=()=>{
    dispatch({type: RECEIVE_TRUE})
    dispatch({type: UPDATE_TRUE})
  }

  
  useEffect(()=> {
    if(page) setCurrentPage(page);
     dispatch(getAllDashboard(creator));
  },[dispatch, page, creator, setCurrentPage, category, ])


  return (
    <main className="main-dash">
       <Summary/>
      <section className="main-section-cont">
          <Category/>
        <section className="dash-heading-values-cont" >
          <Heading/>
          <Values/>
        </section> 
      </section>
        <div style={{marginTop:"-2rem"}}>PAGINATION</div>        

      {
      user &&
      <div className="dash-button-cont">
        <button 
          className="dash-button"
          onClick={()=> addTransaction()}>  Add Transaction
         </button>
      </div>
      }
    </main>
  )
}

export default DashboardAuto;