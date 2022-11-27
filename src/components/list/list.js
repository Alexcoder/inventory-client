import React from "react";
import { useNavigate,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List as MUIList,ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide  } from "@mui/material";
import moment from 'moment'
import { Delete, MoneyOff } from '@mui/icons-material';
import { deletePost, } from "../../state/action/posts";
import { useGlobalContext } from "../../state/context";
import {MdOutlineVisibility} from 'react-icons/md';
import {Hero} from '../index';
import './list.css';

const ListSingle = () => {
  const {Loading} = useSelector((state)=> state.posts);
  const {filteredByUser,search, setBin, bin, deleteId, setDeleteId} = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SearchResult = filteredByUser.filter((p)=>
  p.category.includes(search) || p.category.toLowerCase().includes(search)||
  p.type.includes(search) || p.type.toUpperCase().includes(search) ||
  p.user.includes(search) || p.user.toUpperCase().includes(search) 
  )


 const handleMap=()=>{
  if(search){
    return SearchResult
  }
  else{
    return filteredByUser
  } 
 } 

 const deleteItem = ()=>{
  dispatch(deletePost(deleteId));
  setBin(false)
 }


  return (
    <div>
    {
    Loading ? "Loading..." : !handleMap()[0]?
    <div
    onClick={()=> navigate(`/update`)}
    className="addTransactionToContinue">
     ADD TRANSACTION TO CONTINUE
    </div> :


     <MUIList dense={false} 
     sx={{maxHeight:"450px", 
         overflow:"auto", 
         width:{sm:"100%", xs:"100%", md: "50%"},
         marginTop:{xs:"0.3rem", sm:"0.3rem", md:"2rem"},
         background: "white",
         boxShadow:"1px 1px 2rem -0.2rem gray" 
       }}
    >
     {
     (
     handleMap().map((p) => (
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
             <IconButton edge="end" aria-label="delete" onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})}}>
               <MdOutlineVisibility />
             </IconButton>
             <IconButton edge="end" aria-label="delete" onClick={() => { setBin(true); setDeleteId(p._id) }}>
               <Delete />
             </IconButton>
           </ListItemSecondaryAction>
         </ListItem>
       </Slide>
     )))}
     {bin && <Hero onClickDelete={deleteItem} /> } 
     </MUIList>
    }
</div>
       );
     };

export default ListSingle;
