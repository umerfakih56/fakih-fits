import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="about-page bg-purple-50 px-6 py-16 max-w-screen-lg mx-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105">
      <div className="container z-10 relative">
        {/* Title with Gradient and Animation */}
        <h2 className="text-5xl text-center mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-800 animate-text transition-transform duration-300 transform hover:scale-110">
          Get in Touch
        </h2>
        <p className="text-black text-lg text-center mb-8 hover:text-pink-400">
          &quot;Drop me a line, give me a call, or send me a message by submitting the form.&quot;
        </p>

        {/* Contact Info and Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-3 items-center transition-transform transform hover:scale-105">
              <AiOutlineMail size={30} className="text-accent" /> 
              <span className="hover:text-yellow-300 transition-colors">fakihumar82@gmail.com</span>
            </div>
            <div className="flex gap-3 items-center transition-transform transform hover:scale-105">
              <BsTelephoneFill size={30} className="text-accent" /> 
              <span className="hover:text-yellow-300 transition-colors">0313-0216116</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-lg font-semibold">Name:</label>
              <input 
                type="text" 
                className="h-[40px] bg-transparent border border-accent text-gray-200 p-2 rounded transition duration-300 focus:border-yellow-500 focus:outline-none" 
                id="name" 
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-lg font-semibold">Email:</label>
              <input 
                type="email" 
                className="h-[40px] bg-transparent border border-accent text-gray-200 p-2 rounded transition duration-300 focus:border-yellow-500 focus:outline-none" 
                id="email" 
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-lg font-semibold">Message:</label>
              <textarea 
                className="bg-transparent border border-accent text-gray-200 p-2 rounded transition duration-300 focus:border-yellow-500 focus:outline-none" 
                id="message" 
                rows={8}
                placeholder="Type your message here..."
              />
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-2 px-6 rounded shadow-lg transform transition-transform hover:scale-105 hover:from-blue-600 hover:to-pink-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
