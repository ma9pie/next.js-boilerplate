import { useCallback } from "react";

let timeout;
const useDebounce = (func, wait) => {
  return useCallback(
    (...args) => {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait || 300);
    },
    [func, wait]
  );
};

export default useDebounce;
