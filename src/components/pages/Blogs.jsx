import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import blog1 from "../images/blogs/image-01.jpg";
import blog2 from "../images/blogs/image-02.jpg";
import blog3 from "../images/blogs/image-03.jpg";
import { motion } from "framer-motion";

const blogData = [
  {
    image: blog1,
    date: "Đang tuyển dụng",
    title: "Tuyển dụng gia sư chuyên Toán",
    description:
      "Chúng tôi đang tìm kiếm một gia sư Toán có kinh nghiệm để giúp học sinh từ các trình độ khác nhau nắm vững kiến thức và phát triển năng lực trong môn Toán học.",
  },
  {
    image: blog2,
    date: "Đang tuyển dụng",
    title: "Tuyển dụng gia sư chuyên Anh",
    description:
      "Chúng tôi đang tìm kiếm một gia sư Tiếng Anh có kinh nghiệm để giúp học sinh từ các trình độ khác nhau nâng cao kỹ năng ngôn ngữ và tự tin giao tiếp bằng Tiếng Anh.",
  },
  {
    image: blog3,
    date: "Sắp mở",
    title: "Tuyển dụng gia sư chuyên Hóa",
    description:
      "Chúng tôi đang tìm kiếm một gia sư Hóa học có kinh nghiệm để giúp học sinh từ các trình độ khác nhau nắm vững kiến thức và kỹ năng trong lĩnh vực này.",
  },
  {
    image: blog3,
    date: "Đã đóng",
    title: "Tuyển dụng Người Trông Trẻ",
    description:
      "Chúng tôi đang tìm kiếm người trông trẻ yêu trẻ em và có kinh nghiệm để gia nhập đội ngũ của chúng tôi.",
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3; // Number of blogs to display per page

  useEffect(() => {
    document.title = "TYF | Tuyển dụng";
    window.scrollTo(0, 0);
  }, []);

  // Logic to calculate which blogs to display based on currentPage
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Functions to handle pagination
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div className="container mx-auto">
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -75 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            class="-mx-4 flex flex-wrap justify-center"
          >
            <div className="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
                  Kênh Tuyển Dụng
                </h2>
                <p className="text-lg text-gray-500">
                  In the ever-evolving world of web development, we share the
                  latest trends and invaluable knowledge to keep you updated.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="-mx-4 flex flex-wrap">
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: index * 0.2 + 0.2 }}
                className="w-full px-4 sm:w-1/2 lg:w-1/3"
              >
                <div className="mx-auto mb-10 max-w-[370px]">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <span
                      className={`inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white ${
                        blog.date === "Sắp mở"
                          ? "bg-orange-400/80"
                          : blog.date === "Đã đóng"
                          ? "bg-red-400/80"
                          : "bg-green-400/80"
                      }`}
                    >
                      {blog.date}
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p className="text-body-color text-base">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Pagination */}
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.8 }}
            className="flex justify-center space-x-1 dark:text-white mt-4"
          >
            <button
              title="previous"
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            {Array.from(
              { length: Math.ceil(blogData.length / blogsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold rounded shadow-md dark:bg-blue-500 ${
                    currentPage === i + 1 ? "bg-blue-700 text-white" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              title="next"
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 py-0 rounded-md shadow-md dark:bg-blue-500 ${
                currentPage === Math.ceil(blogData.length / blogsPerPage)
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(blogData.length / blogsPerPage)
              }
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blogs;
