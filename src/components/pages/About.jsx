import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import ayroui from "../images/brands/ayroui.svg";
import graygrids from "../images/brands/graygrids.svg";
import uideck from "../images/brands/uideck.svg";
import SabMedia from "../images/Logo.svg";
import profile1 from "../images/About/team/profile1.jpg";
import profile2 from "../images/About/team/profile2.png";
import profile3 from "../images/About/team/profile3.jpg";
const About = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  useEffect(() => {
    document.title = "SabMedia | About";
  }, []);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <section className="pt-0 lg:pt-[100px] pb-20  overflow-hidden bg-gradient-to-br from-blue-100">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center -mx-4">
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mx-auto mb-12 lg:pt-10 md:pt-20 sm:pt-40 max-sm:pt-20 text-center lg:mb-10 w-full"
            >
              <h2 className="mb-2 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                Tại sao chọn chúng tôi
              </h2>
              <p className="text-lg text-gray-500">
                Tìm hiểu kiến thức lập trình cho hành trình chinh phục thế giới
                IT
              </p>
            </motion.div>
            <div className="w-full px-4 lg:w-5/12 lg:pr-20 ">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -120 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.25 }}
                className="flex items-center -mx-3 sm:-mx-4"
              >
                <div className="w-full px-3 sm:px-4">
                  <div className="py-3 sm:py-4">
                    <img
                      src={SabMedia}
                      alt=""
                      className="w-full rounded-2xl transition-all duration-300 transform hover:scale-110  "
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-7/12 ">
              <motion.div
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.25 }}
                className="mt-0 lg:mt-0"
              >
                <span className="block mb-2 text-xl font-semibold text-primary">
                  Về chúng tôi
                </span>
                <div className="w-[10%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
                <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl"></h2>
                <p className="mb-5 text-base text-gray-500">
                  "KT-DEV, viết tắt của Kon Tum Developer, là một câu lạc bộ lập
                  trình được thành lập bởi các cựu học sinh trường THPT Trần Phú
                  Kon Tum. Câu lạc bộ được thành lập với "
                </p>
                <div>
                  <h2 className="block  text-xl font-semibold text-primary mb-3">
                    1. Mở rộng cánh cửa đến với thế giới công nghệ:
                  </h2>
                  <ul>
                    <li>
                      - Giúp các bạn học sinh cấp 3 tiếp cận sớm với lĩnh vực
                      công nghệ thông tin (IT), từ đó khơi dậy niềm đam mê và
                      định hướng nghề nghiệp cho tương lai.
                    </li>
                    <li>
                      - Cung cấp kiến thức và kỹ năng lập trình cơ bản, giúp các
                      bạn có nền tảng vững chắc để phát triển trong lĩnh vực IT.
                    </li>
                  </ul>

                  <h2 className="block text-xl font-semibold text-primary mb-3">
                    2. Tạo dựng cộng đồng chia sẻ kiến thức:
                  </h2>
                  <ul>
                    <li>
                      - Kết nối các bạn học sinh có chung sở thích về lập trình,
                      tạo môi trường học tập và trao đổi kinh nghiệm hiệu quả.
                    </li>
                    <li>
                      - Giúp các bạn học sinh互相帮助, cùng nhau giải quyết các
                      vấn đề trong quá trình học tập và nghiên cứu.
                    </li>
                  </ul>

                  <h2 className="block text-xl font-semibold text-primary mb-3">
                    3.Chuẩn bị cho tương lai:
                  </h2>
                  <ul>
                    <li>
                      - Trang bị cho các bạn học sinh kỹ năng mềm cần thiết như
                      tư duy logic, giải quyết vấn đề, làm việc nhóm,... để có
                      thể tự tin bước vào môi trường đại học và công việc.
                    </li>
                    <li>
                      - Tạo cơ hội cho các bạn học sinh tham gia các hoạt động
                      thi đua, giao lưu, học hỏi với các cộng đồng lập trình
                      khác.
                    </li>
                  </ul>
                </div>

                <a
                  href="/#"
                  className="mt-6 inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-blue-500 hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Bắt đầu
                </a>
              </motion.div>
              <motion.div
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.75 }}
                className="clients pt-16"
              >
                <h6 className="text-body-color mb-2 flex items-center text-xs font-normal text-gray-500">
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
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
      <section className="lg:pt-[100px] pb-12 lg:pb-[90px] overflow-hidden bg-gradient-to-tr from-blue-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <motion.div
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 75 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mx-auto mb-12 text-center lg:mb-20 w-full"
          >
            {/* <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-500">
              The skilled professionals driving innovation behind our digital
              solutions.
            </p> */}
            <div className=" py-24 sm:py-32">
              <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Meet our leadership
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit
                    odio vitae elementum enim vitae ullamcorper suspendisse.
                  </p>
                </div>
                <ul
                  role="list"
                  className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                  <li>
                    <div className="flex items-center gap-x-6">
                      <img
                        className="h-16 w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          Leslie Alexander
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          Co-Founder / CEO
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
