import React from "react";
import { useClickOutside } from "core/hooks/useClickOutSide";
import "./styles/styles.scss";

const Modal = ({ handleClose, show, content, onClickOutside }) => {
  const clickRef = React.useRef();
  const onHandleClose = () => {
    handleClose && handleClose();
  };
  useClickOutside(clickRef, onClickOutside);
  return (
    <section className="modal-main" ref={clickRef}>
      <p>{content}</p>

      <button
        type="button"
        onClick={() => {
          onHandleClose();
        }}
      >
        Close
      </button>
    </section>
  );
};

export default Modal;
