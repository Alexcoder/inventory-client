import React, {useState} from "react";

const BookSearch = () => {
  const initialState ={
    author: "",
    country: "",
    language: "",
    title: "",
    year: ""
  }
  
  const [search, setSearch]= useState(initialState)
   const book =[
     {
     author: "Chinua Achebe",
     country: "Nigeria",
     language: "English",
     pages: 209,
     title: "Things Fall Apart",
     year: 1958
   },
     {
      author: "Dante Alighieri",
      country: "Italy",
      language: "Italian",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315
     },
     {
      author: "Chinua Achebe",
      country: "Nigeria",
      language: "English",
      pages: 342,
      title: "Arrows Of God",
      year: 1318
     },
     {
      author: "Wole Soyinka",
      country: "Nigeria",
      language: "English",
      pages: 543,
      title: "Trials Of Brother Jero",
      year: 1985
     }
     ]

     const handleChange=(e)=>{
      setSearch({...search, [e.target.name]: e.target.value})
    }

    
  const filteredResult = (p)=>{
    if(search.year.length>3) {
      return p.year == search.year
    } else {
      return (
      (p.author.includes(search.author)|| p.author.toLowerCase().includes(search.author))
      & (p.country.startsWith(search.country)|| p.country.toLowerCase().startsWith(search.country))
      & (p.language.startsWith(search.language)|| p.language.toLowerCase().startsWith(search.language))
      & (p.title.includes(search.title)|| p.title.toLowerCase().includes(search.title))
    )}
  }
  const allSearch = book.filter(filteredResult)

// const Result =()=>{
//   if(search.author || search.country || search.language || search.title || search.year){
//     return allSearch
//   } else {
//     return book
//   }
// }

  return (
    <>
      <input 
        name="author"
        placeholder="author"
        value={search.author}
        onChange={handleChange}/>
        
      <input
        name="country"
        placeholder="country"
        value={search.country}
        onChange={handleChange}/>
      
       <input
        name="language"
        placeholder="language"
        value={search.language}
        onChange={handleChange}/>
      
    
     <input
        name="year"
        placeholder="year"
        type="Number"
        value={search.year}
        onChange={handleChange}/>
      
       <input
        name="title"
        placeholder="title"
        value={search.title}
        onChange={handleChange}/>
      
      
     <div style={{display: "flex", gap:"1rem"}}>
    {
     allSearch.map((item, i)=>
    <div key={i} style={{border: "1px solid black", width: "10rem", marginTop: "0.5rem", paddingLeft: "5px"}}>
    <div>{item.author}</div>
    <div>{item.country}</div>
    <div>{item.language}</div> 
    <div>{item.pages}</div>
    <div>{item.title}</div>
    <div>{item.year}</div>                   
  </div> 
   )
    }
   </div>
  </>
    
    
  );
};

export default BookSearch;




// import React, {useState} from "react";
// import Notification from "./Notification";

// const Confirmation = () => {
//   // TODO your code here
//   const [mode,setMode] = useState(true)
  
//   const handleClick =()=>{
//   setMode((prev)=> !prev)
//   }
  
//   return (
//   <div> 
//     {mode?
//     <Notification
//       type="message"
//       message= 
//         <div className="alert alert-info">
//         <p>Should we bake a pie?</p>
//         <button onClick={handleClick} class="btn btn-primary">Yes</button>
//         <button onClick={handleClick} class="btn btn-danger">No</button>
//         </div>
//       />
//         : null
//     }
//   </div>
    
//   );
// };

// export default Confirmation;
