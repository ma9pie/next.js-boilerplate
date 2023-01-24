import ReactDOM from "react-dom";
import Modal from "@/components/common/Modals";
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
 * @param {ReactElement} component : 컴포넌트
 * @param {Function} onAfterOpen : 모달이 열린 후 실행 될 함수
 * @param {Function} onAfterClose : 모달이 닫힌 후 실행 될 함수
 * @param {Function} onRequestConfirm : 확인버튼을 누른 후 실행 될 함수
 * @param {Function} onRequestCancle : 취소버튼을 누른 후 실행 될 함수
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
  component: () => null,
  onAfterOpen: () => {},
  onAfterClose: () => {},
  onRequestConfirm: () => {},
  onRequestCancle: () => {},
};

/**
 * 모달 렌더링 함수
 */
ModalUtils.render = (Component, props, id) => {
  const target = document.getElementById(id);
  props.unmount = () => ReactDOM.unmountComponentAtNode(target);
  props.onRequestClose = () => {
    ReactDOM.render(<Component {...props} isOpen={false}></Component>, target);
    setTimeout(() => {
      props.unmount();
    }, 200);
  };
  ReactDOM.render(<Component {...props} isOpen={true}></Component>, target);
};

/**
 * [모달]
 * 빈 모달창
 */
ModalUtils.openModal = (obj) => {
  const props = { ...defaultProps, ...obj };
  const target = document.getElementById("modal");
  props.unmount = () => ReactDOM.unmountComponentAtNode(target);
  props.onRequestClose = () => {
    ReactDOM.render(
      <Modal {...props} isOpen={false}>
        {props.component()}
      </Modal>,
      target
    );
    setTimeout(() => {
      props.unmount();
    }, 200);
  };
  ReactDOM.render(
    <Modal {...props} isOpen={true}>
      {props.component()}
    </Modal>,
    target
  );
};

/**
 * [Alert 모달]
 * 확인 버튼만 있는 모달창
 */
ModalUtils.openAlert = (obj) => {
  const props = { ...defaultProps, ...obj };
  ModalUtils.render(AlertModal, props, "alert-modal");
};

/**
 * [Confirm 모달]
 * 취소, 확인 버튼이 있는 모달창
 */
ModalUtils.openConfirm = (obj) => {
  const props = { ...defaultProps, ...obj };
  ModalUtils.render(ConfirmModal, props, "confirm-modal");
};

/**
 * [Toast 팝업]
 * 하단 중앙에 뜨는 토스트 팝업
 */
ModalUtils.openToastPopup = (obj) => {
  const props = { ...obj };
  ModalUtils.render(ToastPopup, props, "toast-popup");
};

/**
 * [BottomSheet]
 * 아래에서 올라오는 페이지 형태의 모달
 */
let bottomSheetProps;
ModalUtils.openBottomSheet = (obj) => {
  const props = { ...defaultProps, ...obj };
  bottomSheetProps = { ...props };
  ModalUtils.render(BottomSheet, props, "bottom-sheet");
};
ModalUtils.closeBottomSheet = () => {
  const target = document.getElementById("bottom-sheet");
  bottomSheetProps.isOpen = false;
  ReactDOM.render(<BottomSheet {...bottomSheetProps}></BottomSheet>, target);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(target);
  }, 200);
};

export default ModalUtils;
