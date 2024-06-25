import React from "react";
import RadarChart from "../Radar";

function Skills() {
  return (
    <div className=" rounded-lg  basis-[70%] w-ful ">
      <div className="relative h-full">
        <span className="absolute w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
          <div className="flex items-center -mt-1">
            <h3 className="  text-lg font-bold text-gray-800">
              Giới thiệu bản thân
            </h3>
          </div>
          <p className=" text-xs font-medium text-blue-400 uppercase">
            ----------------------
          </p>
          <div className="flex gap-4">
            <div className="">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Kinh nghiệm giảng dạy:
              </h2>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  [Số năm kinh nghiệm] năm kinh nghiệm giảng dạy cho học sinh ở
                  mọi lứa tuổi và trình độ
                </li>
                <li>
                  Chuyên môn về các môn học [Liệt kê các môn học bạn giỏi]
                </li>
                <li>
                  Kinh nghiệm giảng dạy tại các trường học uy tín [Liệt kê tên
                  trường học]
                </li>
                <li>
                  Kinh nghiệm gia sư cho học sinh đạt điểm cao trong các kỳ thi
                  [Liệt kê các kỳ thi]
                </li>
              </ul>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Phương pháp giảng dạy:
              </h2>
              <ul className="list-disc pl-5">
                <li>
                  Phương pháp giảng dạy hiện đại, bám sát chương trình học, phù
                  hợp với từng học sinh
                </li>
                <li>
                  Rèn luyện kỹ năng tư duy, rèn luyện tính tự giác và ham học
                  hỏi cho bé
                </li>
                <li>
                  Tạo môi trường học tập vui vẻ, thoải mái để học sinh tiếp thu
                  kiến thức hiệu quả
                </li>
                <li>Sử dụng các tài liệu giảng dạy phong phú, đa dạng</li>
                <li>Luôn quan tâm, động viên và khích lệ học sinh</li>
              </ul>
            </div>
            <div className="container mx-auto w-1/2">
              <h1 className="text-xl font-bold mb-2">
                Mức độ phù hợp của bạn với công việc:
              </h1>

           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;