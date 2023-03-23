import React from "react";
import { Row, Col } from "react-bootstrap";

import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Row className="d-flex">
      <Col className="pe-0">
        <Sidebar />
      </Col>
      <Col xs={11} className={styles.container}>
        <div>{children}</div>
      </Col>
    </Row>
  );
};

export default Layout;
