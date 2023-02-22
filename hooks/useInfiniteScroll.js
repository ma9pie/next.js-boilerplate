import { useEffect } from "react";
import useThrottle from "@/hooks/useThrottle";

/**
 * 무한 스크롤 hooks
 * @param {Function} callback : 페이지 또는 요소 하단에 도달 시 실행할 함수
 * @param {Object} ref : 접근할 DOM 요소
 * ref 파라미터가 없을 시 해당 컴포넌트 또는 페이지 전체 무한 스크롤
 */
function useInfiniteScroll(callback = () => {}, ref = {}) {
  const element = ref.current || window;

  const scrollEvent = useThrottle(() => {
    const target = ref.current || document.documentElement;
    const scrollTop = target.scrollTop;
    const clientHeight = target.clientHeight;
    const scrollHeight = target.scrollHeight;

    if (scrollTop + 1 >= scrollHeight - clientHeight) {
      callback();
    }
  }, 100);

  useEffect(() => {
    element.addEventListener("scroll", scrollEvent);
    return () => {
      element.removeEventListener("scroll", scrollEvent);
    };
  }, [callback]);
}

export default useInfiniteScroll;
