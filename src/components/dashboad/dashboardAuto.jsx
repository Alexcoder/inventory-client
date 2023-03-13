import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
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
  const navigate= useNavigate();
  const {allDashboard} = useSelector((state)=> state.dashboard)
  const {user, query, creator,} = useGlobalContext();

  const page = query.get('page') || 1;
  const category = query.get('category') || "all";

  const [selected, setSelected] = useState(page-1)
  const postsPerPage = 8;
  const startIndex =  (Number(page)-1) * Number(postsPerPage);
  const endIndex = Number(page) * Number(postsPerPage);
  const totalPages = Math.ceil(allDashboard?.length/postsPerPage)
  const pageNumbers=[];
  for(let i=1; i<=totalPages ;i++) {
    pageNumbers.push(i)
  };
  const gotoPage=(number)=> navigate(`/home?page=${number}`);


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
        <div style={{marginTop:"-1.5rem", textAlign:"center", justifyContent:"center", background:"", display:"flex", gap:"0.2rem"  }}>
          {
            pageNumbers.map((pageNumber,i) => 
              <div key={i} >     
                <div
                 onClick={()=> {setSelected(i) ; gotoPage(pageNumber)}}
                 style={{color:selected===i ? "black": "gray",background: selected===i && "lightgray" ,border:"0.5px solid gray", padding:"0rem 0.5rem", borderRadius:"100%" }}>{pageNumber}</div> 
              </div>
            )
         }
        </div>        
    
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