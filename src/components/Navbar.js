import React from 'react'
import { Link } from 'react-router-dom'
// border-b-4 border-blue-700 text-center fixed top-0 bg-blue-600 font-bold w-full text-lg text-white

// border-b-4 border-blue-700 text-center fixed top-0 bg-gradient-to-r from-blue-400 to-blue-600 font-bold w-full text-lg text-white
export default function Navbar() {
  return (
    <nav className="border-b-4 border-blue-700 text-center fixed top-0 bg-gradient-to-r from-blue-400 to-blue-600 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            {" "}
            Home
          </Link>
        </li>

        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-8">
            {" "}
            About
          </Link>
        </li>

        <li className="inline-block py-4">
          <Link to="/articles-list" className="pl-6 pr-8">
            {" "}
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}
