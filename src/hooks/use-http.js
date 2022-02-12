import { useReducer, useCallback, useEffect, useRef } from "react";

function httpReducer(state, action) {
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
}

function useHttp(requestFunction, startWithPending = false) {
  const isUnmounted = useRef(false);
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        if (isUnmounted.current) return;
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        if (isUnmounted.current) return;
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  useEffect(() => {
    //Clean up before component unmounted
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
