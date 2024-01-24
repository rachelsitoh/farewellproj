import React from "react";
import Navbar from "./NavBar.js";
// import "./AboutUs.css"; // Assuming you have some additional styles
import nic from "../assets/nic.jpg";
import jojo from "../assets/jojo.jpeg";
import simon from "../assets/simon.jpeg";
import zichen from "../assets/zichen.jpeg";
import milton from "../assets/milton.jpg";

const teamData = [
  { id: 1, name: "Nicholas", image: nic },
  { id: 2, name: "Jojo", image: jojo },
  { id: 3, name: "Simon", image: simon },
  { id: 4, name: "Zichen", image: zichen },
  { id: 5, name: "Milton", image: milton },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-5xl font-extrabold mb-8">This is all about us!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-semibold">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
