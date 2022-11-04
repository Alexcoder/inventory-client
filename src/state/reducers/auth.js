import {GET_AUTH, LOGOUT } from '../constants';

const Auth = (auth={ AuthData: JSON.parse(localStorage.getItem("profile")) || null }, action)=>{
    switch(action.type){
        case GET_AUTH:
            localStorage.setItem("profile", JSON.stringify({...action?.payload}));
            return {...auth, AuthData: action?.payload};
            
        case LOGOUT:
            localStorage.clear("profile");
            return {...auth, AuthData: null};

        default: 
        return auth;
    }
}

export default Auth;