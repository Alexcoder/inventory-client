import {GET_POST, CREATE_POST, DELETE_POST, UPDATE_POST, GET_POST_BY_ID } from '../constants';

const Posts = (posts={ loading:false, error:false, allposts:[], post:{} }, action)=>{
    switch(action.type){
        case GET_POST:
            return {...posts,
                   loading:true,
                   allposts: action.payload}

        case GET_POST_BY_ID:
            return {...posts,
                   loading:true,
                   post: action.payload}

        case CREATE_POST:
            return{...posts,
                  loading:true,
                  allposts: [...posts.allposts, action.payload]}

        case DELETE_POST:
            return {...posts, allposts: posts.allposts.filter((p)=>p._id !== action.payload)}

        case UPDATE_POST:
             return{...posts, allposts: posts.allposts.map(({_id})=>_id === action.payload.id ? action.payload : null)}
    
        default: 
        return posts;
    }
}

export default Posts;