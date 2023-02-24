import ReactDOM from "react-dom";
import Alert from "@/components/common/Modals/Alert";
import BottomSheet from "@/components/common/Modals/BottomSheet";
import Confirm from "@/components/common/Modals/Confirm";
import ToastPopup from "@/components/common/Modals/ToastPopup";
import Modal from "@/components/common/Modals/index";

const ModalUtils = {
  hashMap: new Map(),
};

// node 추가
ModalUtils.appendNode = (Component, data = {}, id) => {
  const { key } = data;
  const props = { isOpen: true };
  const container = document.getElementById(id);
  if (!container) return;
  const node = document.createElement("div");
  container.append(node);

  props.onRequestClose = () => {
    props.isOpen = false;
    ReactDOM.render(<Component {...props} {...data}></Component>, node);
    setTimeout(() => {
      node.remove();
      if (key) {
        ModalUtils.hashMap.delete(key);
      }
    }, 200);
  };

  props.isOpen = true;
  ReactDOM.render(<Component {...props} {...data}></Component>, node);

  if (key) {
    node.id = key;
    ModalUtils.hashMap.set(key, props);
  }
};

// node 변경
ModalUtils.changeNode = (Component, data = {}, id) => {
  const { key } = data;
  const props = { isOpen: true };
  const node = document.getElementById(id);

  props.unmount = () => node.remove();
  props.onRequestClose = () => {
    props.isOpen = false;
    ReactDOM.render(<Component {...props} {...data}></Component>, node);
    setTimeout(() => {
      props.unmount();
    }, 200);
  };
  ReactDOM.render(<Component {...props} {...data}></Component>, node);
};

// close
ModalUtils.close = (key) => {
  const node = document.getElementById(key);
  if (node) {
    ModalUtils.hashMap.get(key).onRequestClose();
  }
};

// empty modal
ModalUtils.openModal = (data) => {
  ModalUtils.appendNode(Modal, data, "modal");
};

// alert
ModalUtils.openAlert = (data) => {
  ModalUtils.appendNode(Alert, data, "alert-modal");
};

// confirm
ModalUtils.openConfirm = (data) => {
  ModalUtils.appendNode(Confirm, data, "confirm-modal");
};

// toast-popup
ModalUtils.openToastPopup = (data) => {
  ModalUtils.changeNode(ToastPopup, data, "toast-popup");
};

// bottom-sheet
let bottomSheetProps;
ModalUtils.openBottomSheet = (data) => {
  ModalUtils.changeNode(BottomSheet, data, "bottom-sheet");
};
ModalUtils.closeBottomSheet = () => {
  const node = document.getElementById("bottom-sheet");
  bottomSheetProps.isOpen = false;
  ReactDOM.render(<BottomSheet {...bottomSheetProps}></BottomSheet>, node);
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(node);
  }, 200);
};

export default ModalUtils;
