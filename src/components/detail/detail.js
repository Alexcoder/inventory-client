import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { Paper, List as MUIList,ListItem, 
  ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide , IconButton } from "@mui/material";
import { Delete, MoneyOff } from '@mui/icons-material';
import { useNavigate,  } from "react-router-dom";
import { getHistoryById, deleteHistory, } from '../../state/action/history';
import { updateDashboard } from '../../state/action/dashboard';
import { useGlobalContext } from '../../state/context';
import {MdOutlineVisibility} from 'react-icons/md';
import {Hero, } from "../index";
import { BIN_OPEN, BIN_CLOSE, DELETE_ID, } from '../../state/constants';
import Pagination from "../Pagination";

import './detail.css';

const Detail = () => { 
  const {  bin, deleteId, query, creator}= useGlobalContext();
  // HandleTotal,
  const {historyById, allHistory} = useSelector((state)=> state.history)
  const [currentPage, setCurrentPage]= useState(1)

  const id = query.get("id");
  const category = query.get("category");
  // const {category}  = useParams();
  // const id = useLocation().state.id ;
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const RecommendedPosts = allHistory?.filter((p)=>id? p._id !==id & p.category=== category : null )
  

  const deleteItem = ()=>{
    dispatch(deleteHistory(deleteId));
    dispatch(updateDashboard(deleteId));
    dispatch({type: BIN_CLOSE})
   }
  
  useEffect(()=>{
    dispatch(getHistoryById(id, creator))
  },[id, creator, dispatch])
  // console.log({"id": id})
  // console.log({"historyById": historyById})

  const Money =(num)=>{
    const moneyFormat =`${Intl.NumberFormat().format(num)}`
    return moneyFormat
    }

    const postsPerPage=10;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const slicedRecommendedPosts = RecommendedPosts?.slice(indexOfFirstPost, indexOfLastPost).sort((a,b)=>a.createdAt - b.createdAt);
  
    const goToPage = (page) => setCurrentPage(page)

  
  return (
    <section id="detailContainer">
        <Paper elevation={5} 
        sx={{ 
           padding: "2rem", 
           height: "fit-content",
           }} >
        <div  style={{textAlign: "start", }}> 
          <h2 style={{textAlign: "center"}}>{historyById?.type==="incomming"? <span style={{color:"blue"}}>RECEIVED</span>: <span style={{color:"red"}}>SENT</span>}</h2>
          <div><span style={{fontWeight:"700"}}>By:  </span> {historyById?.user}</div>
          <div style={{textTransform:"capitalize"}}><span style={{fontWeight:"700"}}>Item:  </span>{historyById?.category}</div>
          <div><span style={{fontWeight:"700"}}>Price:  </span>${Money(historyById?.price)}.00</div>
          <div><span style={{color: historyById?.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Quantity:  </span>{historyById?.quantity}</div>
          <div><span style={{color: historyById?.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Amount:  </span> ${Money(historyById?.amount)}.00</div>
          <div><span style={{fontWeight:"700"}}> Location: </span>{historyById?.location}</div>
          <div><span style={{fontWeight:"700"}}>Date:  </span>{moment(historyById?.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
        {/* <h3>{HandleTotal(historyById?.type, historyById?.category)}</h3> */}
        <p>
        <button className="backButton"
         onClick={()=> navigate('/home')}>Back</button>
        </p>
        </Paper>


   <div className="recommendedRecord">
      <h1 style={{textAlign:"center", marginTop:""}}>SIMILAR RECORD</h1>
        <MUIList dense={false} 
         sx={{ 
           border: "1px solid lightgray",
           borderRadius: "0.5rem",
           height: "fit-content",
           width: "100%",
           overflow:"auto", 
          //  background: !RecommendedPosts[0] ? "transparent" : "white",    
           }} >
         { 
          !RecommendedPosts[0] ? "NO SIMILAR RECORD" :
            slicedRecommendedPosts?.map((p) => (
             <Slide direction="down" in mountOnEnter unmountOnExit key={p._id} 
               onClick={() => {navigate(`/home/find?id=${p._id}&category=${p.category}` )}}>
               <ListItem>
                 <ListItemAvatar>
                   <Avatar sx={{backgroundColor: p.type==="incomming"? "blue" : "red" }}>
                    <MoneyOff />
                   </Avatar>
                 </ListItemAvatar>
                <ListItemText primary={`${p.category}-${p.quantity}`} secondary={`$${p.amount} - ${moment(p.date).format('MM Do YYYY')}`} />
               <ListItemSecondaryAction>
                 <IconButton edge="end" aria-label="delete" 
                  //  onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})} }>
                  onClick={() => {navigate(`/home/find?id=${p._id}&category=${p.category}` )}}>
                   <MdOutlineVisibility />
                 </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={()=> {dispatch({type: BIN_OPEN}); dispatch({type: DELETE_ID, payload: p._id})}}>
                <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
           </Slide>
         ))
         }
       {bin && <Hero onClickDelete={deleteItem} /> } 
       </MUIList>
       <div style={{padding:"1rem"}}>
         <Pagination postsPerPage={postsPerPage} totalPosts={RecommendedPosts.length} goToPage={goToPage}/>
       </div>
  </div>

</section>
  )
}

export default Detail;