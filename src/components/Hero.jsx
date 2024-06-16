import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "./images/heroImage.png";
import ayroui from "./images/brands/ayroui.svg";
import graygrids from "./images/brands/graygrids.svg";
import uideck from "./images/brands/uideck.svg";
import backgroundImage from "./images/background.png"; // adjust the path as needed

const Hero = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-100 relative">
      {/* New background image */}
      <img
        src={backgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-fit z-0 opacity-30 filter "
      />
      <div className="relative pt-[120px] pb-[110px] lg:pt-[150px] z-10">
        <div className="container mx-auto max-sm:px-2">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                >
                  <h1
                    className="sm:text-9xl text-5xl from-blue-500 to-emerald-600 mb-3 xl:mt-20
                    leading-snug sm:text-[52px] lg:text-[50px] xl:text-[52px] font-BROmegaVN-Light"
                  >
                    Chào mừng đến <br />
                  </h1>
                  <div className="font-BROmegaVN-Regular">
                    <span className="sm:text-8xl text-7xl xl:my-50 font-BROmegaVN-Regular">
                      <span className="text-blue-500 cursor-pointer my-40">
                        TYF Company
                      </span>{" "}
                      <br />
                    </span>
                  </div>

                  <p className="text-gray-600 text-lg my-9 max-w-[480px] text-justify">
                    Xin chào và cảm ơn bạn đã dành thời gian khám phá về công ty
                    TYF của chúng tôi. Đây là công ty với dịch vụ trông trẻ và
                    gia sư, chúng tôi tự tin có thể nếu bạn an tâm và hài lòng
                    về dịch vụ này,ươm mầm cho con trẻ của bạn.
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                >
                  <ul className="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="#"
                        className="bg-blue-500 border-solid border-2 border-blue-500 hover:border-blue-700 hover:bg-blue-700 transition ease-in-out delay-100
                        inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base text-white sm:px-10 lg:px-8 xl:px-10"
                      >
                        Bắt đầu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="border-solid border-2 border-blue-500 text-black hover:bg-blue-500 hover:text-white transition ease-in-out delay-100
                        ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-centersm:px-10 lg:px-8 xl:px-10"
                      >
                        Tài liệu
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="clients pt-16"
                >
                  <h6 className="text-body-color mb-2 flex items-center text-xs text-gray-500">
                    Some Of Our Clients
                    <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                  </h6>
                  <div className="flex items-center">
                    <div className="mr-4 w-full py-3">
                      <img src={ayroui} alt="ayroui" />
                    </div>
                    <div className="mr-4 w-full py-3">
                      <img src={graygrids} alt="graygrids" />
                    </div>
                    <div className="mr-4 w-full py-3">
                      <img src={uideck} alt="uideck" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:ml-auto lg:text-right after:bg-[url('./small.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                  hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.25 }}
                className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
              >
                <img
                  src={heroImage}
                  alt="hero"
                  className="w-full h-full object-cover"
                  style={{
                    width: "700px",
                    height: "700px",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
