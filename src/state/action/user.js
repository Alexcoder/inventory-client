import {GET_AUTH, LOGOUT} from '../constants';
import * as api from '../api';



  export const signIn = (form, navigate)=> async(dispatch)=> {
    try{
      dispatch({type: "START_LOADING"})

      const {data} = await api.signIn(form)
      dispatch({type: GET_AUTH, payload: data });
      dispatch({type: "END_LOADING"})
      navigate('/')
    }
    catch(error){
      dispatch({type: "END_LOADING"})
      dispatch({type: "ALERT", payload: error.response.data.message });
    }
  }

  export const signUp = (form, navigate)=> async(dispatch)=> {
    try{
      dispatch({type: "START_LOADING"})
      
      const {data} = await api.signUp(form)
      dispatch({type: GET_AUTH, payload: data })
      dispatch({type: "END_LOADING"})
      navigate('/')
    }
    catch(error){
      dispatch({type: "END_LOADING"})
      dispatch({type: "ALERT", payload: error.response.data.message });
    }
  }

  export const logOut = (navigate)=> async(dispatch)=> {

      dispatch({type: LOGOUT })
      localStorage.clear("profile")
      navigate('/')
  }
