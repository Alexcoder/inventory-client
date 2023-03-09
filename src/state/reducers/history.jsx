import {
    GET_ALL_HISTORY,
    GET_HISTORY_BY_QUERY, 
    GET_HISTORY_BY_ID, 
    CREATE_HISTORY, 
    UPDATE_HISTORY, 
    DELETE_HISTORY
   } from '../constants';

 const InitialState ={
    Loading:false, 
    allHistory:[],
    historyByQuery:[],
    historyById:{},
 }

const History = (history={InitialState}, action)=>{
switch(action.type){
    case GET_ALL_HISTORY:
        return {...history,
                 allHistory: action.payload.data,
                 totalQuantity: action.payload.totalQuantity,
            }
    case GET_HISTORY_BY_QUERY:
        return {...history,
                 historyByQuery: action.payload.data,
                 page: action.payload.page,
                 totalPages : action.payload.totalPages,
                 quantity: action.payload.quantity,
                 limit: action.payload.limit
            }
    case GET_HISTORY_BY_ID:
        return {...history,
                 historyById: action.payload,
            }
    case CREATE_HISTORY:
        return {...history,
                allHistory: [...history.allHistory, action.payload]
            }

    case UPDATE_HISTORY:
         return{...history, allHistory: history.allHistory.map(({_id})=>_id === action.payload._id ? action.payload : null)}
   
    case DELETE_HISTORY:
         return{...history, allHistory: history.allHistory.filter(({_id})=>_id !== action.payload._id )}
    
         case "LOADING_START":
         return{...history, Loading: true}
    
         case "LOADING_STOP":
         return{...history, Loading: false}

    default: 
    return history;
}
}

export default History;