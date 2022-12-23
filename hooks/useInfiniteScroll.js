import { throttle } from "lodash";
import { useEffect } from "react";

function useInfiniteScroll(callback = () => {}) {
  useEffect(() => {
    const scrollEvent = throttle(() => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight + 1 >= scrollHeight) {
        callback();
      }
    }, 100);

    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [callback]);
}

export default useInfiniteScroll;
