import React, { useState } from "react";
import Icon from "./images/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Modal } from "antd";
import TeachImage from "./images/gia-su.png";
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
      <nav className="bg-custom-blue px-2 p-1 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-300">
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
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-800 hover:border-b-2 hover:border-blue-500"
                }`}
              >
                <Link to="/">Trang chủ</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/about")
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-800 hover:border-b-2 hover:border-blue-500"
                }`}
              >
                <Link to="/about">Về chúng tôi</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/services")
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-800 hover:border-b-2 hover:border-blue-500"
                }`}
              >
                <Link to="/services">Sản phẩm & Giải pháp</Link>
              </li>
              <li
                className={`p-2 mr-2 font-bold cursor-pointer ${
                  isActive("/blogs")
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-800 hover:border-b-2 hover:border-blue-500"
                }`}
              >
                <Link to="/blogs">Bài viết</Link>
              </li>
              <li
                className={`p-2 font-bold cursor-pointer ${
                  isActive("/contact")
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-blue-800 hover:border-b-2 hover:border-blue-500"
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
              className="bg-blue-600 px-4 py-2 text-white font-BROmegaVN-Regular hidden sm:block rounded-3xl mr-2 hover:bg-blue-500"
            >
              Bắt đầu
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-blue-500" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`${open ? null : "hidden"} h-[20rem]`}>
          <ul>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 pt-6 ${
                isActive("/")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${
                isActive("/about")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${
                isActive("/services")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
              }`}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${
                isActive("/blogs")
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "hover:border-b-2 hover:border-blue-500"
              }`}
            >
              <Link to="/blogs">Blogs</Link>
            </li>
            <li
              className={`text-blue-500 hover:text-blue-800 font-bold pl-8 cursor-pointer pb-4 ${
                isActive("/contact")
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
        </div>
      </nav>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="flex items-center justify-center"
      >
        <div className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account to upload or download pictures, videos, or
            music.
          </p>
          <input
            type="text"
            className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />

          {/* Adjusted div for better responsiveness and layout */}
          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
            <div className="font-thin text-cyan-700">Forgot password</div>
            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next</span>
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
            </button>
          </div>

          <div className="mt-12 border-b border-b-gray-300"></div>

          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>

          {/* Adjusted div for social buttons */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="images/facebook.png" alt="" className="w-9" />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src="images/google.png" alt="" className="w-9" />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>

        <img src={TeachImage} alt="" className="w-[430px] hidden md:block" />
      </Modal>
    </div>
  );
};

export default Navbar;
