import React from "react";
import { Modal } from "react-bootstrap";
import "./Styles.scss";

function AuthModal(props) {
  return (
    <Modal {...props} centered animation={true}>
      <Modal.Header closeButton />
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}

export default AuthModal;
