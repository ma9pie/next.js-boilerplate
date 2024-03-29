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
  const props = { isOpen: true };
  const node = document.getElementById(id);

  props.unmount = () => ReactDOM.unmountComponentAtNode(node);
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

// modal
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

// bottom-sheet
ModalUtils.openBottomSheet = (data) => {
  ModalUtils.appendNode(BottomSheet, data, "bottom-sheet");
};

// toast-popup
ModalUtils.openToastPopup = (data) => {
  ModalUtils.changeNode(ToastPopup, data, "toast-popup");
};

export default ModalUtils;
