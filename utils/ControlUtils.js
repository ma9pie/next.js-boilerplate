const ControlUtils = () => {};

let isFirstRun = true;

/**
 * 더블클릭 중복실행 방지 유틸
 * @param {Function} callback : 실행 할 함수
 * @param {Function} timer (@default 1000ms) : 타이머 시간
 * @use API를 요청하는 버튼같은 곳에서만 사용해주세요.
 * @caution isFirstRun === 공통변수
 */
ControlUtils.doubleClickPrevention = (callback, timer) => {
  if (!timer) timer = 1000;
  if (isFirstRun) {
    if (callback) callback();
    isFirstRun = false;
    setTimeout(() => {
      isFirstRun = true;
    }, timer);
  }
};

export default ControlUtils;
