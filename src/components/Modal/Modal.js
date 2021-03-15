import React from "react";
import "./Modal.css";
import ReactDom from "react-dom";
import Button from "../Button/Button";

export default function Modal({ isModalOpen, onClose, children }) {
  if (!isModalOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        {children}
        <Button onClick={() => onClose()}> Close </Button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
