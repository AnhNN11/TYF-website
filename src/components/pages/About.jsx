
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useAnimation, useInView, motion } from "framer-motion";

import SabMedia from "../images/Logo.png";
import Accordion from "../QA";

const teamMembers = [
  {
    name: "Nguyễn Đoàn Salem",
    role: "Designer",
    description: "Một người anh",
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
    role: "Marketing",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/312605109_3034295970204612_925064984914075921_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XNg6ZC-l9Z8Q7kNvgEWAIJk&_nc_ht=scontent-hkg1-2.xx&oh=00_AYA1UP5No6TUVVPaVfV7k0qN8COQ29aao9ml4hrMdsNVfQ&oe=669EE8BB",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Nhật Anh",
    role: "Dev",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand. ",

    image:
      "https://res.cloudinary.com/dehk1bcny/image/upload/v1718980698/iegmsdv9zsrdmuujyfrz.jpg",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Huỳnh Văn Tín",
    role: "Dev",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/448158920_493875789737453_5356450342645591299_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zmLkrUptpCYQ7kNvgF-Aaxx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFq21RLar4O7AmgKyno1dXmfH659QfAllIKKfuBIx46zw&oe=66A47EF2",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Anh Quân",
    role: "Marketing",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/448693138_1870031186805158_7274096340955810742_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=vAw0SkKTJ0oQ7kNvgGLk2wh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEN1ITm4CHddIIZmQHnffjjA5qw_A_f5JsUbgwDje5g5A&oe=66A46FD6",

    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Phan Ngọc Dạ Quyên",
    role: "Marketing",
    description:
      "Jese drives the technical strategy of the flowbite platform and brand.",
    image:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/450060047_841298701260542_825959227824184850_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=2E33_0vCz1oQ7kNvgG4Eior&_nc_ht=scontent-hkg4-1.xx&oh=00_AYDJmqFOE2stlIjnDngqAmHNm9GyxCJi7hqGfwTBTVGLig&oe=669EE726",
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
              <h2 className="mb-2 text-3xl font-bromega-bold text-customBlue sm:text-4xl md:text-[40px]">
                Tại sao chọn chúng tôi
              </h2>
              <p className="text-lg font-bromega-light text-gray-500">
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
                  <div className="py-3 sm:py-4 font-bromega-bold">
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
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -120 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: 0.25 }}
              >
                <div className="p-4 bg-white rounded-lg">
                  <Accordion
                    title="Tại sao nên chọn TYF?"
                    answer="TyF sở hữu đội ngũ gia sư và người trông trẻ được tuyển chọn kỹ lưỡng, có trình độ chuyên môn cao, giàu kinh nghiệm giảng dạy và chăm sóc trẻ em.
Mỗi gia sư và người trông trẻ đều phải trải qua quá trình sàng lọc gắt gao về trình độ chuyên môn, kỹ năng sư phạm, đạo đức nghề nghiệp và khả năng giao tiếp.
Chúng tôi cam kết mang đến cho bạn đội ngũ gia sư và người trông trẻ tận tâm, nhiệt tình, luôn đặt lợi ích của học sinh và trẻ em lên hàng đầu."
                  />
                  <Accordion
                    title="TyF cung cấp những dịch vụ gì"
                    answer="Dịch vụ gia sư cho học sinh ở mọi lứa tuổi, mọi môn học
Dịch vụ trông trẻ trọn gói, bao gồm: cho trẻ ăn uống, tắm rửa, vệ sinh cá nhân, chơi đùa, học tập, v.v.
Tư vấn giáo dục và định hướng nghề nghiệp cho học sinh"
                  />
                  <Accordion
                    title="Làm thế nào để đảm bảo chất lượng dịch vụ của TyF?"
                    answer="TyF có quy trình tuyển chọn gia sư và người trông trẻ rất gắt gao, đảm bảo rằng tất cả các nhân viên của chúng tôi đều có trình độ chuyên môn cao, kỹ năng sư phạm tốt và đạo đức nghề nghiệp nghiệp."
                  />
                  <Accordion
                    title="TyF có cam kết gì về chất lượng dịch vụ?"
                    answer="Học sinh được học tập với gia sư phù hợp nhất
Trẻ em được chăm sóc chu đáo và an toàn
Khách hàng luôn hài lòng với chất lượng dịch vụ"
                  />
                  <Accordion
                    title="Học phí gia sư tại TyF như thế nào?"
                    answer="Học phí gia sư tại TyF phụ thuộc vào nhiều yếu tố, bao gồm: trình độ học tập của học sinh, môn học cần gia sư, số giờ học mỗi tuần và trình độ của gia sư."
                  />
                  <Accordion
                    title="TyF có những hình thức trông trẻ nào?"
                    answer="Trông trẻ theo giờ
Trông trẻ ban ngày
Trông trẻ ban đêm
Trông trẻ cả ngày"
                  />
                  <Accordion
                    title="TyF có chương trình ưu đãi nào cho khách hàng sử dụng dịch vụ trông trẻ không?"
                    answer="Có, TyF thường xuyên có các chương trình ưu đãi dành cho khách hàng sử dụng dịch vụ trông trẻ"
                  />
                  <Accordion
                    title="TyF có thường xuyên tổ chức các khóa đào tạo cho gia sư và người trông trẻ không?"
                    answer="Có, TyF thường xuyên tổ chức các khóa đào tạo cho gia sư và người trông trẻ nhằm nâng cao chất lượng dịch vụ"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[70%] h-[3px] bg-gradient-to-r from-customBlue to-blue-200"></div>
      {/* Team Members */}

      <section className="bg-white ">
        <div className="py-6 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-2 text-4xl tracking-tight font-bromega-bold text-customBlue ">
              Đội ngũ sáng lập
            </h2>
            <p className="font-bromega-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
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
                className="items-center bg-gray-50 rounded-lg shadow sm:flex"
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
                  <h3 className="text-xl font-bold tracking-tight text-black-500 ">
                    <a href="#">{member.name} </a>
                  </h3>
                  <span className="text-black-500 ">{member.role}</span>

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
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-customBlue"></div>

      <Footer />
    </div>
  );
};

export default About;