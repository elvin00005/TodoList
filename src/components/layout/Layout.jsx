import React from "react";
import { Row, Col } from "react-bootstrap";

import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Row className="d-flex ">
      <Col>
        <Sidebar />
      </Col>
      <Col xs={11}>
        <div>{children}</div>
      </Col>
    </Row>
  );
};

export default Layout;
