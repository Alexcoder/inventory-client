import React from "react";
import { useNavigate,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List as MUIList,ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide  } from "@mui/material";
import moment from 'moment'
import { Delete, MoneyOff } from '@mui/icons-material';
import { deletePost, } from "../../state/action/posts";
import { useGlobalContext } from "../../state/context";
import {Hero} from '../index';

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

 if(Loading){
  return "Loading"
 }

 const deleteItem = ()=>{
  dispatch(deletePost(deleteId));
  setBin(false)
 }


  return (

<MUIList dense={false} 
sx={{maxHeight:"200px", 
    overflow:"auto", 
    width:{xs:"26rem", sm:"26rem", md:"80rem"},
    marginTop:{xs:"0.3rem", sm:"0.3rem", md:"2rem"},
    background: "white" 
  }}
    >
{ Loading ? "Loading..." :
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
        <IconButton edge="end" aria-label="delete" onClick={() => { setBin(true); setDeleteId(p._id) }}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Slide>
)))}
{bin && <Hero onClickDelete={deleteItem} /> } 
</MUIList>

  );
};

export default ListSingle;
