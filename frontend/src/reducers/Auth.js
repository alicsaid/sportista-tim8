import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED
} from "../auth/Consts";

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem(('refresh')),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user : payload
            }
        case USER_LOADED_FAILED:
            return{
                ...state,
                user : null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
    }
}