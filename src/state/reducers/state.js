 import {
    SIDEBAR_OPEN, SIDEBAR_CLOSE, SIDEBAR_TOGGLE,
    OPEN_TRUE, OPEN_FALSE, OPEN_TOGGLE,
    BIN_OPEN, BIN_CLOSE, 
    UPDATE_TRUE, UPDATE_FALSE, 
    LOGOUT_TRUE, LOGOUT_FALSE,
    TRANSACTION_OPEN, TRANSACTION_CLOSE,
    DELETE_ID, SEARCH,
    HAVEACCOUNT_TRUE, HAVEACCOUNT_FALSE, HAVEACCOUNT_TOGGLE
 } from '../constants';

const INITIAL_STATE={
    search: "",
    deleteId:"",
    bin: false,
    sidebar: false,
    update: false,
    logout : false,
    transaction: false,
    open : false,
    haveAccount: true
}

const StateReducer = (stateReducer=INITIAL_STATE, action)=>{
    switch(action.type){
        case SIDEBAR_OPEN:
            return {...stateReducer, sidebar: true}
        case SIDEBAR_CLOSE:
            return {...stateReducer, sidebar: false}
        case SIDEBAR_TOGGLE:
            return {...stateReducer, sidebar: !stateReducer.sidebar}

        case BIN_OPEN:
            return {...stateReducer, bin: true}
        case BIN_CLOSE:
            return {...stateReducer, bin: false}

        case UPDATE_TRUE:
            return {...stateReducer, update: true}
        case UPDATE_FALSE:
            return {...stateReducer, update: false}

        case LOGOUT_TRUE:
            return {...stateReducer, logout: true}
        case LOGOUT_FALSE:
            return {...stateReducer, logout: false}

        case TRANSACTION_OPEN:
            return {...stateReducer, transaction: true}
        case TRANSACTION_CLOSE:
            return {...stateReducer, transaction: false}

        case OPEN_TRUE:
            return {...stateReducer, open: true}
        case OPEN_FALSE:
            return {...stateReducer, open: false}
        case OPEN_TOGGLE:
            return {...stateReducer, open: !stateReducer.open}

        case HAVEACCOUNT_TRUE:
            return {...stateReducer, haveAccount: true}
        case HAVEACCOUNT_FALSE:
            return {...stateReducer, haveAccount: false}
        case HAVEACCOUNT_TOGGLE:
            return {...stateReducer, haveAccount: !stateReducer.haveAccount}
    
    
        case DELETE_ID:
            return {...stateReducer, deleteId: action?.payload}

        case SEARCH:
            return {...stateReducer, search: action?.payload}

        default: 
        return stateReducer;
    }
}

export default StateReducer;