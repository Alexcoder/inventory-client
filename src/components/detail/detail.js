import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { CircularProgress, Paper, List as MUIList,ListItem, 
  ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide , IconButton } from "@mui/material";
import { Delete, MoneyOff } from '@mui/icons-material';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPost,deletePost, } from '../../state/action/posts';
import { useGlobalContext } from '../../state/context';
import {MdOutlineVisibility} from 'react-icons/md';
import {Hero, } from "../index";
import { BIN_OPEN, BIN_CLOSE, DELETE_ID, } from '../../state/constants';
import Pagination from "../Pagination";

import './detail.css';

const Detail = () => { 
  const { HandleTotal, bin, deleteId, filteredByUser}= useGlobalContext();
  // , filteredByUser
  const [currentPage, setCurrentPage]= useState(1)

  const  {category}  = useParams();
  const id = useLocation().state.id ;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {post, Loading, } = useSelector((state)=> state.posts)
  // allUnSlicedPosts

  // const RecommendedPosts = allUnSlicedPosts.filter((p)=>id? p._id !==id & p.category=== category : null )
  const RecommendedPosts = filteredByUser.filter((p)=>id? p._id !==id & p.category=== category : null )
  

  const deleteItem = ()=>{
    dispatch(deletePost(deleteId));
    dispatch({type: BIN_CLOSE})
   }
  
  useEffect(()=>{
    dispatch(getPost(id))
  },[id, dispatch])

  const Money =(num)=>{
    const moneyFormat =`${Intl.NumberFormat().format(num)}`
    return moneyFormat
    }

    const postsPerPage=3;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const slicedRecommendedPosts = RecommendedPosts.slice(indexOfFirstPost, indexOfLastPost).sort((a,b)=>a.createdAt - b.createdAt);
  
    const goToPage = (page) => setCurrentPage(page)

  
  return (
    <section id="detailContainer">
        <Paper key={post._id} elevation={5} 
        sx={{ 
           padding: "2rem", 
           height: "fit-content",
           }} >
        <div  style={{textAlign: "start", }}> 
          <h2 style={{textAlign: "center"}}>{post.type==="incomming"? <span style={{color:"blue"}}>RECEIVED</span>: <span style={{color:"red"}}>SENT</span>}</h2>
          <div><span style={{fontWeight:"700"}}>By:  </span> {post.user}</div>
          <div style={{textTransform:"capitalize"}}><span style={{fontWeight:"700"}}>Item:  </span>{post.category}</div>
          <div><span style={{fontWeight:"700"}}>Price:  </span>${Money(post.price)}.00</div>
          <div><span style={{color: post.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Quantity:  </span>{post.quantity}</div>
          <div><span style={{color: post.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Amount:  </span> ${Money(post.amount)}.00</div>
          <div><span style={{fontWeight:"700"}}> Location: </span>{post.location}</div>
          <div><span style={{fontWeight:"700"}}>Date:  </span>{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
        <h3>{HandleTotal(post.type, post.category)}</h3>
        <p>
        <button className="backButton"
         onClick={()=> navigate('/')}>Back</button>
        </p>
        </Paper>

 { 
 Loading ? <div style={{textAlign: "center", marginTop:"1rem"}}><CircularProgress/></div> :

<div className="recommendedRecord">
  <h1 style={{textAlign:"center", marginTop:""}}>SIMILAR RECORD</h1>
<MUIList dense={false} 
sx={{ 
  border: "1px solid lightgray",
  borderRadius: "0.5rem",
  height: "fit-content",
  width: "100%",
  overflow:"auto", 
  background: !RecommendedPosts[0] ? "transparent" : "white",    }} >
{ 
 !RecommendedPosts[0] ? "NO SIMILAR RECORD" :
 slicedRecommendedPosts.map((p) => (
  <Slide direction="down" in mountOnEnter unmountOnExit key={p._id} 
     onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})}}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{backgroundColor: p.type==="incomming"? "blue" : "red" }}>
          <MoneyOff />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${p.category}-${p.quantity}`} secondary={`$${p.amount} - ${moment(p.date).format('MM Do YYYY')}`} />
      <ListItemSecondaryAction
      >
      <IconButton edge="end" aria-label="delete" 
       onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})} }>
          <MdOutlineVisibility />
      </IconButton
      >
      <IconButton edge="end" aria-label="delete" onClick={()=> {dispatch({type: BIN_OPEN}); dispatch({type: DELETE_ID, payload: p._id})}}>
          <Delete />
      </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Slide>
))}
{bin && <Hero onClickDelete={deleteItem} /> } 
</MUIList>
  <div style={{padding:"1rem"}}>
    <Pagination postsPerPage={postsPerPage} totalPosts={RecommendedPosts.length} goToPage={goToPage}/>
  </div>
</div>
  }
</section>
  )
}

export default Detail;