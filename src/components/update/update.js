import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper
} from "@mui/material";
import { useDispatch } from "react-redux";
import { SingleMain } from "./singleMain";
import { useGlobalContext } from "../../state/context";
import { createPost } from "../../state/action/posts";
import { Category } from "../../objects/object";

const Update =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { formData, setFormData, user, creator } = useGlobalContext();
    // const {user, type, location, category, quantity, price, date }= formData
  
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
            navigate
            )
        ); 
        navigate('/')
      };
    
    return(
        <Paper elevation={5} sx={{margin:"2rem 0rem 0rem 8rem", maxHeight: {md: "21rem", sm:"20rem", xs:"35rem"}}}>
        <Grid
          container
          p={2}
          mt={2}
          rowSpacing="0.5rem"
          justifyContent="center"
          textAlign="center"
          sx={{
            width: { md: "25rem", xs: "22rem", sm: "45rem", position: "sticky" },
          }}
        >
          <SingleMain
            label="Location"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            name="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <SingleMain
            label="Quantity"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
          />
          <SingleMain
            label="Price"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <SingleMain
            label="Date"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
  
          <Grid item xs={12} sm={4} md={6} sx={{ width: "17rem" }}>
            <TextField
              label="category"
              select
              name="category"
              value={formData.category}
              sx={{
                width: { md: "11rem", xs: "15rem", sm: "13rem" },
                color: "black",
              }}
              onChange={handleChange}
            >
              {Category.map((i) => (
                <MenuItem key={i.value} value={i.value}>
                  {i.category}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
  
          <Grid item xs={12} sm={4} md={6} sx={{ width: "17rem" }}>
            <TextField
              label="type"
              select
              name="type"
              value={formData.type}
              sx={{
                width: { md: "11rem", xs: "15rem", sm: "13rem" },
                color: "black",
              }}
              onChange={handleChange}
            >
              <MenuItem value={"incomming"}> Incomming </MenuItem>
              <MenuItem value={"outgoing"}> Outgoing </MenuItem>
            </TextField>
          </Grid>
  
          <Grid item xs={12} sm={12} md={6}>
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              mt={1}
              sx={{ width: { md: "11rem", xs: "15.1rem", sm: "14rem" }, height: "3.5rem" }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
        </Paper>
    )
}

export default Update