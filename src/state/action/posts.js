import {GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST, GET_POST_BY_ID,} from '../constants';
import * as api from '../api';

export const getPosts = ()=> async(dispatch)=> {

  try{
    const {data} = await api.getPosts()
    dispatch({type: GET_POST, payload: data })
  }
  catch(error){
    console.log(error)
  }
}

export const getPost = (id)=> async (dispatch)=> {

  try{
    const {data} = await api.getPost(id)
    dispatch({type: GET_POST_BY_ID, payload: data })
    }
    catch(error){
      console.log(error)
    }
  }

  export const createPost = (post, history)=> async(dispatch)=> {

    try{
      const {data} = await api.createPost(post)
      dispatch({type: CREATE_POST, payload: data })
      // history.push(`/${data.category}/${data._id}`)
    }
    catch(error){
      console.log(error)
    }
  }

  export const updatePost = ({id, post})=> async(dispatch)=> {

    try{
      const {data} = await api.updatePost({id, post})
      dispatch({type: UPDATE_POST, payload: data })
    }
    catch(error){
      console.log(error)
    }
  }

  export const deletePost = (id)=> async(dispatch)=> {

    try{
      await api.deletePost(id)
      dispatch({type: DELETE_POST, payload: id })
    }
    catch(error){
      console.log(error)
    }
  }


