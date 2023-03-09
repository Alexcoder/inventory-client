import { useSelector} from 'react-redux';

import "../dashboard.css";

const Category = () =>{
    const {allDashboard } = useSelector((state)=> state.dashboard)

    return(
        <div style={{background: "white"}} >
        { 
            allDashboard?.map((list)=>(
              <div  key={list._id} style={{display:"flex", width:"100%", flexDirection:"column", margin:"0.1rem 0rem 1.3rem 0rem",color:"black"}}>
                  <div className="dash-value-data1" >{list.category}</div>
              </div>
            ))}
            {/* <hr style={{border:"0.5px solid white"}}/> */}
          </div>  

    )
}

export default Category;