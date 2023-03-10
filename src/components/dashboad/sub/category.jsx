import {useEffect} from "react"
import {getAllDashboard} from '../../../state/action/dashboard';
import {useDispatch, useSelector} from 'react-redux';
import { useGlobalContext } from '../../../state/context';

import "../dashboard.css";

const Category = () =>{
    const { creator,  }= useGlobalContext();
    const { allDashboard , Loading} = useSelector((state)=> state.dashboard);
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(getAllDashboard(creator));
   },[dispatch, creator, ])
 
 

    return(
        <div style={{background: "white"}} >
          <div 
             style={{
              background:"blue", 
              color:"white",
               padding:"0.5rem 0.2rem", 
               minWidth:"8rem"
               }}>    ITEM
           </div>
          { 
          Loading ? "fetching" :
            allDashboard?.map((list)=>(
              <div  key={list._id} 
                 style={{
                    display:"flex", 
                    flexDirection:"column",
                    color:"black", 
                    minWidth:"8rem", 
                    padding:"0.5rem 0.2rem"
                    }}>
                  <div >{list.category}</div>
              </div>
            ))}
            {/* <hr style={{border:"0.5px solid white"}}/> */}
          </div>  

    )
}

export default Category;