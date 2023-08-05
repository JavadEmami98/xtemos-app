import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const loop = [
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-3.jpg",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-6.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-4.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-2.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-6.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-9.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-2.jpg.webp",
  },
  {
    img: "https://a6n4d3q9.rocketcdn.me/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-4.jpg.webp",
  },
];

function GridPics() {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
      {loop.map((item, index) => (
        <div
          key={index}
          className="cart relative cursor-pointer text-center overflow-hidden"
        >
          <div className="image-container">
            <img src={item.img} alt="" loading="lazy" className="image" />
            <div className="absolute bottom-0 right-0 image-text">
              <div className="flex justify-between text-[18px] pb-[10px] px-[15px] font-semibold w-full">
                <div className="flex">
                  <p>856</p>
                  <FavoriteBorderIcon sx={{ mr: "5px" }} />
                </div>
                <div className="flex">
                  <p>217</p>
                  <ChatBubbleOutlineIcon sx={{ mr: "5px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GridPics;
