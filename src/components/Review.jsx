import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";

import A from "./images/avatar.avif";
const Review = () => {
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
    <>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="max-w-2xl mx-auto rounded shadow-md bg-white p-6 my-8  space-y-4 text-center xl:col-span-2 xl:text-left"
          >
            <h2 className="text-4xl font-bromega-bold text-customBlue">
              Tại sao các bạn nên dùng dịch vụ của chúng tôi
            </h2>
            <p className="text-gray-500 font-bromega-light">
              Đây là một số nhận xét của một số người đã sử dụng
            </p>
          </motion.div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: -75, y: -45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="p-6 rounded-lg shadow-lg bg-white mt-6 font-bromega-light"
                >
                  <p>
                  Tôi đã sừ dụng dịch vụ của công ty và cực kì hài lòng với nó. Từ lúc được học tập với gia sư bên mình, kết quả học tập của con tôi đã cải thiện một cách nhanh chóng và rõ rệt. Đồng thời, chất lượng và chuyên môn của gia sư cũng rất tuyệt vời, ngoài sức mong đợi của tôi. Tôi khuyến khích mọi người nên sử dụng dịch vụ của công ty, rất xứng đáng !
                  </p>
                  <div className="flex justify-between items-center mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-bromega-bold-italic block">Sam Smith</p>
                        <p className="text-sm text-gray-400 block">Asus</p>
                      </div>
                    </div>

                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-customBlue ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: -75, y: 45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="p-6 rounded-lg shadow-lg bg-white font-bromega-light "
                >
                  <p>
                  Một điểm mạnh khác của TYF Childcare Center là chương trình học sáng tạo và phù hợp. Tôi rất hài lòng với cách mà các hoạt động giáo dục được thiết kế để khuyến khích sự sáng tạo, tư duy logic và phát triển toàn diện của trẻ em. Các em được tham gia vào các hoạt động thể chất, nghệ thuật, và trò chơi học thuật một cách tự nhiên và vui vẻ. Tôi thấy rằng các em không chỉ học hỏi mà còn phát triển kỹ năng xã hội và tạo ra những mối quan hệ tốt với bạn bè.
                  </p>
                  <div className="flex items-center justify-between mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col sm:ml-2 ">
                        <p className="text-lg font-bromega-bold-italic block">
                          Benjamin Mitchell
                        </p>
                        <p className="text-sm text-gray-400 block">Razer</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-customBlue ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="grid content-center gap-4">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75, y: -45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="p-6 rounded-lg shadow-lg bg-white font-bromega-light"
                >
                  <p>
                  Điều tôi thích nhất ở TYF Childcare Center là sự giao tiếp và tương tác thường xuyên với phụ huynh. Tôi luôn được thông báo về tiến trình và hoạt động của con em thông qua hội thảo, cuộc họp, và báo cáo cá nhân. Điều này giúp tôi cảm thấy liên kết và tham gia vào quá trình phát triển của con em một cách chặt chẽ. Tôi cũng có cơ hội chia sẻ ý kiến và quan ngại của mình và nhận được sự hỗ trợ và giải đáp từ nhân viên tận tâm của TYF Childcare Center.

                  </p>
                  <div className="flex justify-between items-center mt-2 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-bromega-bold-italic block">
                          Olivia Johnson
                        </p>
                        <p className="text-sm text-gray-400 block">Microsoft</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-customBlue ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, x: 75, y: 45 },
                    visible: { opacity: 1, x: 0, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.8, delay: 0.75 }}
                  className="p-6 rounded-lg shadow-lg bg-white font-bromega-light"
                >
                  <p>
                  Tôi rất hài lòng với dịch vụ giữ trẻ tại TYF Childcare Center. Đây là một nơi tuyệt vời cho con em phát triển và sáng tạo trong một môi trường an toàn và chăm sóc. Tôi sẽ tiếp tục ủng hộ và khuyến khích mọi người sử dụng dịch vụ tại TYF Childcare Center.
                  </p>
                  <div className="flex justify-between items-center mt-4 space-x-4">
                    <div className="flex">
                      <img
                        src={A}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full "
                      />
                      <div className="flex-col ml-4">
                        <p className="text-lg font-bromega-bold-italic block">
                          Sophia Davis
                        </p>
                        <p className="text-sm text-gray-400 block">Dell</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MdVerified
                        size={Width < 631 ? 35 : 40}
                        className="text-customBlue ml-2"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
