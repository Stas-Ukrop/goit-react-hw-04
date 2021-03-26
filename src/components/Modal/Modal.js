import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ children, setShowModal }) => {
  const ModalWind = document.querySelector("#modal-root");

  useEffect(() => {
    window.addEventListener("keydown", handleChange);
  }, []);

  useEffect(() => {
    // componentWillUnmount
    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, []);

  const handleChange = (e) => {
    if (e.code === "Escape") {
      setShowModal(false);
    }
  };
  const backDropClick = (event) => {
    if (event.currentTarget === event.target) {
      setShowModal(false);
    }
  };
  return createPortal(
    <div className="Overlay" onClick={backDropClick}>
      <div className="Modal">{children}</div>
    </div>,
    ModalWind
  );
};
export default Modal;

Modal.propTypes = {
  setShowModal: PropTypes.func,
};
