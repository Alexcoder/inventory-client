import {GET_AUTH, LOGOUT} from '../constants';
import * as api from '../api';



  export const signIn = (form, navigate)=> async(dispatch)=> {
    try{
      const {data} = await api.signIn(form)
      dispatch({type: GET_AUTH, payload: data })
      navigate('/home')
    }
    catch(error){
      console.log(error)
    }
  }

  export const signUp = (form, navigate)=> async(dispatch)=> {
    try{
      const {data} = await api.signUp(form)
      dispatch({type: GET_AUTH, payload: data })
      navigate('/home')
    }
    catch(error){
      console.log(error)
    }
  }

  export const logOut = (navigate)=> async(dispatch)=> {

      dispatch({type: LOGOUT })
      localStorage.clear("profile")
      navigate('/auth')
  }
