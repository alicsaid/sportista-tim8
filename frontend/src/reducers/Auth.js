import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED,
    USER_AUTHENTICATED_SUCCESS,
    USER_AUTHENTICATED_FAILED,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILED,
    LOGOUT
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
        case USER_AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            localStorage.setItem('refresh', payload.refresh)
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user : payload
            }
        case USER_AUTHENTICATED_FAILED:
            return {
                ...state,
                isAuthenticated: false
            }
        case USER_LOADED_FAILED:
            return{
                ...state,
                user : null
            }
        case LOGIN_FAIL:
        case LOGOUT:
        case REGISTER_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAILED:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAILED:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return state
        default:
            return state
    }
}