import {GET_AUTH, LOGOUT } from '../constants';

const Auth = (auth={Loading:false, error:null, AuthData: JSON.parse(localStorage.getItem("profile")) || null }, action)=>{
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
            return {...auth,
                       Loading: false
                       };
        

        default: 
        return auth;
    }
}

export default Auth;