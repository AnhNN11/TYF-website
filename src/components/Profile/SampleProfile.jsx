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
    "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/371930151_2223735487817461_1331707486430222022_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFma_Efzs4tSIJsbjtTu5XGlFRR05KfIWOUVFHTkp8hY7OPj9tlpChDXZESjeSTGlXlqlv-vlUfr69H_OpH8OBp&_nc_ohc=CY4rbUzvO4IQ7kNvgHseQ5j&_nc_ht=scontent.fdad3-4.fna&oh=00_AYCtNuOcDuwLtWOyJWI9-BjHZeN31QJ9xnjHVuzJTTHlBA&oe=667B9630",
  },
  {
    name: "Lê Bảo Anh",
    points: 81,
    avatarURL:
    "https://instagram.fdad3-5.fna.fbcdn.net/v/t39.30808-6/440343097_18037677745892577_5178960344427018462_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTUuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fdad3-5.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Sx4-hJDPd1UQ7kNvgEj3VkM&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzM1NDU2NTQ5MjYwMTQ5OTIyNA%3D%3D.2-ccb7-5&oh=00_AYCBtuUJHj8oIURP5XvDlpcAAo0OCgyxsuflQvjIXBacQg&oe=667B7C49&_nc_sid=cf751b",
  },
  {
    name: "Trần Bảo Trân",
    points: 93,
    avatarURL:
    "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/351780589_818952549654257_4503747128713539792_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE02QaFTEPP2HvgkPRyytzlBVbNQdeBV8UFVs1B14FXxYKQzWBi9MJBkFzkvXjTU1A7eLY3LBv7szD0nrljKKgG&_nc_ohc=AHb6TExpvmQQ7kNvgEQJOrr&_nc_ht=scontent.fdad2-1.fna&oh=00_AYAbjoFIwYZbd6aStOBzxAn53Sv_h4c0I9rxU0sd6_dJsg&oe=667B7EF2",
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