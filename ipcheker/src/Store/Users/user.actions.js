import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./user.types";
import axios from "axios";

export const signUpAction = (credsObj) => async (dispatch) => {
  dispatch({
    type: SIGNUP_LOADING,
  });
  try {
    let res = await axios.post("http://localhost:8080/user/signup", credsObj);
    console.log("res data", res);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: { obj: credsObj, msg: res.data.message },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SIGNUP_ERROR,
      payload: err.response.data.message,
    });
  }
};

export const loginAction = (credsObj) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  try {
    let res = await axios.post("http://localhost:8080/user/login", credsObj);
    console.log("res data", res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { obj: credsObj, msg: res.data.message },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response.data.message,
    });
  }
};
