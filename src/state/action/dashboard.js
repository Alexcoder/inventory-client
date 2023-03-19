import {
    GET_ALL_DASHBOARD,
    CREATE_DASHBOARD, 
    UPDATE_DASHBOARD} from '../constants';

import * as api from '../api';

export const getAllDashboard = (creator)=> async(dispatch)=> {
  try{
    dispatch({type: "LOADING_START"})
    const {data} = await api.getAllDashboard(creator)
    dispatch({type: GET_ALL_DASHBOARD, payload: data })
    dispatch({type: "LOADING_STOP"})
  }
  catch(error){
    console.log(error)
  }
}


  export const createDashboard = (newData)=> async(dispatch)=> {
    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.createDashboard(newData)
      dispatch({type: CREATE_DASHBOARD, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }


  export const updateDashboard = (toDelete)=> async(dispatch)=> {

    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.updateDashboard(toDelete)
      dispatch({type: UPDATE_DASHBOARD, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }


