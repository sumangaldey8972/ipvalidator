import {
  IPCHECK_ERROR,
  IPCHECK_LOADING,
  IPCHECK_SUCCESS,
} from "./ipcheck.types";

const initState = {
  loading: "",
  error: "",
  status: "",
};

export const ipcheckReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IPCHECK_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case IPCHECK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case IPCHECK_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        status: payload,
      };
    }
    default: {
      return state;
    }
  }
};
