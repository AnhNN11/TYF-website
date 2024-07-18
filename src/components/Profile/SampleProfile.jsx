import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";
import { FaStarOfDavid } from "react-icons/fa";

// Sample data array
const candidates = [
  {
    name: "Mỹ Anh",
    points: 95,
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThiTBhs-6aZZrLEiDEorvR0Jx8JQ9FzsLV5Q&s",
  },
  {
    name: "Lan Hương",
    points: 73,
    avatarURL:
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/437941897_1081391949825747_2297369076400627761_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=68laCxB_BoQQ7kNvgGJwL_3&_nc_ht=scontent-hkg4-1.xx&oh=00_AYCpLyzkVe5kCtWX_pwvbFU2ffFycCbkK4H_vMSGwe80zA&oe=669EFA52",
  },
  {
    name: "Lê Bảo Anh",
    points: 81,
    avatarURL:
    "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/422894464_4408035806088068_5182694526900589172_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JU-rZrQIti4Q7kNvgEQfWIJ&_nc_ht=scontent-hkg1-2.xx&oh=00_AYBCnEAU-3zqcvkzZYWnlQ-kMrMQIqcfSsIikdPwj2kexQ&oe=669EFAE0",
  },
  {
    name: "Trần Bảo Trân",
    points: 93,
    avatarURL:
    "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/450224659_841457571244655_2570864231675852316_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDoec_07R88Q7kNvgFnVr-N&_nc_ht=scontent-hkg1-2.xx&oh=00_AYD1ru2-W-If3G3tHWHGPsfIqygWvd0Kwr8y5Cez_ziuiQ&oe=669EF6D5",
  },
  {
    name: "Phương Anh",
    points: 88,
    avatarURL:
    "https://mega.com.vn/media/news/0406_anh-gai-xinh-117.jpg",
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