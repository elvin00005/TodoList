import { useState } from "react";

import Layout from "../components/layout/Layout";
import Modal from "../components/modal/ModalForm";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <h1 className="text-center">My TODO</h1>
      <Modal show={show} handleClose={handleClose} handleShow={handleShow} />
    </Layout>
  );
};

export default Main;
