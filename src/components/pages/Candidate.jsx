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
    role: "Tutor",
    imageUrl:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/448193763_430485549895959_9028795443413084369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeENCL3UOKxJ4AXHv8I4Q2ElKm_x2WxSQGMqb_HZbFJAY7CWG19MjJLGucvdG39JfWdlvSVf7Z5kbKSMTjOHCskg&_nc_ohc=OQUeuhkSKx4Q7kNvgFthlUS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGF4CyZ5UOtwhEZX_pUqHCH8DNXrWB56s275n4F-Soh-g&oe=669CFD56",
  },
  {
    candidateId: "2",
    name: "Nguyễn Thảo Vy",
    role: "Babysister",
    imageUrl:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/448765009_1121395095587069_3752656089230746733_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=s-UwEZrTyB8Q7kNvgEsVyCP&_nc_ht=scontent-hkg4-1.xx&oh=00_AYA8ZqDrKxI4x8PzcNR-t0fn5YFhMKdXCHlzBcDxFC-qOw&oe=669ECC1A",
  },
{
    candidateId: "3",
    name: "Trương Anh Đào",
    role: "Babysister",
    imageUrl:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/450224659_841457571244655_2570864231675852316_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDoec_07R88Q7kNvgFnVr-N&_nc_ht=scontent-hkg1-2.xx&oh=00_AYD1ru2-W-If3G3tHWHGPsfIqygWvd0Kwr8y5Cez_ziuiQ&oe=669EF6D5",
  },
  {
    candidateId: "4",
    name: "Lê Văn Đạt",
    role: "Tutor",
    imageUrl:
      "https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/61914827_843395452702997_3466537416783822848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHVMJ3eC9yO5LGGZThV8jZFZe95x7LIeQNl73nHssh5A6xB2jYbAwulXzAzTMyku2cyCFAtgH8lfZ1SjssuIvQI&_nc_ohc=Gccf9ty2tQIQ7kNvgHehp7P&_nc_ht=scontent.fdad1-4.fna&oh=00_AYDNnDKAs8X0g2FaPbK_RWAFg2Y8gDF-kCzeEIrkr6MfQg&oe=669D1F09",
  },
{
    candidateId: "5",
    name: "Nguyễn Hưng",
    role: "Tutor",
    imageUrl:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/441288029_3606542529676187_2455719666428684288_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yl5gQzmgF9QQ7kNvgFaMRoD&_nc_ht=scontent-hkg4-1.xx&oh=00_AYAyJPASrN5DKOG5OtfHaGzd2Jk4JEL69OxVnVAvo0pmwg&oe=669EFD0C",
  },
  {
    candidateId: "6",
    name: "Kim Huệ",
    role: "Babysister",
    imageUrl:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/279233334_3866600390231615_3296139317168439991_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=2aWTK-Dy1nMQ7kNvgFaCclS&_nc_ht=scontent-hkg4-1.xx&oh=00_AYAAE5nbF7-vGuNHwb9qNCexrZAFUZDsjGg0y_7ztiePDg&oe=669ED070",
  },
{
    candidateId: "7",
    name: "Thanh Huyền",
    role: "Babysister",
    imageUrl:
      "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/422894464_4408035806088068_5182694526900589172_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JU-rZrQIti4Q7kNvgEQfWIJ&_nc_ht=scontent-hkg1-2.xx&oh=00_AYBCnEAU-3zqcvkzZYWnlQ-kMrMQIqcfSsIikdPwj2kexQ&oe=669EFAE0",
  },
  {
    candidateId: "8",
    name: "Thục Nhi",
    role: "Babysister",
    imageUrl:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/437941897_1081391949825747_2297369076400627761_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=68laCxB_BoQQ7kNvgGJwL_3&_nc_ht=scontent-hkg4-1.xx&oh=00_AYCpLyzkVe5kCtWX_pwvbFU2ffFycCbkK4H_vMSGwe80zA&oe=669EFA52",
  },
{
    candidateId: "9",
    name: "Đào Đông Anh",
    role: "Tutor",
    imageUrl:
      "https://res.cloudinary.com/dtdars0ah/image/upload/v1718987395/vqee8yhmhvyq5huu5dft.jpg",
  },
  {
    candidateId: "10",
    name: "Nguyễn Thảo Vy",
    role: "Tutor",
    imageUrl:
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-117.jpg",
  },

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
            Danh sách gia sư
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
