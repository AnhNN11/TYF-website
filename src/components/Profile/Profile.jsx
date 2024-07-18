"use client";
import { ContainerOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import ViewMark from "./ViewMark";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  async function fetchData() {
    const url =
      "https://script.google.com/macros/s/AKfycbwVNhJDnIeIlycUKcgqL8pHGUCzPewlKIjjyyiaNGs/dev";

    try {
      const response = await fetch(url);
      
      const data = await response.json();
      console.log(data);
      // Handle your data here
      return data;
    } catch (error) {
      console.error("Could not fetch the data: ", error);
    }
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    fetchData();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const BANK_ID = "VPB";
  const ACCOUNT_NO = "0964106456";
  const TEMPLATE = "compact";
  const AMOUNT = "20000";
  const DESCRIPTION = "<CAM ON BAN DA GIUP DO>";
  const ACCOUNT_NAME = "<NGUYEN NHAT ANH>";

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
          onClick={showModal}
          className="w-50 bg-customBlue"
        >
          Kết nối
        </Button>
        <Modal
          title="Thanh toán"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
          height={320}
          footer=""
        >
          <div className="flex ">
            <div className="p-6 md:p-20">
              <h2 className="font-bromega-bold mb-5 text-4xl font-bold">
                Thông tin thanh toán
              </h2>
              <p className="font-bromega-regular max-w-sm mb-6 font-sans font-light text-gray-600">
                Thanh toán bằng cách quét mã QR bên phải màn hình
              </p>
              <p className="font-bromega-bold mb-2 font-bold">
                Họ và tên nhân viên:
              </p>
              <input
                type="text"
                className="mb-1 font-bromega-regular w-full p-6 h-12 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Họ và tên"
                value="Nguyễn Văn A"
              />
              <p className="font-bromega-bold mb-2 font-bold">Chức vụ:</p>
              <input
                type="text"
                className="my-1 font-bromega-regular w-full p-6 h-12 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Chức vụ"
                value="Giám đốc"
              />
              <p className="font-bromega-bold mb-2  font-bold">
                Ngày nhận việc:
              </p>
              <input
                type="date"
                className="mb-1 font-bromega-regular w-full p-6 h-12 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder="Thời gian thuê"
                value="2023-04-01"
              />

              <button className="font-bromega-regular bg-blue-500 text-white rounded-lg w-40 h-12 flex items-center justify-center mt-4">
                <span>Xác nhận đã chuyển khoản</span>
              </button>
            </div>
            <div className="qr-container">
              <img
                src={`https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${AMOUNT}&addInfo=${DESCRIPTION}&accountName=${ACCOUNT_NAME}`}
                alt="QR Code"
                className="w-[420px] h-[410px] mt-20 hidden md:block border-4 border-green-500"
              />
            </div>
          </div>
        </Modal>
        <ViewMark></ViewMark>
      </div>
    </div>
  );
}

export default Profile;