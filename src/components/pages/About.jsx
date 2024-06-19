import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";
import ayroui from "../images/brands/ayroui.svg";
import graygrids from "../images/brands/graygrids.svg";
import uideck from "../images/brands/uideck.svg";
import SabMedia from "../images/Logo.png";

const teamMembers = [
  {
    name: "Nguyễn Đoàn Salem",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand. ",
    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/395637905_278201087929918_8420190409177866048_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFbb6QOLYGyC2XaBK7jxppXapdGM7GFZmtql0YzsYVma9bLhXJdgRFwG5wGIsLuqf4r00fl3jcw-MfpOKpqIyZc&_nc_ohc=c6tXW75A7joQ7kNvgEX6iNh&_nc_ht=scontent.fdad3-1.fna&oh=03_Q7cD1QFSQ5vFaxbzlCQf2Ax_qTIoELo_t11qoRw3yKzDsii23Q&oe=66993E5A",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Bùi Phương Anh",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/312605109_3034295970204612_925064984914075921_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH-49Bs_F8DADQcZREZgmwC0UOBuPUht6DRQ4G49SG3oIUJe9P-fmFHGfunOzuSz2q5OwFVf6C11gevlJtdSogY&_nc_ohc=4Bo2yf623okQ7kNvgFdgaDN&_nc_ht=scontent.fdad3-1.fna&oh=00_AYAS1Vfvfews2DvaPHDsl2VFhdg0xU2YqG_hysccYxSTrQ&oe=667793FB",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Dạ Quyên",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand. ",

    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/240596727_227789349278150_9076578044773909062_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF16Pdbt5VWHLEtMH8a9zsnsCdH3nhA8DuwJ0feeEDwO8eAdpWzBEiT7IhBcKBibg6uwX0L9GqlSGhF2IJYmqDa&_nc_ohc=5zlwGAnr2E0Q7kNvgHuDlyu&_nc_ht=scontent.fdad3-1.fna&oh=00_AYDH3U321ndKXoOdvzZ6Ds0nxWMSCvbiQJ9AHjJq9Nxocg&oe=66778A52",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Nhật Anh",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/93158960_233963400996914_8978786156292341760_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHyC_pT96eHXr4iZ1VI4l0xj-O8wJCBAdeP47zAkIEB1yFgTWVFr7F5AOtqBoeeRQZnAEy3MwBm1VwQP00A1Ygu&_nc_ohc=CUASgc9yKfoQ7kNvgGLN3H2&_nc_ht=scontent.fdad3-1.fna&oh=00_AYCJjBZieceB80AywjUvDp9AqRz4vtzXI1EgqVBUK2Wpzw&oe=6699412B",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Huỳnh Văn Tín",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/448158920_493875789737453_5356450342645591299_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeELPbXryUAd9DjvCDsO_CsjcoEACN-fgdJygQAI35-B0t6p3eDI4BZ9FddMkye8yZ3FT1ob9Er0uz5qiR3cHnwN&_nc_ohc=T8bYTejgUNEQ7kNvgHg0PIW&_nc_ht=scontent.fdad1-4.fna&oh=03_Q7cD1QGYV7wtDYlzT0CvIphsrTkbK5H4M2VSHEZTUdOLnGeBWg&oe=66994A32",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Anh Quân",
    role: "CTO",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/448693138_1870031186805158_7274096340955810742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgs1EjSanjhbJW6O33i0MAh_Sfpv7z2mGH9J-m_vPaYVAbZO4YJ-jEFilLOWHdTdY0WERnsw4gBLESvjm-Vro6&_nc_ohc=vs6Sdxfipr4Q7kNvgExJRfR&_nc_ht=scontent.fdad1-2.fna&oh=03_Q7cD1QE0FxoX6pAW5bvXCzzSlPQjd1GrkuI7URT9sY10NS5t3Q&oe=66993B16",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

const sections = [
  {
    title: "1. Chất lượng dịch vụ",
    content:
      "TYF Company cam kết cung cấp các dịch vụ gia sư và chăm sóc trẻ tại nhà với chất lượng hàng đầu. Chúng tôi luôn đặt lợi ích và phát triển của học viên và trẻ em lên hàng đầu, đảm bảo mỗi học viên được tiếp cận với giáo viên có trình độ cao và phương pháp giảng dạy hiệu quả.",
  },
  {
    title: "2. Đội ngũ giáo viên chuyên nghiệp",
    content:
      "Chúng tôi tuyển dụng và đào tạo các giáo viên có năng lực và kinh nghiệm để đáp ứng đầy đủ các nhu cầu học tập của học viên. Sự am hiểu về các phương pháp giảng dạy và quan tâm đến sự phát triển cá nhân của học viên là ưu tiên hàng đầu của chúng tôi.",
  },
  {
    title: "3. Tiện lợi và linh hoạt",
    content:
      "Với dịch vụ gia sư và chăm sóc trẻ tại nhà, TYF Company mang đến sự tiện lợi tối đa cho phụ huynh và học viên. Chúng tôi linh hoạt trong việc sắp xếp lịch học phù hợp với thời gian của từng gia đình và đảm bảo rằng mỗi buổi học đều được tổ chức một cách hiệu quả.",
  },
  {
    title: "4. Tận tâm và chu đáo",
    content:
      "Cam kết đem đến dịch vụ tận tâm và chu đáo nhất, luôn lắng nghe và đáp ứng mọi nhu cầu của khách hàng, quan tâm đến sự phát triển và trải nghiệm học tập của từng học viên.",
  },
  {
    title: "5. Cải tiến liên tục",
    content:
      "Luôn mở rộng và cải tiến dịch vụ dựa trên phản hồi từ khách hàng, cam kết mang đến sự hài lòng và niềm tin tuyệt đối thông qua việc cải thiện liên tục chất lượng dịch vụ.",
  },
];

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
    document.title = "TYF | Về chúng tôi";
  }, []);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(null);

  const toggleSection = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

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
                Chúng tôi có kinh nghiệm lâu năm trong lĩnh vực cung cấp giải
                pháp giáo dục và hỗ trợ giảng dạy và trông trẻ
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
                      className="w-full rounded-2xl transition-all duration-300 transform hover:scale-110   "
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-7/12 ">
              <motion.div
                className="mt-0 lg:mt-0"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.25 }}
              >
                <div className="w-[10%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2
                      className="cursor-pointer block text-xl font-semibold text-primary mb-3 relative"
                      onClick={() => toggleSection(index)}
                    >
                      {section.title}
                      {/* Underline div */}
                      <div className="h-[2px] bg-gray-300 mt-2"></div>
                    </h2>
                    {isOpen === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul>
                          <li>{section.content}</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
      {/* Team Members */}

      <section className="bg-white dark:bg-gray-900">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Đội ngũ sáng lập
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Đội ngũ sáng lập là nhóm cá nhân chịu trách nhiệm khởi tạo và phát
              triển một doanh nghiệp, tổ chức hoặc dự án. Họ đóng vai trò quan
              trọng trong việc hình thành tầm nhìn, chiến lược và văn hóa của tổ
              chức.
            </p>
          </div>
          <div className="grid gap-11 mb-6 lg:mb-16 md:grid-cols-2">
            {teamMembers?.map((member, memberIndex) => (
              <div
                key={member.id || memberIndex}
                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  {/* Image can be dynamically added here if needed */}
                  <img
                    className="w-full h-60  object-cover rounded-lg sm:w-64 "
                    src={member.image}
                    alt={member.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{member.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {member.role}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {member.description}
                  </p>
                  <div className="flex mt-4">
                    <a
                      href={member.socialLinks.twitter}
                      className="text-blue-500 mr-2"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                      href={member.socialLinks.facebook}
                      className="text-blue-700 mr-2"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href={member.socialLinks.linkedin}
                      className="text-blue-500 mr-2"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                      href={member.socialLinks.instagram}
                      className="text-pink-600"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>

      <Footer />
    </div>
  );
};

export default About;
