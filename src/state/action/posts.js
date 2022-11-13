import {GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, GET_POST_BY_ID,} from '../constants';
import * as api from '../api';

export const getPosts = ()=> async(dispatch)=> {

  try{
    dispatch({type: "LOADING_START"})
    const {data} = await api.getPosts()
    dispatch({type: GET_POST, payload: data })
    dispatch({type: "LOADING_STOP"})
  }
  catch(error){
    console.log(error)
  }
}

export const getPost = (id)=> async (dispatch)=> {

  try{
    dispatch({type: "LOADING_START"})
    const {data} = await api.getPost(id)
    dispatch({type: GET_POST_BY_ID, payload: data })
    dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

  export const createPost = (post, history)=> async(dispatch)=> {

    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.createPost(post)
      dispatch({type: CREATE_POST, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

  export const updatePost = ({id, post})=> async(dispatch)=> {

    try{
      dispatch({type: "LOADING_START"})
      const {data} = await api.updatePost({id, post})
      dispatch({type: UPDATE_POST, payload: data })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }

  export const deletePost = (id)=> async(dispatch)=> {

    try{
      dispatch({type: "LOADING_START"})
      await api.deletePost(id)
      dispatch({type: DELETE_POST, payload: id })
      dispatch({type: "LOADING_STOP"})
    }
    catch(error){
      console.log(error)
    }
  }


