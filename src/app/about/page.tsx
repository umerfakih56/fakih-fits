import React from 'react';

const About = () => {
  return (
    <div className="about-page bg-purple-50 px-6 py-16 max-w-screen-lg mx-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
      
      {/* Page Title with Stylish Animation */}
      <h2 className="text-center text-4xl font-bold text-purple-800 mb-10 animate-fade-in-down">
        About <span className="text-purple-600">US</span>
      </h2>

      {/* Intro Text with Enhanced Styling and Animation */}
      <div className="content space-y-6 text-gray-800 text-lg leading-relaxed transition duration-500 ease-in-out transform hover:text-purple-700">
        <p className="animate-fade-in">
          <strong className="text-purple-600">Fakih Fits</strong> is your ultimate destination for premium fashion that empowers your style and boosts your confidence. At Fakih Fits, we know that fashion is more than just clothing—it’s a way to express who you are. Our collection is a blend of timeless elegance and contemporary style, tailored for every occasion.
        </p>
        <p className="mt-4 animate-fade-in">
          <strong className="text-purple-600">Our Promise:</strong> Each piece is crafted with precision and attention to detail, ensuring a perfect fit and unmatched comfort. From classic, minimalist designs to bold, modern pieces, Fakih Fits has something unique for every fashion-forward individual.
        </p>
        <p className="mt-4 animate-fade-in">
          <strong className="text-purple-600">Our Mission:</strong> To elevate your wardrobe and confidence with fashion that resonates with your personality. Our versatile designs easily transition from work to play, making them essentials in any wardrobe.
        </p>
        <p className="mt-4 animate-fade-in">
          We prioritize quality, customer satisfaction, and a personalized shopping experience. Discover pieces that not only enhance your style but also define it.
        </p>
      </div>

      {/* Special Quote Section with Hover Effect */}
      <div className="quote-section mt-12 p-4 bg-purple-100 rounded-lg shadow-inner text-center">
        <p className="text-lg italic font-light text-purple-700 hover:text-purple-800 transition duration-300 ease-in-out">
          “Fashion is the armor to survive the reality of everyday life.” – Bill Cunningham
        </p>
      </div>

      {/* Call-to-Action with Dancing Animation */}
      <div className="cta-animation mt-10 text-center text-purple-800 font-bold text-2xl animate-dance">
        Explore Your Style with <span className="text-purple-600">Fakih Fits</span> Today!
      </div>
    </div>
  );
};

export default About;

