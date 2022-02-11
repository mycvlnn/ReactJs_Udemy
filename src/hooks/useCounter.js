import { useState, useEffect } from "react";

const useCounter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const value = forward ? 1 : -1;
      setCounter((prevCounter) => prevCounter + value);
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};

export default useCounter;
