import React from "react";
import slideMovie from "/assets/movie/slideMovie.mp4";

export default function ImageSlider() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Video container */}
        <div className="w-full h-full relative">
          {/* Dummy video that actually plays */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            {/* Using a free stock video from Pixabay */}
            <source src={slideMovie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Overlay with text */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            革新的な繊維技術で未来を紡ぐ
          </h1>
          <p className="text-xl md:text-2xl">
            最先端の技術と伝統の技を融合し、新しい価値を創造します
          </p>
          <div className="mt-8"></div>
        </div>
      </div>

      {/* Video controls - optional */}
      <div className="absolute bottom-4 right-4">
        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 15.536L9.879 9.879M9.879 9.879L4.222 4.222M9.879 9.879L15.536 4.222M9.879 9.879L4.222 15.536"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
