import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from "./types"

//Register user
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })   
            );
};

//Login user (get token)
export const loginUser = (userData) => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            //Save to local storage
            const { token } = res.data;
            //Set token to ls
            localStorage.setItem('jwtToken',token);
            // set token to auth header
            setAuthToken(token);
            // decode token to get user data
            const decoded = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

//log user out
export const logoutUser = () => dispatch => {
    //remove token from locasltorage
    localStorage.removeItem('jwtTokoen');
    //remove the auth header for future requests
    setAuthToken(false);
    // set current user to {} witch will set isauthenticated to false
    dispatch(setCurrentUser({}));
}