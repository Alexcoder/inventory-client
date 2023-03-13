import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../state/context";
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
// import '../dashboard.css';



const Pagination = ({totalPages })=>{
    const navigate= useNavigate();
    const { query, } = useGlobalContext();
    const page = query.get('page') || 1;
    const [selected, setSelected] = useState(Number(page)-1)


    const pageNumbers=[];
    for(let i=1; i<=totalPages ; i++) {
      pageNumbers.push(i)
    };
     
    const gotoPage=(number)=> navigate(`/home?page=${number}`);

    const handlePage=(direction)=>{
        if(direction==="next"){
          navigate(`/home?page=${page<totalPages? (Number(page)+1): totalPages}`);
          setSelected(page<totalPages? Number(page) : Number(page)-1 ) 
        }
        else if(direction==="prev"){
          navigate(`/home?page=${page>1? (Number(page)-1): 1}`) ;
          setSelected(page>1? Number(page)-2 : Number(page)-1)
        }
       }
     

    return(
        <div style={{marginTop:"-1.5rem", textAlign:"center", color:"gray", justifyContent:"center", alignItems:"center", background:"", display:"flex", gap:"0.5rem"  }}>
           <div>page</div>
           <div onClick={()=> handlePage("prev")}><RemoveIcon/></div>
       { 
         pageNumbers.map((pageNumber,i) => 
           <div key={i} >     
             <div
              onClick={()=> {setSelected(i) ; gotoPage(pageNumber)}}
              style={{color:selected===i ? "black": "gray",background: selected===i && "lightgray" ,border:"0.5px solid gray", padding:"0.2rem 0.8rem", borderRadius:"100%" }}>{pageNumber}</div> 
           </div>
         )
      }
       <div onClick={()=> handlePage("next")}><AddIcon/></div>
     </div> 

    )
}

export default Pagination;