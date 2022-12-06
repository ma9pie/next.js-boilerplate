import styled from "@emotion/styled";
import { debounce } from "lodash";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import AlertModal from "@/components/common/Modals/AlertModal";
import BottomSheet from "@/components/common/Modals/BottomSheet";
import ConfirmModal from "@/components/common/Modals/ConfirmModal";
import ControlUtils from "@/utils/ControlUtils";
import useDebounce from "@/hooks/useDebounce";
import InfoSvg from "@/svg/InfoSvg";
import SuccessSvg from "@/svg/SuccessSvg";
import WarningSvg from "@/svg/WarningSvg";

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
 * [Toast 팝업]
 */
ModalUtils.openToast = (obj) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
  `;
  const SvgBox = styled.div``;
  const TextBox = styled.div`
    margin-left: 8px;
  `;
  const Text = styled.p`
    font: var(--body14);
    font-weight: 400;
    color: white;
  `;

  const getSvg = (type) => {
    switch (type) {
      case "success":
        return (
          <SuccessSvg
            width="24px"
            height="24px"
            color="var(--green500)"
          ></SuccessSvg>
        );
      case "error":
        return (
          <WarningSvg
            width="24px"
            height="24px"
            color="var(--red500)"
          ></WarningSvg>
        );
      case "etc":
        return <InfoSvg width="24px" height="24px" color="white"></InfoSvg>;
      default:
        return null;
    }
  };

  toast.dismiss();
  toast.clearWaitingQueue();

  toast(() => {
    return (
      <Wrapper>
        <SvgBox>{getSvg(obj.type) && getSvg(obj.type)}</SvgBox>
        <TextBox>
          {obj.message?.split("\n").map((message, key) => (
            <Text key={key} width={obj.width}>
              {message}
            </Text>
          ))}
        </TextBox>
      </Wrapper>
    );
  });
};

export default ModalUtils;
