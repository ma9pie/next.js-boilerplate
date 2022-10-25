import ReactDOM from "react-dom";
import Alert from "@/components/common/Modal/Alert";

const ModalUtils = () => {};

/**
 * @param {String} top(@default "50%") : top
 * @param {String} left(@default "50%") : left
 * @param {String} minWidth (@default "450px") : 최소 너비
 * @param {String} title(@default "알림") : 제목
 * @param {String} message(@default "") : 메시지
 * @param {String} confirmBtnText(@default "확인") : 확인 버튼 텍스트
 * @param {String} cancleBtnText(@default "취소") : 취소 버튼 텍스트
 * @param {String} maxAge(@default -1) : 더이상 보지 않기 버튼 텍스트
 * @param {String} cookieName(@default "") : 더이상 보지 않기 버튼 텍스트
 * @param {String} doNotSeeText(@default "오늘 하루 보지 않기") : 더이상 보지 않기 버튼 텍스트
 * @param {ReactElement} component : 컴포넌트
 * @param {Function} onAfterOpen : 모달이 열린 후 실행 될 함수
 * @param {Function} onAfterClose : 모달이 닫힌 후 실행 될 함수
 * @param {Function} onRequestConfirm : 확인버튼을 누른 후 실행 될 함수
 * @param {Function} onRequestCancle : 취소버튼을 누른 후 실행 될 함수
 * @param {Function} onRequestDoNotSee : 더이상 보지않기를 누른 후 실행될 함수
 */
const defaultProps = {
  isOpen: true,
  top: "50%",
  left: "50%",
  minWidth: "450px",
  title: "알림",
  message: "",
  confirmBtnText: "확인",
  cancleBtnText: "취소",
  maxAge: -1,
  cookieName: "",
  doNotSeeText: "오늘 하루 보지 않기",
  component: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestClose: () => {},
  onRequestConfirm: () => {},
  onRequestCancle: () => {},
  onRequestDoNotSee: () => {},
};

/**
 * [Close All Modal]
 * 모달 전체 닫기
 */
ModalUtils.closeAllModal = () => {
  const alertModal = document.getElementById("alert-modal");
  ReactDOM.render(<></>, alertModal);
};

/**
 * [Alert 모달]
 * 확인 버튼만 있는 모달창
 */
ModalUtils.openAlert = (obj) => {
  let props = { ...defaultProps, ...obj };
  const modal = document.getElementById("alert-modal");
  const onRequestClose = () => {
    props.isOpen = false;
    ReactDOM.render(<Alert {...props}></Alert>, modal);
  };
  props.onRequestClose = onRequestClose;
  ReactDOM.render(<Alert {...props}></Alert>, modal);
};

export default ModalUtils;
