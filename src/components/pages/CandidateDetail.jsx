import { Col, Row } from "antd";
import React from "react";
import SampleProfile from "../Profile/SampleProfile";
import Skills from "../Profile/Skills";
import Certifications from "../Profile/Certifications";
import Profile from "../Profile/Profile";

function CandidateDetail() {
  return (
    <div className="p-8">
      <Row gutter={20} className="mt-4">
        <Col span={18}>
          <Row gutter={20}>
            <Col span={15}>
              <Profile></Profile>
            </Col>
            <Col span={9}>
              <Certifications></Certifications>
            </Col>
          </Row>

          <Col span={30} className="mt-4">
            <Skills></Skills>
          </Col>
        </Col>
        <Col span={6}>
          <SampleProfile></SampleProfile>
        </Col>
      </Row>
      <Row gutter={20}></Row>
    </div>
  );
}

export default CandidateDetail;
