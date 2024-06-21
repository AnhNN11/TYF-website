"use client";
import { ContainerOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import ViewMark from "./ViewMark";

function Profile() {
  return (
    <div className="max-w-full basis-[70%] bg-white rounded-lg">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-bia-dep-10.jpg"
          alt="Profile background"
        />
      </div>
      <div className="flex">
        <div className="ml-5 w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-fit object-cover w-full h-full rounded-full"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448193763_430485549895959_9028795443413084369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuLMLOLA1R8dX7dazhCuRpKm_x2WxSQGMqb_HZbFJAY8pl-iG-P94eVGo5lcY9720yST9UHTENMVK5EIsF0XHm&_nc_ohc=OQUeuhkSKx4Q7kNvgFSrTj8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEv6BSKmdy6aDsVZ4OOhPJl6RArf9L8pnGvhe3zesF9Jg&oe=669CC516"
            alt={`${name}'s profile`}
          />
        </div>
        <div className="ml-5 text-left">
          <div className="ml-5 text-left">
            <h1 className="font-bold text-4xl text-gray-800 mb-2">
              Phan Quốc Thái Bảo
            </h1>
            <p className="text-gray-600 text-lg">Gia sư tiêu biểu</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex gap-3">
        <Button
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          className="w-50"
        >
          Connect
        </Button>
        <ViewMark></ViewMark>
      </div>
    </div>
  );
}

export default Profile;
