import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "./images/heroImage.png";
import ayroui from "./images/brands/ayroui.svg";
import graygrids from "./images/brands/graygrids.svg";
import uideck from "./images/brands/uideck.svg";
import backgroundImage from "./images/background.png"; // adjust the path as needed
import { useAnimation, useInView } from "framer-motion";
import { Col, Row } from "antd";


const Hero = () => {
  return (
    
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-100 relative">
      {/* New background image */}
      <img
        src={backgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 filter"
      />
      <Row className="relative z-10 pb-20 mt-5">
        <Col  span={12}>
          <div className="text-container">
            <h1 className="responsive-heading ">Chào mừng đến</h1>
            <span className="company-name font-bromega-bold-italic">TYF Company</span>
            <p className="p-heading">
              Xin chào và cảm ơn bạn đã dành thời gian khám phá về công ty TYF của
              chúng tôi. Đây là công ty với dịch vụ trông trẻ và gia sư, chúng tôi
              tự tin có thể nếu bạn an tâm và hài lòng về dịch vụ này, ươm mầm cho
              con trẻ của bạn.
            </p>
            <ul className=" mt-5">
                    <li >
                      <Link
                        to="#"
                        className="button"
                      >
                        Bắt đầu
                      </Link>
                    </li>
                  </ul>
          </div>
        </Col>
        <Col span={12}>
        <div>
        <img
            src={heroImage}
            alt="hero"
            className="max-w-full h-auto object-cover rounded-lg pt-20 img"
            style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}
          />
        </div>
          
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
