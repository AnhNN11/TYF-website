import React, { useEffect, useRef } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FcBarChart } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { useAnimation, useInView, motion } from "framer-motion";
import { LuBaby } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";

const Prices = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <div className="w-full py-[10rem] px-4  -mt-28">
        <div className="mx-auto mb-12 text-center lg:mb-20">
          <h2 className="mb-4 text-3xl font-bromega-bold text-blue-500 sm:text-4xl md:text-[40px]">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-lg text-gray-500 font-bromega-light">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và
            lựa chọn dịch vụ phù hợp nhất cho bé!
          </p>
        </div>

        <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  ">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card
                image={
                  <PiChalkboardTeacher
                    style={{ fontSize: "5rem", color: "#00ADEE"  }}
                  />
                }
                Package={"Gia sư"}
                Feature1={"Cải thiện kết quả học tập"}
                Feature2={"Thời gian linh hoạt"}
                Feature3={"Tiết kiệm thời gian di chuyển"}
                Feature4={"Môi trường học tập thoải mái"}
                iconColor1={"text-blue-500"}
                iconColor2={"text-blue-500"}
                iconColor3={"text-blue-500"}
                iconColor4={"text-blue-500"}
                buttonBg={"bg-gray-300"}
                hoverBgButton={"hover:bg-gray-200"}
              />
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card
                image={
                  <LuBaby style={{ fontSize: "5rem", color: "#00ADEE" }} />
                }
                Package={"Trông trẻ"}
                Feature1={"Phương pháp Steiner"}
                Feature2={"Lịch trình linh hoạt"}
                Feature3={"Giảm áp lực phụ huynh"}
                Feature4={"Môi trường an toàn"}
                iconColor1={"text-blue-500"}
                iconColor2={"text-blue-500"}
                iconColor3={"text-blue-500"}
                iconColor4={"text-blue-500"}
                buttonBg={"bg-gray-300"}
                hoverBgButton={"hover:bg-gray-200"}
              />
            </motion.div>
          </div>
        </>
      </div>
    </div>
  );
};
export default Prices;

/* Card */

const Card = ({
  standOutBg,
  marginMiddle,
  Package,
  Price,
  image,
  Feature1,
  Feature2,
  Feature3,
  Feature4,

  iconColor1,
  iconColor2,
  iconColor3,
  iconColor4,

  buttonBg,
  buttonTextColor,
  hoverBgButton,
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 bg-white ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
      <div className="w-20 mx-auto mt-0">{image}</div>
      <h2 className="text-2xl font-bold text-center">{Package}</h2>
      <p className="py-2 mx-8 mb-6 -mt-2 flex justify-center text-3xl font-bold">
        {Price}
      </p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 flex justify-between">
          {Feature1}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor1}`} />
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {Feature2}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor2}`} />
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {Feature3}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor3}`} />
        </p>
        <p className="py-2 border-b mx-8 flex justify-between">
          {Feature4}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor4}`} />
        </p>
      </div>
      <button
        className={`justify-center flex mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}
      >
        Contact Suport
      </button>
    </div>
  );
};
