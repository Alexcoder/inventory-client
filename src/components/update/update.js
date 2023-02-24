import React from "react";
import {useNavigate} from "react-router-dom";
import { Grid,TextField,MenuItem,Button,Paper, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SingleMain } from "./singleMain";
import { useGlobalContext } from "../../state/context";
import { createPost } from "../../state/action/posts";
import { Category } from "../../objects/object";
import {UPDATE_FALSE} from '../../state/constants';
import './update.css';

const Update =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {receive} = useSelector((state)=> state.stateReducer);
    const {
      FluidLossIn, FluidLossOut, AntifoamIn, AntifoamOut,
      DispersantIn, DispersantOut, RetarderIn, RetarderOut, CementIn, CementOut, BentoniteIn, BentoniteOut,
      CalciumChlorideIn, CalciumChlorideOut, ButylGlycolIn, ButylGlycolOut, SurfactantIn, SurfactantOut,
      ViscosifierIn, ViscosifierOut, 
      // AntifoamAmountIn, AntifoamAmountOut, RetarderAmountIn, RetarderAmountOut,
      // FluidLossAmountIn, FluidLossAmountOut, DispersantAmountIn, DispersantAmountOut, CementAmountIn,
      // CementAmountOut, BentoniteAmountIn, BentoniteAmountOut, CalciumChlorideAmountIn, CalciumChlorideAmountOut,
      // ButylGlycolAmountIn, ButylGlycolAmountOut, SurfactantAmountIn, SurfactantAmountOut, ViscosifierAmountIn,
      // ViscosifierAmountOut,
      formData, setFormData, user, creator,
    } = useGlobalContext();
  
    // const { formData, setFormData, user, creator } = useGlobalContext();
    const incomming = "incomming";
    const outgoing = "outgoing";
  
    const amount = formData.price * formData.quantity;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const MinMax = {max: 10}

    const computeStock=()=>{
      if(formData.category==="Antifoam"){
        return AntifoamIn-AntifoamOut
      }else if(formData.category==="FluidLoss"){
        return FluidLossIn-FluidLossOut
      }else if(formData.category==="Retarder"){
        return RetarderIn-RetarderOut
      }
      else if(formData.category==="Dispersant"){
        return DispersantIn-DispersantOut
      }
      else if(formData.category==="Viscosifier"){
        return ViscosifierIn-ViscosifierOut
      }
      else if(formData.category==="Calciumchloride"){
        return CalciumChlorideIn-CalciumChlorideOut
      }
      else if(formData.category==="Butylglycol"){
        return ButylGlycolIn-ButylGlycolOut
      }
      else if(formData.category==="Surfactant"){
        return SurfactantIn-SurfactantOut
      }
      else if(formData.category==="Cement"){
        return CementIn-CementOut
      }
      else if(formData.category==="Bentonite"){
        return BentoniteIn-BentoniteOut
      }
    }

    const dispatchData={
      user: user?.result.name,
      type: receive ? incomming : outgoing,
      location: formData.location,
      category: formData.category,
      quantity: formData.quantity,
      price: formData.price,
      date: formData.Data,
      amount, 
      creator 
    };
   
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(receive){
        //   dispatch( createPost(dispatchData) ); 
        //   dispatch({type: UPDATE_FALSE});
        //   navigate(`/home?page=1`)
        // }
        if((!receive)&(Number(computeStock())<=0)){
          alert("No available stock")
        }else if((!receive)&(formData.quantity>Number(computeStock()))){
          alert("You cannot send above stock available")
        }else{
          dispatch( createPost(dispatchData) ); 
          dispatch({type: UPDATE_FALSE});
        }
        navigate(`/home?page=1`)
      };
    
    return(
      <div className="update">
        <Paper elevation={5} 
        sx={{ 
           position:"fixed",
           textAlign:"center",
           maxHeight: {md: "34rem", sm:"45rem", xs:"45rem"},
           width:{xs:"82%", sm:"55%", md:"25%"}, }}>
        <Grid
          container
          p={2}
          mt={2}
          rowSpacing="0.5rem"
          justifyContent="center"
          textAlign="center"
          max={""}
          sx={{width: { md: "25rem", xs: "99%", sm: "90%" }}}>
            <Typography  sx={{margin:"0.5rem 2rem 0rem 0rem", fontWeight:"600", fontSize:"1rem"}}>
               {receive? "RECEIVE" : "SEND"} <br/>
               <div style={{}}>Stock <span style={{color: computeStock()>0 ? "green" : "red"}}>{computeStock()}</span></div>
            </Typography>

          <Grid item xs={12} sm={12} md={12} 
          sx={{
               width: {md:"23rem", sm:"18rem", xs:"15rem"} , 
               display:"flex", 
               marginLeft: {md:"3rem", sm:"4rem", xs:"1rem"}}}>
            <input
             className="update-category-input"
             name="category"
             value={formData.category}
             onChange={handleChange}
             placeholder="Category"/>
            <TextField
              // label="category"
              select
              name="category"
              value={formData.category}
              sx={{
                width: { md: "3rem", sm: "3rem", xs: "3rem" },
                marginLeft: {md:"0rem", sm: "0rem" },
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
            InputProps={{
              inputProps: { 
                  max: 20, min: 0 
              }
          }}
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })}/>
          <SingleMain
            label="Price"
            sx={{ width: { md: "12rem", xs: "15rem", sm: "15rem" } }}
            type="number"
            name="price"
            inputProps={MinMax}
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
                height: "2.5rem",
                background: !receive && "darkred"
                }}>
              {receive? "RECEIVE" : "SEND"}
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              onClick={()=> dispatch({type: UPDATE_FALSE}) }
              variant="contained"
              mt={1}
              sx={{
                marginTop:"1.5rem", 
                width: { md: "12rem", xs: "15.1rem", sm: "19rem" }, 
                marginLeft:{md:"-3rem", sm:"3rem"} ,
                height: "1.5rem" }}>
              BACK
            </Button>
          </Grid>
        </Grid>
        </Paper>

        </div>
    )
}

export default Update;