import {GET_POST, CREATE_POST, DELETE_POST, UPDATE_POST, GET_POST_BY_ID } from '../constants';

const Posts = (posts={ Loading:false, promt: "", errorMessage:"", allposts:[], post:{} }, action)=>{
    switch(action.type){
        case GET_POST:
            return {...posts,
                   allposts: action.payload}

        case GET_POST_BY_ID:
            return {...posts,
                   post: action.payload}

        case CREATE_POST:
            return{...posts,
                  allposts: [...posts.allposts, action.payload]}

        case DELETE_POST:
            return {...posts, allposts: posts.allposts.filter((p)=>p._id !== action.payload)}

        case UPDATE_POST:
             return{...posts, allposts: posts.allposts.map(({_id})=>_id === action.payload.id ? action.payload : null)}
        
             case "LOADING_START":
             return{...posts, Loading: true}
        
             case "LOADING_STOP":
             return{...posts, Loading: false}
    
        default: 
        return posts;
    }
}

export default Posts;