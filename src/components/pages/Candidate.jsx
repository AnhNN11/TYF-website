import React from "react";
import { Card, Avatar, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import CandidateCard from "../Card/CandidateCard";
import NavbarLogin from "../NavbarLogin.jsx";
import Footer from "../Footer";
const { Meta } = Card;

// Example array of candidates
const candidates = [
  {
    candidateId: "1",
    name: "Phan Quốc Thái Bảo",
    role: "Gia sư tiêu biểu",
    imageUrl:
      "https://res.cloudinary.com/dtdars0ah/image/upload/v1718983013/wce34i2em5jjgy0ipbg1.jpg",
  },
  
  {
    candidateId: "2",
    name: "Lê Thế Bảo",
    role: "Gia sư tiêu biểu",
    imageUrl:
      "https://res.cloudinary.com/dtdars0ah/image/upload/v1718983412/qpgnwtm1qcpthuesypse.jpg",
  },

  {
    candidateId: "3",
    name: "Nguyễn Văn Hoàng Phúc",
    role: "Gia sư trẻ",
    imageUrl:
      "https://res.cloudinary.com/dtdars0ah/image/upload/v1718983479/vfxcr9jcdqvsxa7nvazc.jpg",
  },

  {
    candidateId: "4",
    name: "Đinh Bảo Hân",
    role: "Gia sư trẻ",
    imageUrl:
      "https://res.cloudinary.com/dtdars0ah/image/upload/v1718983557/o5cpgizhpxzizxke6zpr.jpg",
  },
  // Add more candidates as needed
];

const CandidatePage = () => {
  return (
    <>
    <NavbarLogin/>
    <div>
      
      <div
        style={{
          //   background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          //   borderRadius: borderRadiusLG,
        }}
        className="overflow-hidden bg-gradient-to-br from-blue-100"
      >
        <div className="  p-8  mb-6">
          
          <h1 className=" flex justify-center text-5xl text-customBlue font-bromega-bold  mb-2">
            Danh sách ứng viên
          </h1>
          <p className="flex justify-center font-bromega-light">
            Tại đây, bạn có thể tìm thấy thông tin về những sinh viên tuyệt vời
            của chúng tôi.
          </p>
          <div className="flex justify-center mt-10">
            <form className="w-full md:basis-[50%] sm:basis-[100%]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>

                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Tìm kiếm ứng viên"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-customBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  font-bromega"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap font-bromega-light">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.candidateId}
                candidate={candidate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default CandidatePage;
