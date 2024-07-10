import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    name: "Gia sư",
    description: "Gia sư dạy theo gói",
    availability: "Có sẵn",
    packages: [
      { id: 1, name: "Gói 1,2,3,4,5 (College)", price: 1200000 },
      { id: 2, name: "Gói 1,2,3,4,5 (Teacher)", price: 1500000 },
      { id: 3, name: "Gói 1,2,3,4,5 (Master)", price: 1800000 },
      { id: 4, name: "Gói 6,7,8,9(College)", price: 1500000 },
      { id: 5, name: "Gói 6,7,8,9(Teacher)", price: 1800000 },
      { id: 6, name: "Gói 6,7,8,9(Master)", price: 2100000 },
      { id: 7, name: "Gói 10,11(College)", price: 1500000 },
      { id: 8, name: "Gói 10,11(Teacher)", price: 2100000 },
      { id: 9, name: "Gói 10,11(Master)", price: 2400000 },
      { id: 10, name: "Gói 12+(College)", price: 1950000 },
      { id: 11, name: "Gói 12+(Teacher)", price: 2250000 },
      { id: 12, name: "Gói 12+(Master)", price: 2750000 },
    ],
  },
  {
    id: 2,
    name: "Trông trẻ",
    description: "Trông trẻ theo giờ",
    availability: "Có sẵn",
  },
];

const Booking = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(""); // Change to string for select input
  const [selectedHours, setSelectedHours] = useState(1); // Default 1 hour
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState(""); // New state for user's name

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedPackage(""); // Reset selected package when changing service
    setSelectedHours(1); // Reset selected hours when changing service
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handlePackageSelect = (e) => {
    setSelectedPackage(e.target.value); // Update selectedPackage with the selected value
  };

  const handleHoursChange = (e) => {
    setSelectedHours(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBooking = () => {
    // Handle booking logic here, e.g., send booking request
    console.log(`Booking service: ${selectedService.name}, Date: ${selectedDate}`);
    console.log(`User's name: ${userName}`); // Log user's name
    if (selectedService.name === "Gia sư") {
      console.log(`Selected package: ${selectedPackage}, Address: ${address}, Phone number: ${phoneNumber}`);
    } else if (selectedService.name === "Trông trẻ") {
      console.log(`Number of hours: ${selectedHours}`);
    }
    // Clear selected service, date, package, hours, address, phone number, and name after booking
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedPackage("");
    setSelectedHours(1);
    setAddress("");
    setPhoneNumber("");
    setUserName("");
    // Display booking confirmation or take further actions
  };

  return (
    <>
      <Navbar />
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gradient-to-br from-blue-100">
        <div className="container mx-auto">
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -75 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="-mx-4 flex flex-wrap justify-center"
          >
            <div className="w-full px-4">
              <div className="mx-auto mb-12 text-center lg:mb-20">
                <h2 className="mb-4 text-3xl font-bromega-bold text-customBlue sm:text-4xl md:text-[40px]">
                  Đặt Lịch
                </h2>
                <p className="text-lg font-bromega-light text-gray-500">
                  Chọn dịch vụ và thời gian bạn muốn đặt lịch
                </p>
              </div>
            </div>
          </motion.div>
          <div className="-mx-4 flex flex-wrap justify-center"> {/* Change justify-center here */}
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 75 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.75, delay: index * 0.2 + 0.2 }}
                className="w-full px-4 sm:w-1/2 lg:w-1/3"
              >
                <div
                  className={`mx-auto mb-10 max-w-[370px] ${
                    selectedService && selectedService.id === service.id
                      ? "border-2 border-blue-500"
                      : "border border-gray-200"
                  } rounded p-4`}
                  onClick={() => handleServiceSelect(service)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-base text-gray-600 mb-4">{service.description}</p>
                  <span
                    className={`inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose ${
                      service.availability === "Sắp mở"
                        ? "bg-orange-400 text-white"
                        : service.availability === "Đã đóng"
                        ? "bg-red-400 text-white"
                        : "bg-green-400 text-white"
                    }`}
                  >
                    {service.availability}
                  </span>
                  {service.packages && (
                    <div className="">
                      {/* Render package details or other info here */}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          {selectedService && (
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0.8 }}
              className="mt-6 max-w-[370px] mx-auto"
            >
              <h3 className="text-lg font-semibold mb-2">Chọn thời gian:</h3>
              <input
                type="date"
                className="w-full border border-gray-200 rounded p-2 mb-4"
                onChange={(e) => handleDateSelect(e.target.value)}
              />
              {selectedService.name === "Gia sư" && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">Chọn gói:</label>
                  <select
                    className="w-full border border-gray-200 rounded p-2 mb-2 cursor-pointer"
                    value={selectedPackage} // Use selectedPackage state here
                    onChange={handlePackageSelect} // Update handlePackageSelect to handle select change
                  >
                    <option value="">Chọn gói</option>
                    {selectedService.packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.name}>
                        {pkg.name} - {pkg.price} VNĐ
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {selectedService.name === "Gia sư" && (
                <>
                  <label className="block text-sm font-semibold mb-1">Địa chỉ:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded p-2 mb-4"
                    value={address}
                    onChange={handleAddressChange}
                  />
                  <label className="block text-sm font-semibold mb-1">Số điện thoại:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded p-2 mb-4"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
                </>
              )}
              {selectedService.name === "Trông trẻ" && (
                 <div className="mb-4">
                 <label className="block text-sm font-semibold mb-1">Địa chỉ:</label>
                 <input
                   type="text"
                   className="w-full border border-gray-200 rounded p-2 mb-2"
                   value={address}
                   onChange={handleAddressChange}
                 />
                 <label className="block text-sm font-semibold mb-1">Số điện thoại:</label>
                 <input
                   type="text"
                   className="w-full border border-gray-200 rounded p-2 mb-2"
                   value={phoneNumber}
                   onChange={handlePhoneNumberChange}
                 />
                 <label className="block text-sm font-semibold mb-1">Số giờ:</label>
                 <input
                   type="number"
                   min="1"
                   step="1"
                   className="w-full border border-gray-200 rounded p-2 mb-4"
                   value={selectedHours}
                   onChange={handleHoursChange}
                 />
             
                 {/* Bảng quy đổi giờ thành tiền */}
                 <table className="w-full border border-gray-200 rounded p-2 mb-4">
                   <thead>
                     <tr className="bg-gray-100">
                       <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Giờ</th>
                       <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Giá tiền / Giờ (VNĐ)</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Giờ đầu</td>
                       <td className="border border-gray-300 px-4 py-2">150,000</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Giờ 2</td>
                       <td className="border border-gray-300 px-4 py-2">140,000</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Giờ 3</td>
                       <td className="border border-gray-300 px-4 py-2">125,000</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Giờ 4</td>
                       <td className="border border-gray-300 px-4 py-2">120,000</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Giờ 5</td>
                       <td className="border border-gray-300 px-4 py-2">110,000</td>
                     </tr>
                     <tr>
                       <td className="border border-gray-300 px-4 py-2">Từ giờ 6</td>
                       <td className="border border-gray-300 px-4 py-2">110,000</td>
                     </tr>
                     
                     
                   </tbody>
                 </table>
             
                 
               </div>
              )}
              {/* Add input for user's name */}
              <label className="block text-sm font-semibold mb-1">Tên của bạn:</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded p-2 mb-4"
                value={userName}
                onChange={handleNameChange}
              />
              <button
                onClick={handleBooking}
                className="w-full bg-customBlue text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Đặt lịch dịch vụ {selectedService.name}
              </button>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
