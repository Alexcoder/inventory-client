import {useEffect} from "react"
import {getAllDashboard} from '../../../state/action/dashboard';
import {useDispatch, useSelector} from 'react-redux';
import { useGlobalContext } from '../../../state/context';

import "../dashboard.css";

const Category = () =>{
    const { creator,  }= useGlobalContext();
    const { allDashboard ,} = useSelector((state)=> state.dashboard);
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch(getAllDashboard(creator));
   },[dispatch, creator, ])
 
 

    return(
        <div style={{background: "lightgray", borderRadius: "0.3rem 0rem 0rem 0.3rem" }} >
          <div 
             style={{
              background:"blue", 
              color:"white",
               padding:"0.5rem 0.2rem", 
               minWidth:"8rem",
               borderRadius: "0.3rem 0rem 0rem 0.3rem"
               }}>    ITEM
           </div>
          { 
            allDashboard?.map((list)=>(
              <div  key={list._id}>
              <div 
                 style={{
                    display:"flex", 
                    flexDirection:"column",
                    color:"black", 
                    minWidth:"8rem", 
                    padding:"0.5rem 0.2rem",
                    }}>
                  <div>{list.category}</div>
              </div>
                {/* <hr style={{border:"0.2px solid lightgray"}}/> */}
              </div>
            ))}

          </div>  

    )
}

export default Category;