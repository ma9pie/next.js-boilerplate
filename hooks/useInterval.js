import { useEffect, useRef } from "react";

/**
 * 타이머 hooks
 * @param {Function} callback : 콜백함수
 * @param {Number} delay : 딜레이(ms)
 */
function useInterval(callback, delay) {
  const ref = useRef();

  const tick = () => {
    ref.current();
  };

  // callback 변경 시 ref.current 업데이트
  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
