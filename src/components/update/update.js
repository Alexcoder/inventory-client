import React, {useState, useEffect} from "react";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SingleMain } from "./singleMain";
import { useGlobalContext } from "../../state/context";
import { createDashboard } from "../../state/action/dashboard";
import { createHistory } from "../../state/action/history";
import {RECEIVE_TRUE,RECEIVE_FALSE, UPDATE_FALSE} from '../../state/constants';
import Popup from "../popup/popup"
import './update.css';

const Update =()=>{
    const dispatch = useDispatch();
    const {receive} = useSelector((state)=> state.stateReducer);
    const {allDashboard} = useSelector((state)=> state.dashboard);
    const {allHistory} = useSelector((state)=> state.history);
    const {formData, setFormData, user, creator, } = useGlobalContext();
    // setPopup, popup

    const [stock, setStock] = useState();
    const [found, setFound] = useState([]);
    const [select, setSelect] = useState(false);
    const [buyPrice, setBuyPrice] = useState();
    const [notification, setNotification] = useState(false);
    const [submit, setSubmit] = useState(false);
  
    const incomming = "incomming";
    const outgoing = "outgoing";

      
      
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value.toUpperCase() });
    };

    const dispatchData2={
      category: formData.category,
      user: user?.result.name,
      type: receive ? incomming : outgoing,
      price: formData.price,
      quantityIn : receive? formData.quantity : 0 ,
      quantityOut :!receive? formData.quantity : 0 ,
      amountIn: receive ? (formData.price * formData.quantity) : 0 ,
      amountOut: !receive ? (formData.price * formData.quantity) : 0 ,
      date: formData.date,
      location: formData.location,
      creator
    };

    
    useEffect(()=>{
      const handleCheckStock =()=>{
        const verify =   allHistory?.find((p)=>
        (p.category===(formData.category) ) 
       )
        const price =   allDashboard?.find((p)=>
        (p.category===(formData.category) ) 
       )
       verify && setFound(verify)
      //  const quantityIn =verify ? (verify.quantityIn) : 0
      //  const quantityOut = verify? (verify.quantityOut) :0
      //  const stock =verify? (quantityIn - quantityOut) : "Does not Exist"
       const In = verify?.filter((item)=> item.type==="incomming")
       const Out = verify?.filter((item)=> item.type==="outgoing")
       const quantityIn =verify ? In?.reduce((prev, acc)=> prev + acc.quantity, 0) : 0
       const quantityOut =verify ? Out?.reduce((prev, acc)=> prev + acc.quantity,0) : 0
       const stock =verify? (quantityIn - quantityOut) : "Does not Exist"

       const highestBoughtPrice = price? price.buyPrice : 0;
       setStock(stock)
       setBuyPrice(highestBoughtPrice)
      }
      handleCheckStock()
    },[allDashboard, allHistory,formData.category])

  
    const handleSubmit = () => {
      // e.preventDefault();
      if(!found){      
       alert("Item does not exist")
       } else if(!receive & (formData.quantity>stock)){
        alert("Cannot send above available stock")
       }else if(!receive & (formData.price < buyPrice)){
        alert ("Selling at loss");
        // dispatch( createDashboard(dispatchData2) ); 
        // dispatch( createHistory(dispatchData2) ); 
        // setSubmit(true)
       }
       else {
        dispatch( createDashboard(dispatchData2) ); 
        dispatch( createHistory(dispatchData2) ); 
        setSubmit(true)
      }   
      // dispatch({type: UPDATE_FALSE}); 
      };

     useEffect(()=>{
       setInterval(()=>{
         setNotification(submit? true : false)
       },3000)
      // return ()=> clearInterval(Interval)
     },[submit, dispatch])

    
    return(
      <div className="update">
        <Paper elevation={5} style={{ padding:"1rem 2rem", display:"grid", gap:"0.6rem" }}>

            <header  style={{textAlign:"center", fontWeight:"600", fontSize:"1rem"}}>
               <div style={{color: receive? "green" : "darkred", fontSize:"2rem"}}>{receive? "RECEIVING" : "SENDING"}</div>
               <button onClick={()=> dispatch({type: receive ? RECEIVE_FALSE : RECEIVE_TRUE})}>{receive? "switch to send" : "switch to receive"} </button> <br/><br/>
               {formData.category && `InStock ${Intl.NumberFormat().format(stock)}`}
               {formData.category && <div>Buy Price &#8358; {Intl.NumberFormat().format(buyPrice)}</div>  }
            </header>
           
           <section> {/*SELECT SECTION*/}
           <div style={{display:"flex", border:"0.5px solid lightgray", padding:"0.2rem", alignItems:"center"}}>
            <input
              className="update-category-input"
              style={{border:"none", padding:"0.6rem 0.1rem"}}
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"/>
               <div style={{padding:"0.3rem 0.3rem",borderRadius:"0.2rem", fontSize:"1rem", background:"purple", color:"white"}}
                 onClick={()=> setSelect(prev=> !prev)}> select
               </div>
            </div>     
            <div className="update-category-map"  style={{position:"fixed", zIndex:"200", width:"",borderRadius:"0rem 0rem 0.2rem 0.2rem", border:"1px solid gray", textAlign:"center", maxHeight:"15rem", overflow:"auto"}}>
              {select && allDashboard?.map((i) => (
                <div style={{background:"lightgray", borderTop:"1px solid white"}} key={i._id} value={i.category}>
                  <div  onClick={()=> {setFormData({...formData, category: i.category}); setSelect(false)}}>{i.category}</div> 
                </div>
              ))}
            </div> 
          </section>    

          <SingleMain
            label="Quantity"
            type="number"
            name="quantity"
            min={5}
            max={stock}
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}/>
          <SingleMain
            label="Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}/>
          <SingleMain
            label="Location"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
          <SingleMain
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>

          <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
            <button
              type="submit"
              onClick={()=>{handleSubmit()}}
              style={{ background: receive ? "green" : "darkred", borderRadius:"0.2rem",padding:"0.4rem 1rem", border:"none", color:"white" }}> {receive? "RECEIVE" : "SEND"}
            </button>
            <button
              onClick={()=> dispatch({type: UPDATE_FALSE}) }
              style={{ borderRadius:"0.2rem",padding:"0.4rem 1rem", border:"none", color:"white", background:"purple"}}>   BACK
            </button>
          </div>


        </Paper>
       {notification && <Popup message={receive? "Receive Successful" : "Sent Successful"} />}
        </div>
    )
}

export default Update;