import React, {useState, createContext,useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';

const FormatDate=()=>{
  const d = new Date();
  const day = `${d.getDate()}`;
  const month = `${d.getMonth()+1}`;
  const year = d.getFullYear();

  const day_format = day.length<2 ? `0${day}` : `${day}`;
  const month_format = month.length<2 ? `0${month}` : `${month}`;

  const myDate = [year,month_format,day_format].join("-")
  return myDate
 }

 const initialState= {
  user:"",
  type:"",
  location: "",
  category: "",
  quantity: "",
  price: "",
  date: FormatDate(),
}



const incomming = "incomming";

export const StateContext = createContext()

export const Context =({children})=>{


    const location= useLocation()
    const {search, toDelete, bin, sidebar, update, logout, transaction,
    open}= useSelector((state)=> state.stateReducer)

    const [formData, setFormData]= useState(initialState);
    const [searchPost, setSearchPost]= useState({});
    const [selected, setSelected]= useState(Number(0));
    const [currentPage, setCurrentPage]= useState(1)
    const [popup, setPopup]= useState(false)
    const user =  JSON.parse(localStorage.getItem("profile"));
    const creator =   user?.result._id;
    const useQuery=()=> { return new URLSearchParams(location.search) };
    const query = useQuery();
    
    useEffect(()=>{
      JSON.parse(localStorage.getItem("profile"))
    },[location])
    

    
  
 return(
    <StateContext.Provider
    value={{
      formData, setFormData, user, creator, 
      search, transaction, 
      open,bin, logout, incomming,
      toDelete, sidebar,update, searchPost,
      setSearchPost, selected, setSelected,
      currentPage, setCurrentPage,
      query, popup, setPopup,   
      }}
    >
      {children}
    </StateContext.Provider>
 )   
}

export const useGlobalContext =()=> useContext(StateContext);