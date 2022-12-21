import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // need same thing back everytime; container to get back same thing
  if (!elRef.current) {
    elRef.current = document.createElement("div"); // create div once
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); // clean up when modal is done; when anything is returned in effect
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
