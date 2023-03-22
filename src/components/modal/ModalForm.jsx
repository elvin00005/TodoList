import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormTodo from "../form/FormTodo";

const ModalForm = ({ show, handleClose, handleShow }) => {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add TODO
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add TODO</Modal.Title>
        </Modal.Header>
        <FormTodo />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
