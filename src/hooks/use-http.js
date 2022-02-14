import { useCallback, useReducer, useRef } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "success",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "failed",
    };
  }
  return state;
};

const useHttp = (requestFn, startWithPending) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFn(requestData);
        dispatch({
          type: "SUCCESS",
          responseData,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Some thing went wrong!",
        });
      }
    },
    [requestFn]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
