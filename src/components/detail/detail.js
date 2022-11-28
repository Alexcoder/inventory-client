import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { CircularProgress, Paper, List as MUIList,ListItem, 
  ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide , IconButton } from "@mui/material";
import { Delete, MoneyOff } from '@mui/icons-material';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPost,deletePost, } from '../../state/action/posts';
import { useGlobalContext } from '../../state/context';
import {MdOutlineVisibility} from 'react-icons/md';
import {Hero} from "../index";
import './detail.css';

const Detail = () => { 
  const { HandleTotal, filteredByUser, setUpdate,
        setBin, bin, deleteId, setDeleteId}= useGlobalContext();

  const  {category}  = useParams();
  const id = useLocation().state.id ;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {post, Loading} = useSelector((state)=> state.posts)

  const RecommendedPosts = filteredByUser.filter((p)=>id? p._id !==id & p.category=== category : null )   

  const deleteItem = ()=>{
    dispatch(deletePost(deleteId));
    setBin(false)
   }
  
  useEffect(()=>{
    dispatch(getPost(id))
  },[id, dispatch])

  const Money =(num)=>{
    const moneyFormat =`${Intl.NumberFormat().format(num)}`
    return moneyFormat
    }
    
    
  
  return (
    <section id="detailContainer">
        <Paper key={post._id} elevation={5} 
        sx={{ 
           margin: {md:"0rem 4rem 0rem 5rem", sm:"1rem 0rem 0rem 0rem", xs:"1rem 0rem 0rem 0.3rem"},
           padding: "2rem", 
           width:{md:"20rem", sm: "91%", xs:"82.5%"} ,
           height:{md:"28rem"},
           }} >
        <div  style={{textAlign: "start", gap: "1rem"}}> 
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

<div className='listContainer'>
  <h1 style={{textAlign:"center"}}>SIMILAR RECORD</h1>
<MUIList dense={false} 
sx={{ 
  border: "2px solid lightgray",
  borderRadius: "0.5rem",
  maxHeight: {md:"28rem", sm:"20rem", xs:"30rem"}, 
  width:{md: "30rem", sm:"95vw", xs:"90vw"},
  marginBottom:{sm:"0.5rem", xs:"1rem"} ,
  marginLeft:{sm:"0.2rem", xs:"0rem"},
  overflow:"auto", 
  background: !RecommendedPosts[0] ? "transparent" : "white",    }} >
{ 
 !RecommendedPosts[0] ?
  <div 
    className="noSimilarRecord"
    onClick={()=> setUpdate(true)}>
        ADD TRANSACTION
   </div>  :
 RecommendedPosts.map((p) => (
  <Slide direction="down" in mountOnEnter unmountOnExit key={p._id} 
     onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})}}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{backgroundColor: p.type==="incomming"? "blue" : "red" }}>
          <MoneyOff />
        </Avatar
        >
      </ListItemAvatar>
      <ListItemText primary={`${p.category}-${p.quantity}`} secondary={`$${p.amount} - ${moment(p.date).format('MM Do YYYY, h:mm:ss a')}`} />
      <ListItemSecondaryAction
      >
      <IconButton edge="end" aria-label="delete" 
       onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})} }>
          <MdOutlineVisibility />
      </IconButton
      >
      <IconButton edge="end" aria-label="delete" onClick={()=> {setBin(true); setDeleteId(p._id)}}>
          <Delete />
      </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Slide>
))}
{bin && <Hero onClickDelete={deleteItem} /> } 
</MUIList>
</div>
  }

</section>
  )
}

export default Detail