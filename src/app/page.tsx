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
      <div className="absolute left-0 top-0 h-full w-1/6 md:w-1/12 lg:w-1/6 bg-gradient-to-b from-indigo-600 to-purple-700 opacity-70 rounded-full transform -translate-x-1/2 animate-pulse" />
      <div className="absolute right-0 top-0 h-full w-1/6 md:w-1/12 lg:w-1/6 bg-gradient-to-b from-indigo-600 to-purple-700 opacity-70 rounded-full transform translate-x-1/2 animate-pulse" />

      {/* Fakih Fit's Heading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text tracking-wide">
          Fakih Fits
        </h1>
      </div>

      {/* Logo Section */}
      <div className="relative z-10 w-[250px] h-[125px] md:w-[300px] md:h-[150px] rounded-lg overflow-hidden border-4 border-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image
          src={fakihfits}
          alt="Fakih Fits Logo"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Arrival Sections */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12 max-w-screen-lg justify-items-center">

        {/* Men's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
          <div className="w-[180px] h-[220px] md:w-[200px] md:h-[240px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Babar2}
              alt="Mens Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-blue-300 tracking-wider hover:text-blue-700 transition-colors duration-300 hover:text-shadow">
            Mens Arrival
          </h3>
          <p className="text-sm text-white mt-2 hover:text-blue-700 transition-colors duration-300 hover:text-shadow">
            Discover the latest mens styles
          </p>
        </div>

        {/* Women's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
          <div className="w-[180px] h-[220px] md:w-[200px] md:h-[240px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Hania2}
              alt="Womens Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-pink-300 tracking-wider hover:text-pink-700 transition-colors duration-300 hover:text-shadow">
            Womens Arrival
          </h3>
          <p className="text-sm text-white mt-2 hover:text-pink-700 transition-colors duration-300 hover:text-shadow">
            Explore chic and trendy outfits
          </p>
        </div>

        {/* Kid's Arrival */}
        <div className="text-center transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
          <div className="w-[180px] h-[220px] md:w-[200px] md:h-[240px] rounded-lg overflow-hidden shadow-md hover:shadow-xl border-4 border-purple-300 transition-all duration-300 ease-in-out">
            <Image
              src={Ahmed4}
              alt="Kids Fashion"
              layout="responsive"
              width={150}
              height={200}
              className="rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold text-yellow-200 tracking-wider hover:text-yellow-500 transition-colors duration-300 hover:text-shadow">
            Kids Arrival
          </h3>
          <p className="text-sm text-white mt-2 hover:text-yellow-500 transition-colors duration-300 hover:text-shadow">
            Bright and fun outfits for kids
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
