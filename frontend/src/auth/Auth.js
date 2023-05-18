import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILED,
    SERVER_URL
} from "./Consts";
import axios from "axios";

export const load_user = () => async dispatch => {
    if(localStorage.getItem('access')){
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

export const login = (email, password, is_renter, is_user) => async dispatch => {
    try{
        const res = await axios.post( `${SERVER_URL}/auth/jwt/create/`, {
            email:email,
            password:password,
            is_renter:is_renter,
            is_user:is_user
        })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user)
    } catch(err){
        dispatch({
            type: LOGIN_FAIL
        })
    }
}