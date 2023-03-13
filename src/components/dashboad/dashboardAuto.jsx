import {useEffect,} from "react";
import { useGlobalContext } from "../../state/context";
import {getAllDashboard} from '../../state/action/dashboard';
import {useDispatch, useSelector } from "react-redux";
import Summary from "./sub/summary";
import Heading from "./sub/heading";
import Category from "./sub/category";
import Values from "./sub/values";
import Pagination from "./sub/pagination";
import { UPDATE_TRUE, RECEIVE_TRUE, } from '../../state/constants';
// RECEIVE_FALSE 
import './dashboard.css';


const DashboardAuto = () => { 
  const dispatch = useDispatch();
  const {allDashboard} = useSelector((state)=> state.dashboard)
  const {user, query, creator,} = useGlobalContext();

  const page = query.get('page') || 1;
  const category = query.get('category') || "all";

  const postsPerPage = 8;
  const startIndex =  (Number(page)-1) * Number(postsPerPage);
  const endIndex = Number(page) * Number(postsPerPage);
  const totalPages = Math.ceil(allDashboard?.length/postsPerPage)


  const addTransaction=()=>{
    dispatch({type: RECEIVE_TRUE})
    dispatch({type: UPDATE_TRUE})
  }

  
  useEffect(()=> {
     dispatch(getAllDashboard(creator));
  },[dispatch, creator, category, ])


  return (
    <main className="main-dash">
       <Summary/>
      <section className="main-section-cont">
          <Category startIndex={startIndex} endIndex={endIndex}/>
        <section className="dash-heading-values-cont" >
          <Heading/>
          <Values  startIndex={startIndex} endIndex={endIndex}/>
        </section> 
      </section>
      {
        (user && allDashboard) && 
        <Pagination 
         totalPages={totalPages}
        />
        }    
    
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