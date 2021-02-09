import React from "react";
import {Modal} from 'react-bootstrap';

export default function MyModal(props) {
  const {title,children,openModal,setOpenModal} = props;
  return (
    <Modal show={openModal} onHide={setOpenModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
}
