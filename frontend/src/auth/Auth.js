import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED,
    SERVER_URL,
    USER_AUTHENTICATED_SUCCESS,
    USER_AUTHENTICATED_FAILED,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILED,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAILED,
    LOGOUT
} from "./Consts";
import axios from "axios";

export const checkAuthenticated = () => async dispatch => {
    console.log("Provjerio token")
    if(localStorage.getItem('access')){
        try{
            console.log(localStorage.getItem('access'))
            const res = await axios.post( `${SERVER_URL}/auth/jwt/verify/`, {
                token: localStorage.getItem('access')
            })

            if(res.data.code !== 'token_not_valid'){
                console.log("Dobar token")
                dispatch({
                    type: USER_AUTHENTICATED_SUCCESS
                })
            }else{
                console.log("Los token")
                dispatch({
                    type:USER_AUTHENTICATED_FAILED
                })
            }

            } catch(err) {
            console.log("Error")
            console.log(err)
            dispatch({
                type:USER_AUTHENTICATED_FAILED
            })
        }
    }else {
        dispatch({
            type: USER_AUTHENTICATED_FAILED
        })
    }
}

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
        console.log("Ovo bi bilo vrh");
        try{
            const res = await axios.get( `${SERVER_URL}/auth/users/me/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            })

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch(err){
            dispatch({
                type: USER_LOADED_FAILED
            })
        }
    }else {
        dispatch({
            type: USER_LOADED_FAILED
        })
    }
};

export const login = (email, password) => async dispatch => {
    try{
        const res = await axios.post( `${SERVER_URL}/auth/jwt/create/`, {
            email:email,
            password:password,
        })
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user())
    } catch(err){
        console.log(err)
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const register = (email, password, is_user, is_renter, DATA) => async dispatch => {
    try{
        const res = await axios.post( `${SERVER_URL}/auth/users/`, {
            email:email,
            password:password,
            is_user:is_user,
            is_renter:is_renter
        })
        console.log(res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })


    } catch(err){
        console.log(err)
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

export const verify = (uid, token) => async dispatch =>{
    try{
        const res = await axios.post( `${SERVER_URL}/auth/users/activation/`, {
            uid:uid,
            token:token
        })
        console.log(res)
        dispatch({
            type: ACTIVATION_SUCCESS
        })


    } catch(err){
        console.log(err)
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
}

export const reset_password = (email) => async dispatch => {
    try{
        await axios.post( `${SERVER_URL}/auth/users/reset_password/`, {
            email:email
        })
        dispatch({
            type:PASSWORD_RESET_SUCCESS
        })

    }catch(err){
        dispatch({
            type:PASSWORD_RESET_FAILED
        })
    }
}

export const reset_password_confirm = (uid, token, new_password) => async dispatch => {
    try{
        await axios.post( `${SERVER_URL}/auth/users/reset_password_confirm/`, {
            uid:uid,
            token:token,
            new_password:new_password
        })
        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS
        })
    }catch(err){
        dispatch({
            type:PASSWORD_RESET_CONFIRM_FAILED
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}