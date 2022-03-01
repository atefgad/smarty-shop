import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.scss";

function AuthModal(props) {
  return (
    <Modal {...props} centered animation={true}>
      <Modal.Header closeButton>
        {/* <Modal.Title>Modal heading</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}

export default AuthModal;
