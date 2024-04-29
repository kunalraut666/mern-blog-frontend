import React from 'react';
import myPic from '../assets/img/my-pic-circle.png'

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-8">
              <img className="w-20 h-auto" src={myPic} alt="Logo" />
            </div>
            <div>
              <p className="text-lg font-semibold">Author: Kunal Raut</p>
              <p className="text-sm">
                Software Engineer at{" "}
                <a href="https://www.prodapt.com/" className="text-red-500">
                  Prodapt Solutions
                </a>
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">About Me</h4>
            <p className="mb-4">
              I'm a seasoned developer at Prodapt Solutions, specializing in a
              range of technologies including Python, React, Drupal, and the
              MERN stack. With a passion for crafting elegant solutions and a
              commitment to excellence, I thrive in the dynamic world of
              software engineering.
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="footer__nav-col">
                <h4 className="text-lg font-semibold mb-4">
                  Articles
                </h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="/article/learn-react" className="hover:text-green-500">
                      The Fastest Way to Learn React
                      </a>
                    </li>
                    <li>
                      <a href="/article/learn-node" className="hover:text-green-500">
                      How to Build a Node Server in 10 Minutes
                      </a>
                    </li>
                    <li>
                      <a href="/article/my-thoughts-on-learning-react" className="hover:text-green-500">
                        My Thoughts on Learning ReactJS
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mt-4">
                  <a href="/articles-list" className="text-green-500">
                    More Articles
                  </a>
                </div>
              </div>
              <div className="footer__nav-col">
                <h4 className="text-lg font-semibold mb-4">
                  Professional Experience
                </h4>
                <nav>
                  <ul className="space-y-2">
                    <li>
                      <a href="/skills" className="hover:text-green-500">
                        Skills
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="hover:text-green-500">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="/education" className="hover:text-green-500">
                        Education
                      </a>
                    </li>
                    <li>
                      <a
                        href="/certifications"
                        className="hover:text-green-500"
                      >
                        Certifications
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mt-4">
                  <a href="mailto:kunalraut489@gmail.com" className="text-green-500">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <p className="text-xs text-gray-400">
              Copyright © {currentYear}{" "}
              <a href="/" className="text-green-500">
                Kunal Raut
              </a>{" "}
              • All Rights Reserved
              <br />
            </p>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex justify-end">
            <nav>
              <a
                href="https://kunalreact.netlify.app/"
                rel="nofollow"
                className="text-sm text-green-500 hover:underline"
                target='__blank'
              >
                Personal Portfolio
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
