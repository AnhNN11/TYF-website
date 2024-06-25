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
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-103.jpg",
  },
{
    candidateId: "3",
    name: "Trương Anh Đào",
    role: "Babysister",
    imageUrl:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/371930151_2223735487817461_1331707486430222022_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFma_Efzs4tSIJsbjtTu5XGlFRR05KfIWOUVFHTkp8hY7OPj9tlpChDXZESjeSTGlXlqlv-vlUfr69H_OpH8OBp&_nc_ohc=CY4rbUzvO4IQ7kNvgHseQ5j&_nc_ht=scontent.fdad3-4.fna&oh=00_AYCtNuOcDuwLtWOyJWI9-BjHZeN31QJ9xnjHVuzJTTHlBA&oe=667B9630",
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
      "https://instagram.fdad3-5.fna.fbcdn.net/v/t39.30808-6/440343097_18037677745892577_5178960344427018462_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fdad3-5.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Sx4-hJDPd1UQ7kNvgEj3VkM&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzM1NDU2NTQ5MjYwMTQ5OTIyNA%3D%3D.2-ccb7-5&oh=00_AYCBtuUJHj8oIURP5XvDlpcAAo0OCgyxsuflQvjIXBacQg&oe=667B7C49&_nc_sid=cf751b",
  },
  {
    candidateId: "6",
    name: "Kim Huệ",
    role: "Babysister",
    imageUrl:
      "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/414842866_3754224404822024_4721210135163178817_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRyhSxUNojw8fj3Z-bacI0nQzuFv3j3JOdDO4W_ePck2YQ1-MD2WOZahahU7ktDerDqAx4cg-jJrYNf-9oHrwd&_nc_ohc=JsIYh-wbzukQ7kNvgHe0URT&_nc_ht=scontent.fdad1-3.fna&oh=00_AYC0oySG4P3vQxoJi45WprZThi62PKw9Xx0q-hy_30Rovw&oe=667B7947",
  },
{
    candidateId: "7",
    name: "Thanh Huyền",
    role: "Babysister",
    imageUrl:
      "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/351780589_818952549654257_4503747128713539792_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE02QaFTEPP2HvgkPRyytzlBVbNQdeBV8UFVs1B14FXxYKQzWBi9MJBkFzkvXjTU1A7eLY3LBv7szD0nrljKKgG&_nc_ohc=AHb6TExpvmQQ7kNvgEQJOrr&_nc_ht=scontent.fdad2-1.fna&oh=00_AYAbjoFIwYZbd6aStOBzxAn53Sv_h4c0I9rxU0sd6_dJsg&oe=667B7EF2",
  },
  {
    candidateId: "8",
    name: "Thục Nhi",
    role: "Babysister",
    imageUrl:
      "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/436361634_1833686767097810_7236082650205506491_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjeMjT4hj5m15g30kn7r1VcCsZ8tFmGBNwKxny0WYYE_rP777N_Tg3TE_YWW8EBByd8ztIlpormch58WI-x0aM&_nc_ohc=VoLCdcrlwBYQ7kNvgEsd7EF&_nc_ht=scontent.fdad1-3.fna&oh=00_AYCc7-cwHkO6aRVHcpLLFZnSvcvaDDNc1lGVaUWajkM0dg&oe=667B6BAC",
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
