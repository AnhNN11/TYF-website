import { Button, Modal } from "antd";
import React, { useState } from "react";

const imageUrl =
  "https://res.cloudinary.com/dehk1bcny/image/upload/v1718968685/lpgvfieyn7l8axasl8lp.jpg";

function ViewMark() {
  const [modalVisible, setModalVisible] = useState(false);

  // ... (your existing code)

  // Function to handle button click and show modal
  const handleButtonClick = () => {
    setModalVisible(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleButtonClick}
        className="bg-blue-600"
      >
        Chứng chỉ
      </Button>

      {/* Modal to display the image */}
      <Modal
        title="Hình ảnh chứng chỉ "
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={1000} // Adjust the width as needed
      >
        <img src={imageUrl} alt="Preview" className="w-full" />
      </Modal>
    </>
  );
}

export default ViewMark;
