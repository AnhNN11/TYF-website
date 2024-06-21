import React, { useState } from "react";
import Icon from "./images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Modal, Space } from "antd";
import TeachImage from "./images/gia-su.png";
import GoogleImg from "./images/google.webp";
import FacebookImg from "./images/facebook.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const isActive = (path) => location.pathname === path;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="font-bromega-regular">
      <nav className="bg-navbarColor px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-300">
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:px-4 pb-2 pt-2 text-black">
          <Link to="/" className="flex items-start">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[45px] sm:-h-[35px] -mt-1"
            />
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/")
                    ? "text-customBlue border-b-2 border-customBlue"
                    : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                }`}
              >
                <Link to="/">Trang chủ</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/about")
                    ? "text-customBlue border-b-2 border-customBlue"
                    : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                }`}
              >
                <Link to="/about">Về chúng tôi</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/services")
                    ? "text-customBlue border-b-2 border-customBlue"
                    : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                }`}
              >
                <Link to="/services">Sản phẩm & Giải pháp</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/blogs")
                    ? "text-customBlue border-b-2 border-customBlue"
                    : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                }`}
              >
                <Link to="/blogs">Bài viết</Link>
              </li>
              <li
                className={`p-2 font-bold cursor-pointer ${
                  isActive("/contact")
                    ? "text-customBlue border-b-2 border-customBlue"
                    : "hover:text-customBlue hover:border-b-2 hover:border-customBlue"
                }`}
              >
                <Link to="/contact">Kết nối</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <button
              onClick={showModal}
              type="button"
              className="bg-customBlue px-4 py-2 text-white font-BROmegaVN-Regular hidden sm:block rounded-3xl mr-2 hover:bg-blue-500"
            >
              Bắt đầu
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-blue-500" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {/* <div className={`${open ? null : "hidden"} h-[20rem]`}>
          <ul>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 pt-6 ${isActive("/")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
                }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${isActive("/about")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
                }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${isActive("/services")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
                }`}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${isActive("/blogs")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
                }`}
            >
              <Link to="/blogs">Blogs</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${isActive("/contact")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
                }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex pl-8">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white rounded-md mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
          </div>
        </div> */}
      </nav>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        height={320}
        footer=""
      >
        <div className="flex ">
          <div className="p-6 md:p-20">
            <h2 className="font-bromega-bold mb-5 text-4xl font-bold">
              Đăng nhập
            </h2>
            <p className="font-bromega-regular max-w-sm mb-6 font-sans font-light text-gray-600">
              Đăng nhập để có thể liên hệ và nhận sự hỗ trợ của chúng tôi
            </p>
            <input
              type="text"
              className="mb-1 font-bromega-regular w-full p-6 h-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Nhập email của bạn"
            />
            <input
              type="password"
              className="my-1 font-bromega-regular w-full p-6 h-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Nhập mật khẩu của bạn"
            />
           

            {/* Adjusted div for better responsiveness and layout */}
            <div className="font-bromega-regular flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
              <div className="font text-customBlue">Quên mật khẩu</div>
              <Link
                key="more"
                to="/candidates/"
                className="inline-flex justify-center items-center p-6 space-x-4 font-bold text-white rounded-md shadow-lg px-9 bg-customBlue shadow-customBlue hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150 w-full h-2 md:w-auto"
              >
                <span>Tiếp tục</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="13" y1="18" x2="19" y2="12" />
                  <line x1="13" y1="6" x2="19" y2="12" />
                </svg>
              </Link>
            </div>

            <div className="mt-12 border-b border-b-gray-300"></div>

            <p className="font-bromega-regular py-6 text-sm font-thin text-center text-gray-400">
              Hoặc đăng nhập bằng
            </p>

            {/* Adjusted div for social buttons */}
            <div className="font-bromega-regular flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src={FacebookImg} alt="" className="w-7" />
                <span className="font-thin">Facebook</span>
              </button>
              <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                <img src={GoogleImg} alt="" className="w-6" />
                <span className="font-thin">Google</span>
              </button>
            </div>
          </div>
          <img
            src={TeachImage}
            alt=""
            className="w-[450px] h-[410px] mt-20 hidden md:block"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
