import {
  IPCHECK_ERROR,
  IPCHECK_LOADING,
  IPCHECK_SUCCESS,
} from "./ipcheck.types";
import axios from "axios";

export const postAction = (dataObj) => async (dispatch) => {
  console.log(dataObj);
  dispatch({ type: IPCHECK_LOADING });
  try {
    let res = await axios.post(`http://localhost:8080/ip`, dataObj);
    console.log("res", res.data);
    dispatch({
      type: IPCHECK_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: IPCHECK_ERROR });
  }
};
