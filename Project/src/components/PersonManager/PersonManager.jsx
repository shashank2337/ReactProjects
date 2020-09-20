import React from "react";
import { Row, Col } from "reactstrap";

import PersonForm from "./PersonForm/PersonForm.jsx";
import PersonList from "./PersonList/PersonList.jsx";

const PersonManager = (props) => {
  return (
    <Row>
      <Col>
        <PersonForm />
      </Col>

      <Col>
        <PersonList />
      </Col>
    </Row>
  );
};

export default PersonManager;
