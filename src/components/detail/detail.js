import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { CircularProgress, Paper, List as MUIList,ListItem, 
  ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Slide  } from "@mui/material";
import { Delete, MoneyOff } from '@mui/icons-material';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPost } from '../../state/action/posts';
import { useGlobalContext } from '../../state/context';
import {NavHero} from "../index";

import './detail.css';

const Detail = () => { 
  const { HandleTotal, filteredByUser, open}= useGlobalContext();

  const  {category}  = useParams();
  const id = useLocation().state.id ;
  const dispatch = useDispatch();


  const navigate = useNavigate()
  const {post} = useSelector((state)=> state.posts)


  const RecommendedPosts = filteredByUser.filter((p)=>id? p._id !==id & p.category=== category : null )   

 
  useEffect(()=>{
    dispatch(getPost(id))
  },[id, dispatch])

  
  return (
    <div id="detailContainer">
        <Paper key={post._id} elevation={5} 
        sx={{margin: {md:"0rem 3rem 0rem 5rem", sm:"0rem 3rem 0rem 2rem", xs:"0rem 3rem 0rem 0.3rem"},
             padding: "2rem", width:{md:"20rem", sm: "18rem", xs:"18rem"} }} >
        <div  style={{textAlign: "start", gap: "1rem"}}> 
          <h2 style={{textAlign: "center"}}>{post.type==="incomming"? <span style={{color:"blue"}}>RECEIVED</span>: <span style={{color:"red"}}>SENT</span>}</h2>
          <div><span style={{fontWeight:"700"}}>By:  </span> {post.user}</div>
          <div style={{textTransform:"capitalize"}}><span style={{fontWeight:"700"}}>Item:  </span>{post.category}</div>
          <div><span style={{fontWeight:"700"}}>Price:  </span>${post.price}.00</div>
          <div><span style={{color: post.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Quantity:  </span>{post.quantity}</div>
          <div><span style={{color: post.type==="incomming"? "blue" : "red",fontWeight:"700"}}>Amount:  </span>${post.amount}.00</div>
          <div><span style={{fontWeight:"700"}}> Location: </span>{post.location}</div>
          <div><span style={{fontWeight:"700"}}>Date:  </span>{moment(post.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
        <h3>{HandleTotal(post.type, post.category)}</h3>
        <p>
          <button 
          style={{width: "18rem", padding:"0.7rem", fontSize:"1.4rem",
                 borderRadius:"0.2rem", border: "1px solid inherit", color:"white",
                 background: "linear-gradient(to bottom right, brown , blue)"}} onClick={()=> navigate('/')}>Back</button>
        </p>
        </Paper>


<MUIList dense={false} sx={{maxHeight:"30rem", overflow:"auto", width:"30rem"}} >
{!RecommendedPosts? <CircularProgress/> :
RecommendedPosts.map((p) => (
  <Slide direction="down" in mountOnEnter unmountOnExit key={p._id} 
     onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})}}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{backgroundColor: p.type==="incomming"? "blue" : "red" }}>
          <MoneyOff />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${p.category}-${p.quantity}`} secondary={`$${p.amount} - ${moment(p.date).format('MM Do YYYY, h:mm:ss a')}`} />
      <ListItemSecondaryAction>
        {/* <IconButton edge="end" aria-label="delete" onClick={() =>  dispatch(deletePost(p._id))}> */}
          <Delete />
        {/* </IconButton> */}
      </ListItemSecondaryAction>
    </ListItem>
  </Slide>
))}
</MUIList>


{/* <Grid container textAlign="center" gap={2} mt={3}  sx={{display:"grid", gridTemplateColumns:{md: "repeat(6, 1fr)", sm: "1fr 1fr", xs: "1fr"}}}>
     {!RecommendedPosts? <CircularProgress/> :
     RecommendedPosts.map((p)=>
    <Paper elevation={5} p={3} key={p._id} >
     <div>
       <ButtonBase sx={{display:"block", textAlign:"start", }} 
         onClick={()=>{ navigate(`/${p.category}`, {state:{id:p._id}})  }}>
          <Grid item sx={{textAlign:"start", paddingLeft:"1rem"}}>
           <h4 style={{textTransform: "uppercase"}}> {p.user}</h4>
         </Grid>
         <Grid item sx={{textAlign:"start", paddingLeft:"1rem"}}>
          <h4 style={{textTransform: "uppercase"}}> {p.category}</h4>
        </Grid>
        <Grid item sx={{textAlign:"start", paddingLeft:"1rem", color: p.type==="incomming"? "blue" : "red"}}>
         <h4 >QUANTITY: <span style={{color: p.type==="incomming"? "blue" : "red"}}>{p.quantity}</span></h4>
       </Grid>
       <Grid item sx={{textAlign:"start", paddingLeft:"1rem",}}>
        <h4 >UNIT PRICE: NGN {p.price}.0</h4>
       </Grid>
       <Grid item sx={{textAlign:"start", paddingLeft:"1rem", color: p.type==="incomming"? "blue" : "red"}}>
        <h4 >AMOUNT:<span style={{color: p.type==="incomming"? "blue" : "red"}}>NGN {p.amount}.0</span></h4>
       </Grid>
       <Grid item sx={{textAlign:"start", paddingLeft:"1rem"}}>
        <h4 >{moment(p.date).format('MMMM Do YYYY h:mm:ss a')}</h4>
       </Grid>
     </ButtonBase>
   </div>
   </Paper>
   
 )}
</Grid>
 */}
            {
            open && <NavHero/>
           } 

</div>
  )
}

export default Detail