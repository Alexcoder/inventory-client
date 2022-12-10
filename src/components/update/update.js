import React from "react";
import { Grid,TextField,MenuItem,Button,Paper} from "@mui/material";
import { useDispatch } from "react-redux";
import { SingleMain } from "./singleMain";
import { useGlobalContext } from "../../state/context";
import { createPost } from "../../state/action/posts";
import { Category } from "../../objects/object";
import {UPDATE_FALSE} from '../../state/constants';
import './update.css';

const Update =()=>{
    const dispatch = useDispatch();
    const { formData, setFormData, user, creator } = useGlobalContext();
  
    const amount = formData.price * formData.quantity;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          createPost(
            {
            user: user?.result.name,
            type: formData.type,
            location: formData.location,
            category: formData.category,
            quantity: formData.quantity,
            price: formData.price,
            date: formData.Data,
            amount, 
            creator 
          },
            )
        ); 
        dispatch({type: UPDATE_FALSE})
      };
    
    return(
      <div className="update">
        <Paper elevation={5} 
        sx={{ 
           position:"fixed",
           textAlign:"center",
          margin:{md:"0rem 0rem 0rem 25rem", sm: "0.2rem 0rem 0rem 11rem", xs:"1.5rem 0rem 0rem 2.5rem"},
         maxHeight: {md: "34rem", sm:"45rem", xs:"45rem"},
         width:{xs:"82%", sm:"55%", md:"25%"}, }}>

        <Grid
          container
          p={2}
          mt={2}
          rowSpacing="0.5rem"
          justifyContent="center"
          textAlign="center"
          sx={{
            width: { md: "25rem", xs: "99%", sm: "90%" },
          }}>
          <Grid item xs={12} sm={12} md={12}  sx={{margin:"0.5rem 0rem 0rem 0rem", textAlign: "center"}}>
            <Button 
<<<<<<< HEAD
           sx={{margin:"0rem 3rem 0rem -3rem", textAlign: "center"}} variant="contained" onClick={()=> setFormData({...formData, type: "incomming"})}>Receive</Button>
=======
           sx={{margin:"0rem 1rem 0rem -4rem", textAlign: "center"}} variant="contained" onClick={()=> setFormData({...formData, type: "incomming"})}>Receive</Button>
>>>>>>> 177e499 (refactor login)
            <Button variant="contained" onClick={()=> setFormData({...formData, type: "outgoing"})}> Send</Button>
          </Grid>
  

          <Grid item xs={12} sm={12} md={12} 
          sx={{ 
            width: {md:"17rem", sm:"12rem" },
            }}
            >
            <TextField
              label="category"
              select
              name="category"
              value={formData.category}
              sx={{
                width: { md: "13rem", xs: "15rem", sm: "19rem" },
                marginLeft: {md:"-4rem", sm: "3rem" },
                color: "black",
              }}
              onChange={handleChange}>
              {Category.map((i) => (
                <MenuItem key={i.value} value={i.value}>
                  {i.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <SingleMain
            label="Quantity"
            sx={{ width: { md: "8rem", xs: "15rem", sm: "15rem" } }}
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })}/>
          <SingleMain
            label="Price"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}/>
          <SingleMain
            label="Location"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            name="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            } />
          <SingleMain
            label="Date"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>

          <Grid item xs={12} sm={12} md={12}
            sx={{
            marginTop:{ md: "1rem", sm: "3rem", xs: "2rem" } ,
            width: { md: "12rem", xs: "15.1rem", sm: "14rem" }, 
            height: "2rem" }}>
       
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              mt={1}
              sx={{
                marginLeft:{ md: "-3rem", sm:"3rem"  } ,
                width: { md: "12rem", xs: "15.1rem", sm: "19rem" }, 
                height: "2.5rem" 
                }}>
              ADD TRANSACTION
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              type="submit"
              onClick={()=> dispatch({type: UPDATE_FALSE}) }
              variant="contained"
              mt={1}
              sx={{
                marginTop:"1.5rem", 
                width: { md: "12rem", xs: "15.1rem", sm: "19rem" }, 
                marginLeft:{md:"-3rem", sm:"3rem"} ,
                height: "2.5rem" }}>
              BACK
            </Button>
          </Grid>
        </Grid>
        </Paper>

        </div>
    )
}

export default Update;