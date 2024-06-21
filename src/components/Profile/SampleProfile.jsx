import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";
import { FaStarOfDavid } from "react-icons/fa";

// Sample data array
const candidates = [
  {
    candidateId: "1",
    name: "Đoàn Đoàn",
    role: "Tutor",
    imageUrl:
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-101.jpg",
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
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-106.jpg",
  },
  {
    candidateId: "4",
    name: "Lê Văn Đạt",
    role: "Tutor",
    imageUrl:
      "https://inkythuatso.com/uploads/thumbnails/800/2022/03/a-31-14-06-48.jpg",
  },
{
    candidateId: "5",
    name: "Nguyễn Hưng",
    role: "Tutor",
    imageUrl:
      "https://bedental.vn/wp-content/uploads/2022/11/d42317ab8e6777e08644dd51d8c70a72.jpg",
  },
  {
    candidateId: "6",
    name: "Kim Huệ",
    role: "Babysister",
    imageUrl:
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-107.jpg",
  },
{
    candidateId: "7",
    name: "Thanh Huyền",
    role: "Babysister",
    imageUrl:
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-115.jpg",
  },
  {
    candidateId: "8",
    name: "Thục Nhi",
    role: "Babysister",
    imageUrl:
      "https://mega.com.vn/media/news/0406_anh-gai-xinh-116.jpgCEoQAA",
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
{
    candidateId: "11",
    name: "Đào Anh Trúc",
    role: "Tutor",
    imageUrl:
      "https://vienthammydiva.vn/wp-content/uploads/2022/07/anh-gai-dep-toc-ngan-che-mat-1.jpg",
  },
  {
    candidateId: "12",
    name: "Lê Nhật Trường",
    role: "Babysister",
    imageUrl:
      "https://bedental.vn/wp-content/uploads/2022/11/1e8063154fdf3dcbb07edf0ad2df326a.jpg",
  },
];

function SampleProfile() {
  return (
    <div>
      <Card title="Ứng viên tương tự" bordered={false}>
        {candidates.map((candidate) => (
          <div key={candidate.name} className="flex gap-4">
            <div>
              <Avatar
                size={70}
                src={candidate.avatarURL}
                className="mx-auto mb-3"
              />
            </div>
            <div className="ml-1">
              <div>
                <div className="flex items-center justify-center">
                  <h2 className="text-lg font-semibold mr-3">
                    {candidate.name}
                  </h2>
                  <FaStarOfDavid />
                  <span>({candidate.points} points)</span>
                </div>
              </div>

              <Button
                type="primary"
                shape="round"
                icon={<UserAddOutlined />}
                className="w-50 mt-2 bg-slate-500"
              >
                Kết nối
              </Button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default SampleProfile;