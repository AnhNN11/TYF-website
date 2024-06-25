import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "./images/heroImage.png";
import ayroui from "./images/brands/ayroui.svg";
import graygrids from "./images/brands/graygrids.svg";
import uideck from "./images/brands/uideck.svg";
import backgroundImage from "./images/background.png"; // adjust the path as needed
import { useAnimation, useInView } from "framer-motion";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-100 relative ">
      {/* New background image */}
      <img
        src={backgroundImage}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 filter "
      />
      <div className="relative pt-[120px] pb-[110px] lg:pt-[150px] z-1 md:flex md:shrink-0 ">
        <div className="container mx-auto max-sm:px-2 ">
          <div className="flex flex-wrap -mx-4 md:flex ">
            <div className="w-full px-4 lg:w-6/12 ">
              <div className="hero-content ml-2">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                >
                  <h1
                    className="sm:text-9xl text-5xl from-customBlue to-emerald-600 mb-3 xl:mt-20
                    leading-snug sm:text-[52px] lg:text-[50px] xl:text-[52px] font-BROmegaVN-Light z-20"
                  >
                    Chào mừng đến <br />
                  </h1>
                  <div
                    ref={ref}
                    className="font-bromega-bold-italic lg:mt-100px"
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      animate={mainControls}
                      transition={{ duration: 0.5, delay: 0.35 }}
                    >
                      <div className="sm:text-8xl text-7xl xl:my-50 relative ">
                        <span className="text-customBlue cursor-pointer ">
                          TYF Company
                          <motion.div
                            variants={{
                              hidden: { left: 0 },
                              visible: { left: "100%" },
                            }}
                            initial="hidden"
                            animate={slideControls}
                            transition={{
                              duration: 0.75,
                              ease: "easeIn",
                              delay: 0.1,
                            }}
                            style={{
                              position: "absolute",
                              top: 4,
                              bottom: -20,
                              left: 0,
                              right: 0,
                              background: "#00aeef",
                              zIndex: 20,
                            }}
                          />
                        </span>{" "}
                        <br />
                      </div>
                    </motion.div>
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
                        className="bg-customBlue border-solid border-2 border-customBlue hover:border-blue-500 hover:bg-blue-500 transition ease-in-out delay-100
                        inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base text-white sm:px-10 lg:px-8 xl:px-10"
                      >
                        Bắt đầu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="border-solid border-2 border-customBlue text-black hover:bg-blue-500 hover:text-white transition ease-in-out delay-100
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

            {
              <div className="w-full lg:w-6/12 lg:text-right flex justify-center lg:justify-end mt-8 lg:mt-0 ">
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="relative z-10"
                >
                  <img
                    src={heroImage}
                    alt="hero"
                    className="max-w-full h-auto object-cover rounded-lg "
                    style={{ width: "100%", maxWidth: "600px" }}
                  />
                </motion.div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
