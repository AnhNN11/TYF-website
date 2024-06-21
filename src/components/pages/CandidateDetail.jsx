import { Col, Row } from "antd";
import React from "react";
import SampleProfile from "../Profile/SampleProfile";
import Skills from "../Profile/Skills";
import Certifications from "../Profile/Certifications";
import Profile from "../Profile/Profile";

function CandidateDetail() {
  const { state } = useLocation();
  const { candidate } = state || {};
  return (
    <div>
      {" "}
      <Row gutter={20} className="mt-4">
        <Col span={17}>
          <Profile candidate={candidate}></Profile>
        </Col>
        <Col span={7}>
          <SampleProfile></SampleProfile>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={17} className="mt-4">
          <Skills></Skills>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={17} className="mt-4">
          <Certifications></Certifications>
        </Col>
      </Row>
    </div>
  );
}

export default CandidateDetail;
