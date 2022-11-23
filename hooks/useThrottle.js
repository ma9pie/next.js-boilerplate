import { useCallback } from "react";

let timeout;
const useThrottle = (func, wait) => {
  return useCallback(
    (...args) => {
      const context = this;
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context, args);
          timeout = null;
        }, wait || 300);
      }
    },
    [func, wait]
  );
};

export default useThrottle;
