"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState(0); // Tracks items in the cart

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to add an item to the cart
    const handleAddToCart = () => {
        setCartItems(cartItems + 1);
    };

    return (
        <nav className="bg-gray-900 py-4 px-7 shadow-md">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto relative">
                
                {/* Logo Section */}
                <Link href="/">
                    <div className="w-12 h-12 relative overflow-hidden rounded-full border-2 border-purple-400 cursor-pointer">
                        <Image
                            src="/fakihfitslogo.png"
                            alt="Fakih Fits"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex gap-4 text-purple-400 text-sm items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/Mens">Men&apos;s</Link></li>
                    <li><Link href="/Women">Women&apos;s</Link></li>
                    <li><Link href="/kids">Kids</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li className="relative">
                        <MdShoppingCart className="text-xl cursor-pointer" onClick={handleAddToCart} />
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItems}
                            </span>
                        )}
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-purple-400 text-2xl focus:outline-none"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Links */}
            {isMobileMenuOpen && (
                <ul className="flex flex-col items-center gap-4 text-purple-400 text-sm mt-4 bg-gray-900 py-4 md:hidden">
                    <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link href="/Mens" onClick={toggleMenu}>Men&apos;s</Link></li>
                    <li><Link href="/Women" onClick={toggleMenu}>Women&apos;s</Link></li>
                    <li><Link href="/kids" onClick={toggleMenu}>Kids</Link></li>
                    <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li className="relative">
                        <MdShoppingCart className="text-xl cursor-pointer" onClick={handleAddToCart} />
                        {cartItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {cartItems}
                            </span>
                        )}
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
