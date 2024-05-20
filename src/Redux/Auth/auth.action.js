import axios from "axios"
import { API_BASE_URL } from "../../config/api"
import { EVENT_FAILURE, EVENT_REQUEST, EVENT_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./auth.actionType"


export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data}=await axios.post(`${API_BASE_URL}/lot/signin`,loginData.data)
        if(data.token){
            localStorage.setItem("jwt",data.token)
        }
        console.log("Login success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    } catch (error) {
        console.log("-------->",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
        
    }
}


export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data}=await axios.post(`${API_BASE_URL}/lot/signup`,loginData.data)
        if(data.token){
            localStorage.setItem("jwt",data.token)
        }
        console.log("Regiser success",data)
        dispatch({type:LOGIN_SUCCESS,payload:data.token})

    } catch (error) {
        console.log("-------->",error)
        dispatch({type:LOGIN_FAILURE,payload:error})
        
    }
}


export const eventRegisterAction = (eventRegister) => async (dispatch) => {
    dispatch({ type: EVENT_REQUEST });
    try {
        const formData = new FormData();
        Object.keys(eventRegister.data).forEach(key => {
            formData.append(key, eventRegister.data[key]);
        });

        // Append the file separately if it exists
        if (eventRegister.data.file) {
            formData.append("file", eventRegister.data.file);
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
                'Content-Type': 'multipart/form-data',
            },
        };

        const { data } = await axios.post(`${API_BASE_URL}/api/users/event-register`, formData, config);

        if (data.token) {
            localStorage.setItem("jwt", data.token);
        }
        console.log("Register Event", data);
        dispatch({ type: EVENT_SUCCESS, payload: data });
    } catch (error) {
        console.log("-------->", error);
        dispatch({ type: EVENT_FAILURE, payload: error });
    }
};
