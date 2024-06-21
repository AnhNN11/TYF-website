import { Col, Row } from "antd";
import React from "react";
import SampleProfile from "../Profile/SampleProfile";
import Skills from "../Profile/Skills";
import Certifications from "../Profile/Certifications";
import Profile from "../Profile/Profile";
import NavbarLogin from "../NavbarLogin";
import Footer from "../Footer";

function CandidateDetail() {
  return (
    <>
      <NavbarLogin/>
      <div className="p-8 overflow-hidden bg-gradient-to-br from-blue-100">
      {" "}
      <Row gutter={20} className="mt-4">
        <Col span={18}>
          <Profile></Profile>
        </Col>
        <Col span={6}>
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
    <Footer/>
    </>
    
  );
}

export default CandidateDetail;
