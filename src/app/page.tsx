import React from "react";
import Image from "next/image";
import fakihfits from "../../public/fakihfitslogo.png";
import Babar2 from "../../public/Babar2.jpeg";
import Hania2 from "../../public/Hania2.jpeg";
import Ahmed4 from "../../public/Ahmed4.jpeg";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-300 to-indigo-400 flex flex-col items-center py-12 px-4 space-y-16">
      
      {/* Decorative Circles */}
      <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-b from-indigo-600 to-purple-700 opacity-70 rounded-full transform -translate-x-1/2 animate-pulse" />
      <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-b from-indigo-600 to-purple-700 opacity-70 rounded-full transform translate-x-1/2 animate-pulse" />

      {/* Fakih Fit's Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text tracking-wide">
          Fakih Fits
        </h1>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 w-[300px] h-[150px] rounded-lg overflow-hidden border-4 border-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={fakihfits}
          alt="Fakih Fits Logo"
          layout="responsive"
          width={300}
          height={150}
          className="rounded-lg"
        />
      </div>

      {/* Arrival Sections */}
      <div className="relative z-10 flex justify-between w-full mt-12 space-x-8 max-w-screen-lg">
        
        {/* Men's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-[250px] h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Babar2}
              alt="Mens Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-3 text-2xl font-bold text-blue-300 tracking-wider hover:text-blue-700 transition-colors duration-300">Mens Arrival</h3>
          <p className="text-sm text-white mt-1 hover:text-blue-700 transition-colors duration-300">Discover the latest mens styles</p>
        </div>

        {/* Women's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-[250px] h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Hania2}
              alt="Womens Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-3 text-2xl font-bold text-pink-300 tracking-wider hover:text-pink-700 transition-colors duration-300">Womens Arrival</h3>
          <p className="text-sm text-white mt-1 hover:text-pink-700 transition-colors duration-300">Explore chic and trendy outfits</p>
        </div>

        {/* Kid's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="w-[250px] h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Ahmed4}
              alt="Kids Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-3 text-2xl font-bold text-yellow-200 tracking-wider hover:text-yellow-500 transition-colors duration-300">Kids Arrival</h3>
          <p className="text-sm text-white mt-1 hover:text-yellow-500 transition-colors duration-300">Bright and fun outfits for kids</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
