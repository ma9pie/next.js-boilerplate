import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import AlertModal from "@/components/common/Modals/AlertModal";
import BottomSheet from "@/components/common/Modals/BottomSheet";
import ConfirmModal from "@/components/common/Modals/ConfirmModal";
import ToastPopup from "@/components/common/Modals/ToastPopup";

const ModalUtils = () => {};

/**
 * @param {String} top(@default "50%") : top
 * @param {String} left(@default "50%") : left
 * @param {String} minWidth (@default "325px") : 최소 너비
 * @param {String} title(@default "알림") : 제목
 * @param {String} message(@default "메시지") : 메시지
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
  transform: "translate(-50%,-50%)",
  overflow: "hidden",
  minWidth: "325px",
  title: "알림",
  message: "메시지",
  confirmBtnText: "확인",
  cancleBtnText: "취소",
  maxAge: -1,
  cookieName: "",
  doNotSeeText: "오늘 하루 보지 않기",
  component: () => {},
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestConfirm: () => {},
  onRequestCancle: () => {},
  onRequestDoNotSee: () => {},
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
    ReactDOM.render(<AlertModal {...props}></AlertModal>, modal);
  };
  props.onRequestClose = onRequestClose;
  ReactDOM.render(<AlertModal {...props}></AlertModal>, modal);
};

/**
 * [Confirm 모달]
 * 취소, 확인 버튼이 있는 모달창
 */
ModalUtils.openConfirm = (obj) => {
  let props = { ...defaultProps, ...obj };
  const modal = document.getElementById("confirm-modal");
  const onRequestClose = () => {
    props.isOpen = false;
    ReactDOM.render(<ConfirmModal {...props}></ConfirmModal>, modal);
  };
  props.onRequestClose = onRequestClose;
  ReactDOM.render(<ConfirmModal {...props}></ConfirmModal>, modal);
};

/**
 * [BottomSheet]
 * 아래에서 올라오는 페이지 형태의 모달
 */
let onRequestCloseBottomSheet;
ModalUtils.openBottomSheet = (obj) => {
  let props = { ...defaultProps, ...obj };
  const modal = document.getElementById("bottom-sheet");
  const onRequestClose = () => {
    props.isOpen = false;
    ReactDOM.render(<BottomSheet {...props}></BottomSheet>, modal);
  };
  props.onRequestClose = onRequestClose;
  onRequestCloseBottomSheet = onRequestClose;
  ReactDOM.render(<BottomSheet {...props}></BottomSheet>, modal);
};
ModalUtils.closeBottomSheet = () => {
  if (onRequestCloseBottomSheet) {
    onRequestCloseBottomSheet();
  }
};

/**
 * [ToastPopup]
 * 하단 중앙에 뜨는 토스트 팝업
 */
let toastTimeOutId = -1;
let isOpenToastPopup = null;
const renderToastPopup = (props) => {
  const modal = document.getElementById("toast-popup");
  ReactDOM.render(<ToastPopup {...props}></ToastPopup>, modal);
};
ModalUtils.openToastPopup = (obj) => {
  let props = { ...obj };
  let delay = 0;
  props.onRequestClose = () => renderToastPopup({ ...props, isOpen: false });

  if (isOpenToastPopup) {
    delay = 100;
    isOpenToastPopup = false;
  } else {
    delay = 0;
    isOpenToastPopup = null;
  }

  renderToastPopup({ ...props, isOpen: isOpenToastPopup });
  clearTimeout(toastTimeOutId);
  setTimeout(() => {
    isOpenToastPopup = true;
    renderToastPopup({ ...props, isOpen: isOpenToastPopup });
  }, delay);

  toastTimeOutId = setTimeout(() => {
    isOpenToastPopup = false;
    renderToastPopup({ ...props, isOpen: isOpenToastPopup });
  }, 2000);
};

export default ModalUtils;
