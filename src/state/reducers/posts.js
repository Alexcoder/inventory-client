import {GET_ALL_POST, GET_POST, CREATE_POST, DELETE_POST, UPDATE_POST, GET_POST_BY_ID } from '../constants';

const Posts = (posts={ Loading:false, promt: "", errorMessage:"", allUserPosts:[], allUnSlicedPosts:[], allPosts:[], post:{} }, action)=>{
    switch(action.type){
        case GET_ALL_POST:
            return {...posts,
                   allUserPosts: action.payload.data,
                   Total : action.payload.total
                }
        case GET_POST:
            return {...posts,
                   allPosts: action.payload.slicedData,
                //    allUnSlicedPosts: action.payload.unSlicedData,
                   page: action.payload?.page,
                   totalPosts: action.payload?.total,
                   pageNumbers: action.payload?.pageNumbers,
                   postsPerPage: action.payload?.limit
                }

        case GET_POST_BY_ID:
            return {...posts,
                   post: action.payload}

        case CREATE_POST:
            return{...posts,
                  allPosts: [...posts.allPosts, action.payload]}

        case DELETE_POST:
            return {...posts, allPosts: posts.allPosts.filter((p)=>p._id !== action.payload)}

        case UPDATE_POST:
             return{...posts, allPosts: posts.allPosts.map(({_id})=>_id === action.payload.id ? action.payload : null)}
        
             case "LOADING_START":
             return{...posts, Loading: true}
        
             case "LOADING_STOP":
             return{...posts, Loading: false}
    
        default: 
        return posts;
    }
}

export default Posts;