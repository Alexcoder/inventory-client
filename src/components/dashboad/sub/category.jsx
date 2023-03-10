import { useSelector} from 'react-redux';

import "../dashboard.css";

const Category = () =>{
    const { allDashboard } = useSelector((state)=> state.dashboard)

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