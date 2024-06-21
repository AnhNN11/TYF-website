import { Avatar, Button, Card, Col, List } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import Title from "antd/es/skeleton/Title";
import React, { useState } from "react";
// Enhanced data array with more properties
const data = [
  {
    title: "Bằng tốt nghiệp",
    description: "Description for Title 1",
    link: "https://ant.design/docs/react/introduce",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9QsXRzns-NDqOypPMHRgojEpyDFOSDdOtEA&s",
  },
  {
    title: "Ant Design Title 2",
    description: "Description for Title 2",
    link: "https://ant.design/docs/react/customize-theme",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgGApOABX6L1KTXg0XzCOQgvFzieFvdK3rw&s",
  },
  {
    title: "Ant Design Title 2",
    description: "Description for Title 2",
    link: "https://ant.design/docs/react/customize-theme",
    avatar:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera.s3.amazonaws.com/media/coursera-rebrand-logo-square.png?auto=format%2Ccompress&dpr=1",
  },
];

function Certifications() {
  return (
    <div className="rounded-lg basis-[70%] w-full">
      <div className="relative h-full">
        <span className="absolute w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
          <div className="flex items-center -mt-1 ">
            <h3 className="text-lg font-bromega-light text-gray-800  ">Chứng chỉ</h3>
          </div>
          <p className="text-xs font-medium text-blue-400 uppercase">
            ----------------------
          </p>

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.link}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;