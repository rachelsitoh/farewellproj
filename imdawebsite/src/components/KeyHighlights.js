import React from "react";
import Navbar from "./NavBar.js";

import ATX from "../assets/ATX.jpeg";
import ORIENTATION from "../assets/orientation.jpeg";
import RETREAT from "../assets/retreat.jpeg";

const groupevent = [
  { id: 1, name: "ATX", image: ATX , description: "Represented IMDA as ambassadors to discuss trending topics such as generative AI with representatives from foreign and local companies and agencies"},
  { id: 2, name: "Internship orientation", image: ORIENTATION, description: "Embarked on our IMDA joruney through an orientation and forging new friendships. Visited the iconic google landmark spot during the amazing race"},
  { id: 3, name: "IMDA Retreat", image: RETREAT, description: "Cherished the moment where we unwind together as an IMDA family at a retreat, enjoying BBQ food and singing to our hearts' content" },

];

const KeyHighlights = () => {
 return (
  <div className="bg-gray-200 min-h-screen">
  <Navbar />
  <div className="container mx-auto py-8">
    <h1 className="mb-10 text-5xl font-extrabold bg-gradient-to-r from-red-600 via-purple-600 to-purple-800 text-transparent bg-clip-text">These are the highlights of our internship!</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {groupevent.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-md overflow-hidden "
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <p className="text-xl font-semibold">{event.name}</p>
            <p className="text-l mt-2">{event.description}</p>
            
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    

);};

export default KeyHighlights;
