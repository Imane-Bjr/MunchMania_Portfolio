import React, { useContext, useEffect, useState } from 'react';
import logo from '/MunchMania_Logo_NO_bg.png';
import { FaRegUser } from "react-icons/fa";
import Modal from './Modal';
import { AuthContext } from '../contexts/AuthProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Navbar = () => {
  // `isSticky` is a state variable to determine if the navbar should have a sticky (fixed) effect.
  // It is initialized to `false`, meaning the navbar is not sticky by default.
  const [isSticky, setSticky] = useState(false);

  // Retrieve the `user` from `AuthContext` to manage user authentication state.
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart(); 

  console.log(cart)

  // `useEffect` runs once when the component mounts and sets up a scroll event listener.
  useEffect(() => {
    // `handleScroll` checks the vertical scroll offset (`window.scrollY`).
    // If the offset is greater than 0, `isSticky` is set to `true` to apply a sticky effect.
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    // Add the scroll event listener to the window object.
    window.addEventListener("scroll", handleScroll);

    // Cleanup function that removes the scroll event listener when the component unmounts
    // or when the effect is re-run, preventing potential memory leaks.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll smoothly to a section identified by its `id`.
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',  // Smooth scroll effect
        block: 'center',     // Align the section to the center of the viewport
      });
    }
  };

  // The `navbarItems` variable contains the navigational links and their corresponding actions.
  const navbarItems = (
    <>
      <li>
        <a className='text-violet hover:bg-[#e4d7ef] hover:text-purple-800' href='/'>Home</a>
      </li>
      <li>
        <a href='/menu' className='hover:bg-[#e4d7ef] hover:text-purple-800 cursor-pointer'>Menu</a>
      </li>
      <li>
        {/* Calls the `scrollToSection` function to navigate to 'Categories' */}
        <a href="#" className='hover:bg-[#e4d7ef] hover:text-purple-800 cursor-pointer' onClick={() => scrollToSection('categories')}>Categories</a>
      </li>
      <li>
        {/* Calls the `scrollToSection` function to navigate to 'Services' */}
        <a href="#" className='hover:bg-[#e4d7ef] hover:text-purple-800 cursor-pointer' onClick={() => scrollToSection('services')}>Services</a>
      </li>
      <li>
        {/* Calls the `scrollToSection` function to navigate to 'Specialities' */}
        <a href="#" className='hover:bg-[#e4d7ef] hover:text-purple-800 cursor-pointer' onClick={() => scrollToSection('specialities')}>Specialities</a>
      </li>
      <li>
        {/* External link that opens in a new tab */}
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/Imane-Bjr/ManchMania_Portfolio/blob/main/README.md#-team-and-roles" 
          className='hover:bg-[#e4d7ef] hover:text-purple-800 cursor-pointer'
        >
          Our Team
        </a>
      </li>
    </>
  );

  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      {/* The main navbar container */}
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out text-black" : ""}`} style={{ height: '4rem' }}>
        <div className="navbar-start">
          {/* Dropdown menu for smaller screens */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              {/* Hamburger icon for the dropdown menu */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            {/* The dropdown content containing the navbar items */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navbarItems}
            </ul>
          </div>
          {/* Logo section of the navbar */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="MunchMania Logo" className="h-28 w-auto max-w-full" />
          </a>
        </div>
        {/* Center section for navbar items on larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbarItems}
          </ul>
        </div>
        {/* Right end of the navbar for search, cart, and login functionalities */}
        <div className="navbar-end">
          {/* Search button */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            {/* Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* Cart button with item count badge */}
          <Link to="cart-page">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle  lg:flex items-center justify-center mr-3"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{cart.length || 0}</span>
                </div>
              </label>
          </Link>
          {/* Login button that opens a modal */}
          {
            user? <Profile user={user}/> :
            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-violet rounded-full px-6 text-white flex items-center gap-2">
            <FaRegUser /> Login
            </button>
          }
          {/* Modal component for the login form */}
          <Modal />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
