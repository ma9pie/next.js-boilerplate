import { useEffect } from "react";

/**
 * 바깥영역 클릭 감지 hooks
 * @param {Object} ref : 요소
 * @param {Function} callback : 콜백함수
 */
const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useClickOutside;
