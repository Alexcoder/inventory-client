import {GET_ALL_DASHBOARD, 
        CREATE_DASHBOARD, 
        UPDATE_DASHBOARD, 
       } from '../constants';

     const InitialState ={
        Loading:false, 
        allDashboard:[],
     }

const Dashboard = (dashboard={InitialState}, action)=>{
    switch(action.type){
        case GET_ALL_DASHBOARD:
            return {...dashboard,
                     allDashboard: action.payload
                }
        case CREATE_DASHBOARD:
            const isFound = dashboard?.allDashboard?.find((p)=> p.category===action.payload.category)
            if (!isFound){
                return {...dashboard,
                        allDashboard: [...dashboard.allDashboard, action.payload]
                    }
            }
            break;

        case UPDATE_DASHBOARD:
             return{...dashboard, allDashboard: dashboard.allDashboard.map(({_id})=>_id === action.payload._id ? action.payload : null)}
        
             case "LOADING_START":
             return{...dashboard, Loading: true}
        
             case "LOADING_STOP":
             return{...dashboard, Loading: false}
    
        default: 
        return dashboard;
    }
}

export default Dashboard;