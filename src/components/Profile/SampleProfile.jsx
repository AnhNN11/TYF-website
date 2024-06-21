import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";
import { FaStarOfDavid } from "react-icons/fa";

// Sample data array
const candidates = [
  {
    name: " Nhật Anh",
    points: 95,
    avatarURL:
      "https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: " Nhật Anh",
    points: 95,
    avatarURL:
      "https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: " Nhật Anh",
    points: 95,
    avatarURL:
      "https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: " Nhật Anh",
    points: 95,
    avatarURL:
      "https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: " Nhật Anh",
    points: 95,
    avatarURL:
      "https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7",
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