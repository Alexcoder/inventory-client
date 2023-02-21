
import { useGlobalContext } from "../state/context";


const Pagination =({postsPerPage, totalPosts, goToPage})=>{
    const {selected, setSelected,} = useGlobalContext();

    const pageNumbers = [];

    const totalPages = Math.ceil(totalPosts/postsPerPage)

    for(let i=1; i<= totalPages; i++){
        pageNumbers.push(i);
    }

    const handleSelected = (clicked) => setSelected(clicked)

    const handleBackgroundColor = (clicked) =>{
      if(selected===Number(clicked))    return "gray";
     else return ""
    }


    return(
        <div style={{display:"flex", gap:"0.1rem",}}>
            {
                pageNumbers.map((number, i)=>
                  <div  key={i}>
                     <div 
                        onClick={()=> {goToPage(number); handleSelected(number); }} 
                        style={{
                            border:"0.4px solid gray", 
                            padding:"0.3rem 0.8rem", 
                            color:selected===number? "white":"black", 
                            fontSize:"1.3rem", 
                            background: handleBackgroundColor(number),
                            }}>
                        {number}
                    </div>
                  </div>
                )
            }
        </div>

    )
}
export default Pagination;