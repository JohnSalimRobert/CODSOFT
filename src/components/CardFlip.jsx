import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import profilepic from "../assets/profilepic.jpg";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="h-full">
      <div className="flip-card h-full" onClick={handleFlip}>
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover rounded-lg "
            style={{
              backgroundImage: `url(${profilepic})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "25% 55%",
            }}
          >
            <div className=" h-full text-transparent hover:text-white text-xl flex justify-center items-center hover:cursor-pointer hover:bg-gray-700 hover:opacity-60 duration-300"><p>Click Me</p></div>
          </div>
          <div className="flex justify-center flip-card-back w-[100%] h-[100%] bg-cover rounded-lg p-4 hover:cursor-pointer">
            <p className="font-VT323 text-left text-slate-300 text-2xl">
              I am a web developer based in Rawalpindi, Pakistan with a
              Bachelor's degree in Computer Science, I thrive on creating
              seamless and efficient web applications using HTML5, CSS3, and
              JavaScript, with a knack for React.js. As a proactive team player,
              I collaborate seamlessly to develop reusable components and
              libraries, ensuring top-notch performance across diverse devices.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
