
import { useGlobalContext } from "../state/context";


const Pagination =({postsPerPage, totalPosts, goToPage})=>{
    const {selected, setSelected,} = useGlobalContext();

    const pageNumbers = [];

    const totalPages = Math.ceil(totalPosts/postsPerPage)

    for(let i=1; i<= totalPages; i++){
        pageNumbers.push(i);
    }


    return(
        <div style={{display:"flex", gap:"0.1rem",}}>
            {
                pageNumbers.map((number, i)=>
                  <div  key={i}>
                     <div onClick={()=> {goToPage(number); setSelected(i); }} style={{border:"0.4px solid gray", padding:"0.3rem 0.8rem", color:selected===i? "white":"black", fontSize:"1.3rem", background: selected===i ? "blue": ""}}>
                        {number}
                    </div>
                  </div>
                )
            }
        </div>

    )
}
export default Pagination;