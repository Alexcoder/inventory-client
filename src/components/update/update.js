import React from "react";
import { Grid,TextField,MenuItem,Button,Paper} from "@mui/material";
import { useDispatch } from "react-redux";
import { SingleMain } from "./singleMain";
import { useGlobalContext } from "../../state/context";
import { createPost } from "../../state/action/posts";
import { Category } from "../../objects/object";
import './update.css';

const Update =()=>{
    const dispatch = useDispatch();
    const { formData, setFormData, user, creator,setUpdate } = useGlobalContext();
  
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
        setUpdate(false)
      };
    
    return(
      <div className="update"
      //  sx={{
      //   position:"absolute",
      //   padding:"2rem 0rem 0rem 0rem",
      //   top:"2.5rem",
      //   left:"0", 
      //   right:"0", 
      //   textAlign:"center", 
      //   justifyContent:"center",
      //   width:"100vw",
      //   height : { md:"250%", sm:"200%", xs:"135%"},
      //   transition:"2s ease in",
      //   background: "rgba(0, 0, 0, 0.600)",
      //  }}
      >
        <Paper elevation={5} 
        sx={{ 
           position:"fixed",
           textAlign:"center",
          margin:{md:"0rem 0rem 0rem 25rem", sm: "0.2rem 0rem 0rem 6rem", xs:"1.5rem 0rem 0rem 2.5rem"},
         maxHeight: {md: "34rem", sm:"35rem", xs:"45rem"},
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
  
  
          <Grid item xs={12} sm={4} md={6} sx={{ width: "17rem" }}>
            <TextField
              label="type"
              select
              name="type"
              value={formData.type}
              sx={{
                width: { md: "13.2rem", xs: "15rem", sm: "19rem" },
                marginLeft: {md: "-3.5rem", sm:"-4rem"},
                color: "black",
              }}
              onChange={handleChange}>
              <MenuItem value={"incomming"}> Incomming </MenuItem>
              <MenuItem value={"outgoing"}> Outgoing </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12} md={12}
            sx={{
            marginLeft:{ md: "rem",  } ,
            marginTop:{ md: "1rem", sm: "3rem", xs: "2rem" } ,
            width: { md: "12rem", xs: "15.1rem", sm: "14rem" }, 
            height: "2rem" }}>
       
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              mt={1}
              sx={{
                width: { md: "12rem", xs: "15.1rem", sm: "14rem" }, 
                height: "2rem" 
                }}>
              ADD TRANSACTION
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              type="submit"
              onClick={()=> setUpdate(false)}
              variant="contained"
              mt={1}
              sx={{
                marginTop:"1rem", 
                width: { md: "12rem", xs: "15.1rem", sm: "14rem" }, 
                // marginLeft:{md:"-3rem",sm:"3rem"} ,
                height: "2rem" }}>
              BACK
            </Button>
          </Grid>
        </Grid>
        </Paper>

        </div>
    )
}

export default Update;