import * as types from "./actionTypes";

const loginRequest=()=>{
    return{
        type:types.USER_LOGIN_REQUEST,
    };
};

const loginSuccess=(payload)=>{
    return {
        type:types.USER_LOGIN_SUCCESS,
        payload,
    };
};

const loginFailure=()=>{
    return {
        type:types.USER_LOGIN_FAILURE,
    };
};

export {loginRequest,loginFailure,loginSuccess}