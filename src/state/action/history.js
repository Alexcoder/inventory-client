import {
    GET_ALL_HISTORY,
    GET_HISTORY_BY_QUERY,
    GET_HISTORY_BY_ID,
    CREATE_HISTORY, 
    DELETE_HISTORY} from '../constants';

import * as api from '../api';

export const getAllHistory = (creator)=> async(dispatch)=> {

  try{
    dispatch({type: "LOADING_START"})
    const {data} = await api.getAllHistory(creator)
    dispatch({type: GET_ALL_HISTORY, payload: data })
    dispatch({type: "LOADING_STOP"})
  }
  catch(error){
    console.log(error)
  }
}


export const getHistoryByQuery = (searchQuery)=> async(dispatch)=> {
  try{
    dispatch({type: "LOADING_START"})
    const {data} = await api.getHistoryByQuery(searchQuery)
    dispatch({type: GET_HISTORY_BY_QUERY, payload: data })
    dispatch({type: "LOADING_STOP"})
  }
  catch(error){
    console.log(error)
  }
}


  export const createHistory = (newData)=> async(dispatch)=> {
    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.createHistory(newData)
      dispatch({type: CREATE_HISTORY, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

  export const deleteHistory = (toDelete)=> async(dispatch)=> {
    try{
      dispatch({type: "LOADING_START"})
      await api.deleteHistory(toDelete)
      dispatch({type: DELETE_HISTORY, payload: toDelete })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

  export const getHistoryById = (id)=> async(dispatch)=> {

    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.getHistoryById(id)
      dispatch({type: GET_HISTORY_BY_ID, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

