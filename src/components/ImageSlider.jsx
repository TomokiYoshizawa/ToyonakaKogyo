import React from "react";
import slideMovie from "/assets/movie/slideMovie.mp4";

export default function ImageSlider() {
  return (
    <div className="relative h-screen overflow-hidden mb-24">
      <div className="absolute inset-0 bg-black">
        <div className="w-full h-full relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={slideMovie} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            革新的な繊維技術で未来を紡ぐ
          </h1>
          <p className="text-xl md:text-3xl font-medium leading-relaxed">
            最先端の技術と伝統の技を融合し、新しい価値を創造します
          </p>
          <div className="mt-12"></div>
        </div>
      </div>
    </div>
  );
}
