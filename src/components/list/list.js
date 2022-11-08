import React from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { List as MUIList,ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide  } from "@mui/material";
import moment from 'moment'
import { Delete, MoneyOff } from '@mui/icons-material';
import { deletePost, } from "../../state/action/posts";
import { useGlobalContext } from "../../state/context";

const ListSingle = () => {
  const {filteredByUser,search} = useGlobalContext();
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

  return (

<MUIList dense={false} sx={{maxHeight:"200px", overflow:"auto", width:{xs:"30rem",sm:"35rem", md:"60rem"}}} >
{handleMap().map((p) => (
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
