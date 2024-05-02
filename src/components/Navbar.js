import React from 'react'
import { Link } from 'react-router-dom'
// border-b-4 border-blue-700 text-center fixed top-0 bg-blue-600 font-bold w-full text-lg text-white

// border-b-4 border-blue-700 text-center fixed top-0 bg-gradient-to-r from-blue-400 to-blue-600 font-bold w-full text-lg text-white
export default function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Use smooth scrolling animation
    });
  };

  return (
    <nav className="border-b-4 border-blue-700 text-center fixed top-0 bg-gradient-to-r from-blue-400 to-blue-600 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8" onClick={scrollToTop}>
            {" "}
            Home
          </Link>
        </li>

        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-8" onClick={scrollToTop}>
            {" "}
            About
          </Link>
        </li>

        <li className="inline-block py-4">
          <Link to="/articles-list" className="pl-6 pr-8" onClick={scrollToTop}>
            {" "}
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
