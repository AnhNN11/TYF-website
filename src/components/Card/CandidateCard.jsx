import React from "react";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import CandidateImage from "./CandidateImage";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CandidateCard = ({ candidate }) => {
  return (
    <Card
      style={{ width: 300, margin: 16 }}
      cover={
        <CandidateImage
          imageUrl={candidate.imageUrl}
          altText={`${name}'s avatar`}
        />
      }
      actions={[
        <Link key="more" to={`/candidates/${candidate.candidateId}`}>
          Thông tin chi tiết
        </Link>,
      ]}
      className="group-hover:shadow-lg transition-transform transform duration-300 ease-in-out"
    >
      <Meta title={candidate.name} description={candidate.role} />
    </Card>
  );
};

export default CandidateCard;
