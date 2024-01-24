import React from "react";
import Navbar from "./NavBar.js";
import groupPic from "../assets/groupPic.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <Navbar />
      <div style={{ paddingLeft: "2%" }}>
        <h1 className="mt-4 text-5xl font-extrabold bg-gradient-to-r from-red-600 via-purple-600 to-purple-800 text-transparent bg-clip-text">
          Meet Our Interns!
        </h1>

        <p className="text-black font-inter text-lg description mt-4 mb-4">
          An IMDA internship provides a <b>dynamic immersion</b> in Singapore's
          infocomm and media sector, where interns collaborate on{" "}
          <b>impactful </b>
          projects and gain hands-on experience in research and technology
          implementation. The program cultivates a holistic understanding,
          enhancing technical skills and fostering adaptability. It offers a
          unique opportunity for professional growth, networking, and active
          participation in shaping the future of Singapore's infocomm and media
          landscape.
        </p>
        <img
          src={groupPic}
          alt="Group Photo"
          style={{ width: "99%", display: "block", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Home;
