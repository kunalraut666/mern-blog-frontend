import React from 'react';
import kvImg from "../assets/img/kendriya-vidyalaya.png";
import lnctImg from "../assets/img/lnct.jpg";
import bitsImg from "../assets/img/bits-pilani.png";

const Education = () => {

    const cardContentStyles = {
        height: '100%', /* Ensure the card content takes up the full height */
        overflowY: 'auto', /* Enable vertical scrolling if content exceeds height */
      };

  return (
    <>
      <div
        className="mb-8 bg-gray-200 shadow-xl border-white border rounded-xl h-64  p-7 "
        style={cardContentStyles}
      >
        <div className="header">
          <div className="heading flex gap-7 max-md:gap-0">
            <div className="p-3">
              <img
                src={kvImg}
                alt="deed"
                className="max-w-[100px] rounded-full border border-[#00040f]"
              />
            </div>
            <div className="p-3 max-w-[50%]">
              <h1 className="font-semibold tracking-wide bg-clip-text text-gray-900 text-xl mb-2">
                Kendriya Vidyalaya
              </h1>
              <span className="text-gray-600 text-sm">
                2005 - 2017
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-5 text-lg px-5">
          I did my schooling from Kendriya Vidyalaya, where I completed classes
          from 1st to 12th grade. Throughout my educational journey, Kendriya
          Vidyalaya provided me with a nurturing environment that fostered both
          academic excellence and holistic development. From foundational
          learning in primary school to specialized subjects in higher grades,
          Kendriya Vidyalaya equipped me with the knowledge and skills needed to
          excel in various fields.
        </p>
      </div>

      <div
        className="mb-8 bg-gray-200 border-[#00040f] shadow-xl border-white border rounded-xl h-64 max-sm:h-[40%px] p-7 max-sm:p-3"
        style={cardContentStyles}
      >
        <div className="header">
          <div className="heading flex gap-7 max-md:gap-0">
            <div className="p-3">
              <img
                src={lnctImg}
                alt="deed"
                className="max-w-[100px] rounded-full border border-[#00040f]"
              />
            </div>
            <div className="p-3 max-w-[50%]">
              <h1 className="font-semibold tracking-wide bg-clip-text text-gray-900 text-xl mb-2">
                Bachelor of Technology
              </h1>
              <span className="text-gray-500">
                Lakshmi Narain College Of Technology, Indore
              </span>
              <br />
              <span className="text-gray-600 text-sm">
                Aug 2017 - Aug 2021
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-5 text-lg px-5">
          I pursued my Bachelor of Technology (B.Tech) degree from August 2017
          to August 2021. Throughout this period, I delved into Python, C, and
          C++, honing my skills in these programming languages. These languages
          are fundamental in the realm of software development, enabling me to
          grasp essential concepts and develop practical solutions.
        </p>
      </div>

      <div
        className="mb-8 bg-gray-200 border-[#00040f] shadow-xl border-white border rounded-xl h-64 max-sm:h-[40%px] p-7 max-sm:p-3"
        style={cardContentStyles}
      >
        <div className="header">
          <div className="heading flex gap-7 max-md:gap-0">
            <div className="p-3">
              <img
                src={bitsImg}
                alt="deed"
                className="max-w-[100px] rounded-full border border-[#00040f]"
              />
            </div>
            <div className="p-3 max-w-[50%]">
              <h1 className="font-semibold tracking-wide bg-clip-text text-gray-900 text-xl mb-2">
                Master of Technology
              </h1>
              <span className="text-gray-500">
                Birla Institute of Technology & Science, Pilani
              </span>
              <br />
              <span className="text-gray-600 text-sm">
                Jan 2024 - Present
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-5 text-lg px-5">
          Currently, I'm undertaking my Master of Technology (M.Tech) degree in
          Software Systems at BITS Pilani. This journey commenced with a deep
          dive into advanced concepts and methodologies within the realm of
          software engineering. At BITS Pilani, I'm delving into various aspects
          of software systems, including design, development, and optimization.
          The program not only equips me with theoretical knowledge but also
          provides ample opportunities for hands-on experience and research,
          ensuring that I am well-prepared to tackle real-world challenges in
          the field of software engineering.
        </p>
      </div>
    </>
  );
};

export default Education;
