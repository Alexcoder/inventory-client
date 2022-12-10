import {GET_AUTH, LOGOUT } from '../constants';

const INITIAL_STATE={
    Loading:false, 
    alert:"", error:null, 
    AuthData: JSON.parse(localStorage.getItem("profile")) || null 
}

const Auth = (auth= INITIAL_STATE, action)=>{
    switch(action.type){
        case GET_AUTH:
            localStorage.setItem("profile", JSON.stringify({...action?.payload}));
            return {...auth,
                   AuthData: action?.payload,
                   };
        case "START_LOADING":
            return {...auth,
                   Loading: true
                   };
            
        case LOGOUT:
            localStorage.clear("profile");
            return {...auth, AuthData: null};

        case "END_LOADING":
            return {...auth, Loading: false };

        case "ALERT":
            return {...auth,
                       alert: action.payload
                       };
        

        default: 
        return auth;
    }
}

export default Auth;