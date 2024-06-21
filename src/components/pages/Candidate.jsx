import React from "react";
import { Card, Avatar, Breadcrumb } from "antd";
import { UserOutlined } from "@ant-design/icons";
import CandidateCard from "../Card/CandidateCard";

const { Meta } = Card;

// Example array of candidates
const candidates = [
  {
    candidateId: "1",
    name: "John Doe",
    role: "Software Engineer",
    imageUrl:
      "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/271158089_608241573569093_8522388516126255361_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4aWL1tEDOASebCx9W-xgqlQGufD3YA72VAa58PdgDvUktilpAfhqtG1RtbTc5wxYZURbvYO6HKGddbiFrrm3W&_nc_ohc=b_L36w8sSoIQ7kNvgEWW2Gr&_nc_ht=scontent.fdad1-3.fna&oh=00_AYDd-8X2cuW56gUwlELiG1Dim49l_HIpVSY6Zw8NKa5fpg&oe=667A2C6F",
  },
  {
    candidateId: "2",
    name: "Jane Doe",
    role: "Product Manager",
    imageUrl:
      "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/271158089_608241573569093_8522388516126255361_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4aWL1tEDOASebCx9W-xgqlQGufD3YA72VAa58PdgDvUktilpAfhqtG1RtbTc5wxYZURbvYO6HKGddbiFrrm3W&_nc_ohc=b_L36w8sSoIQ7kNvgEWW2Gr&_nc_ht=scontent.fdad1-3.fna&oh=00_AYDd-8X2cuW56gUwlELiG1Dim49l_HIpVSY6Zw8NKa5fpg&oe=667A2C6F",
  },
  // Add more candidates as needed
];

const CandidatePage = () => {
  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Tài năng</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          //   background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          //   borderRadius: borderRadiusLG,
        }}
      >
        <div className="bg-white  p-8 rounded-lg mb-6">
          <h1 className="text-4xl text-yellow-300 font-bold mb-2">
            Danh sách ứng viên
          </h1>
          <p>
            Tại đây, bạn có thể tìm thấy thông tin về những sinh viên tuyệt vời
            của chúng tôi.
          </p>
          <div className="flex justify-center">
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
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-wrap">
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
  );
};

export default CandidatePage;
