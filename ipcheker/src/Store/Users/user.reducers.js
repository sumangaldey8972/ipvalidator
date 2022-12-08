import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./user.types";

const name = localStorage.getItem("isAuth") || "";

const initState = {
  loading: false,
  error: false,
  data: [],
  msg: [],
  isAuth: false,
  name: name,
};

export const userReducer = (state = initState, { type, payload }) => {
  console.log("payload",payload);
  switch (type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        msg: payload,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.obj,
        msg: payload.msg,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        msg: payload,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("isAuth", payload.obj.email);
      return {
        ...state,
        loading: true,
        error: false,
        data: payload.obj,
        msg: payload.msg,
        name: payload.obj.email,
      };
    }
    default: {
      return state;
    }
  }
};
