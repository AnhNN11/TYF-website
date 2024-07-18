import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import heroImage from "./images/heroImage.png";
import backgroundImage from "./images/background.png";

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-100 relative">
      {/* New background image */}
      <img
        src={backgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 filter"
      />
      <Row className="relative z-10 pb-20 mt-20">
        <Col xs={24} sm={12}>
          <div className="text-container">
            <h1 className="responsive-heading">Chào mừng đến</h1>
            <span className="company-name font-bromega-bold-italic">TYF Company</span>
            <p className="p-heading">
              Xin chào và cảm ơn bạn đã dành thời gian khám phá về công ty TYF của
              chúng tôi. Đây là công ty với dịch vụ trông trẻ và gia sư, chúng tôi
              tự tin có thể nếu bạn an tâm và hài lòng về dịch vụ này, ươm mầm cho
              con trẻ của bạn.
            </p>
            <ul className=" mt-5">
              <li>
                <Link to="#" className="button">
                  Bắt đầu
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div>
            <img
              src={heroImage}
              alt="hero"
              className="max-w-full h-auto object-cover rounded-lg pt-20 img"
              style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
