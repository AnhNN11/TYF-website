import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import TeachImage from "./images/gia-su.png";

const CallToAction = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation(isInView);

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-customBlue"></div>
      <section className="py-20 lg:py-[120px]">
        <div className="bg-[#00ADEE] relative sm:-mt-10 sm:-mb-10 overflow-x-hidden rounded py-12 px-8 md:p-[70px]">
          <div className="-mx-4 flex flex-wrap items-center">
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -75 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-full px-4 lg:w-1/2 relative z-10"
            >
              <h2 className="text-3xl font-bromega-bold leading-tight text-white sm:text-[38px]">
                Ươm mầm tương lai của con bạn!
              </h2>
              <p className="text-white text-lg text-justify font-bromega-light">
                Xin chào và cảm ơn bạn đã dành thời gian khám phá về công ty TYF
                của chúng tôi. Đây là công ty với dịch vụ trông trẻ và gia sư,
                chúng tôi tự tin có thể nếu bạn an tâm và hài lòng về dịch vụ này,
                ươm mầm cho con trẻ của bạn.
              </p>
              <button
                href="#"
                className="mt-10 hover:bg-blue-500 my-1 mr-4 inline-block rounded bg-white bg-opacity-[30%] py-4 px-6 text-base font-bromega-light text-white transition hover:bg-opacity-100 md:px-9 lg:px-6 xl:px-9"
              >
                Đăng ký ngay
              </button>
            </motion.div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 75 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative z-10"
              >
                <img src={TeachImage} alt="" />
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <span className="absolute top-0 left-0">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="#FFA500"
                />
              </svg>
            </span>
            <span className="absolute bottom-0 right-0">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="173" cy="178.5" rx="173" ry="178.5" fill="#FFA500" />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-customBlue"></div>
    </div>
  );
};

export default CallToAction;
