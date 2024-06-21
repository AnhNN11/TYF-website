import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";

function SampleProfile() {
  return (
    <div className="">
      <Card title="Ứng viên tương tự" bordered={false}>
        <div className=" flex w-9">
          <Avatar
            size={70}
            src="https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="mx-auto mb-3"
          />
          <div className="">
            <h2 className="text-lg font-semibold">Nguyễn Nhat Anh</h2>
            <div className="text-gray-500 flex">Gia sử tiêu biểu</div>
          </div>
        </div>

        <div className="p-4">
          <Button
            type="primary"
            shape="round"
            icon={<UserAddOutlined />}
            className="w-50"
          >
            Connect
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SampleProfile;
