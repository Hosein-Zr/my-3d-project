"use client";
import React from "react";

const MyParentComponent: React.FC = () => {
  const playSound = () => {
    const audio = new Audio("/sounds/click.wav"); // Path to the sound file in the public folder
    audio.play();
  };

  return (
    <div className=" h-screen w-screen bg-green-100">
      
      <button
        onClick={() => playSound()}
        className="p-4 bg-blue-500 text-white rounded"
      >
        Play Click Sound
      </button>
      {/* <div className="absolute bottom-4 left-4 flex gap-4">
          Make Red
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => changeColor("#00FF00")} // Change to green
        >
          Make Green
        </button>
      </div> */}
    </div>
  );
};

export default MyParentComponent;
