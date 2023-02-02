import React from "react";
import { useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from "@mui/material";
import moment from 'moment'
import { Delete, MoneyOff } from '@mui/icons-material';
import { useGlobalContext } from "../../state/context";
import { MdOutlineVisibility } from 'react-icons/md';
import { BIN_OPEN, DELETE_ID, UPDATE_TRUE} from '../../state/constants';

import './list.css';

const ListSingle = () => {
  const { Loading } = useSelector((state) => state.posts);
  const { filteredByUser, search, incomming } = useGlobalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SearchResult = filteredByUser.filter((item) =>
   Object.entries(search).every(([key, value])=>
    item.category[key].includes(value) || item.category[key].toLowerCase().includes(value)||
    item.type[key].includes(value) || item.type[key].toUpperCase().includes(value) ||
    item.user[key].includes(value) || item.user[key].toUpperCase().includes(value)

  ))


  const handleMap = () => {
    if (search) {
      return SearchResult
    }
    else {
      return filteredByUser
    }
  }

  return (
    <section style={{display:"flex", justifyContent:"center", height:"100%", position:"absolute", width:"100%"}}>
      <main className="list-main-container">
      {
        Loading ? "Loading..." : !handleMap()[0] ?
          <div
            onClick={() => dispatch({type: UPDATE_TRUE})}
            className="noRecordFound">
            NO RECORD FOUND
          </div> :

         <div className="listContainer">
          <h1 className="record">RECORD</h1>
          <MUIList dense={false}
            sx={{
              maxHeight: "fit-content",
              overflow: "auto",
              width: { sm: "100%", xs: "100%", md: "100%" },
              marginTop: { xs: "0.3rem", sm: "0.3rem", md: "1rem" },
              background: "white",
              border:"1px solid lightgray",
              borderRadius:"0.4rem"

            }}
          >
            {
              (
                handleMap().sort((a,b)=> a.createdAt - b.createdAt).map((p) => (
                  <Slide direction="down" in mountOnEnter unmountOnExit key={p._id}
                    onClick={() => { navigate(`/${p.category}`, { state: { id: p._id } }) }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: p.type ===  incomming  ? "blue" : "red" }}>
                          <MoneyOff />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={`${p.category}-${p.quantity}`} secondary={`$${p.amount} - ${moment(p.date).format('MM Do YYYY')}`} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => { navigate(`/${p.category}`, { state: { id: p._id } }) }}>
                          <MdOutlineVisibility />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" 
                        onClick={() => {dispatch({type: BIN_OPEN}); dispatch({type: DELETE_ID, payload: p._id}) }}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Slide>
                )))}
          </MUIList>
          </div>
      }
      </main>
      </section>
        );
     };

        export default ListSingle;
