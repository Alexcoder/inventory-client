import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid, ButtonBase, Button, Paper, List as MUIList,ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide  } from "@mui/material";
import moment from 'moment'
import { Delete, MoneyOff } from '@mui/icons-material';
import { deletePost, } from "../../state/action/posts";
import { useGlobalContext } from "../../state/context";

const ListSingle = () => {
  const { creator, filteredByUser,search} = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SearchResult = filteredByUser.filter((p)=>
  p.category.startsWith(search) || p.category.toLowerCase().startsWith(search)|| 
  p.category.includes(search) || p.category.toLowerCase().includes(search) ||
  p.type.startsWith(search) || p.type.toLowerCase().startsWith(search) ||
  p.type.includes(search) || p.type.toLowerCase().includes(search) ||
  p.user.startsWith(search) || p.user.toLowerCase().startsWith(search) ||
  p.user.includes(search) || p.user.toLowerCase().includes(search) 
  )


 const handleMap=()=>{
  if(search){
    return SearchResult
  }
  else{
    return filteredByUser
  } 
 } 

  return (

<MUIList dense={false} sx={{maxHeight:"50px", overflow:"auto", width:"60rem"}} >
{handleMap().map((p) => (
  <Slide direction="down" in mountOnEnter unmountOnExit key={p._id} 
     onClick={() => {navigate(`/${p.category}`, {state:{id: p._id}})}}>
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{backgroundColor: p.type==="incomming"? "blue" : "red" }}>
          <MoneyOff />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={p.category} secondary={`${p.type} - Quantity:${p.quantity} - $${p.amount} - ${moment(p.date).format('MMMM Do YYYY, h:mm:ss a')}`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() =>  dispatch(deletePost(p._id))}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Slide>
))}
</MUIList>

  );
};

export default ListSingle;
