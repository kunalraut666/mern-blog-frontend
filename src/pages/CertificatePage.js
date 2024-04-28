import React from 'react';
import certificateImg1 from "../assets/certificates/basic-python.png";
import certificateImg2 from "../assets/certificates/C.jpg";
import certificateImg3 from "../assets/certificates/machine-learning-foundation.jpeg";
import certificateImg4 from "../assets/certificates/programing-for-everybody.jpeg";
import certificateImg5 from "../assets/certificates/python-data-structures.jpeg";
import certificateImg6 from "../assets/certificates/sql.jpeg";
import certificateImg7 from "../assets/certificates/100pythonpractice.jpg";
import certificateImg8 from "../assets/certificates/data-structures-with-python.jpg";
import certificateImg9 from "../assets/certificates/executive-briefing-ai.jpg";
import certificateImg10 from "../assets/certificates/git-cert.jpg";
import certificateImg11 from "../assets/certificates/guitar.jpg";
import certificateImg12 from "../assets/certificates/mern-stack.jpg";
import certificateImg13 from "../assets/certificates/reactjs.jpg";
import certificateImg14 from "../assets/certificates/react-game.jpg";
import certificateImg15 from "../assets/certificates/Web-Development.jpg";


const CertificatePage = () => {

    const cardContentStyles = {
        height: '100%', /* Ensure the card content takes up the full height */
        overflowY: 'auto', /* Enable vertical scrolling if content exceeds height */
    };

    const certificates = [
      {
        title: "Basic Python",
        issuer: "Hackerrank",
        imgUrl: certificateImg1,
        link: "https://www.hackerrank.com/certificates/5e30a3662c3e",
      },
      {
        title: "C for Everyone: Programming Fundamentals",
        issuer: "Coursera",
        imgUrl: certificateImg2,
        link: "https://www.coursera.org/account/accomplishments/certificate/L5LUD9GQHJ3V",
      },
      {
        title: "Machine Learning Foundations: A Case Study Approach",
        issuer: "Coursera",
        imgUrl: certificateImg3,
        link: "https://www.coursera.org/account/accomplishments/verify/RUY4CUBJJYLX",
      },
      {
        title: "Programming for Everybody: Python",
        issuer: "Coursera",
        imgUrl: certificateImg4,
        link: "https://www.coursera.org/account/accomplishments/verify/W5U29MFQ5FYK",
      },
      {
        title: "Python Data Structures",
        issuer: "Coursera",
        imgUrl: certificateImg5,
        link: "https://www.coursera.org/account/accomplishments/verify/9LQE2A7B7Q2J",
      },
      {
        title: "SQL for Data Science",
        issuer: "Coursera",
        imgUrl: certificateImg6,
        link: "https://www.coursera.org/account/accomplishments/verify/XFKCMNKX3Q93",
      },
      {
        title: "Python Practice with 100 Python Excercises",
        issuer: "Udemy",
        imgUrl: certificateImg7,
        link: "https://www.udemy.com/certificate/UC-75e280c9-9b3a-4ae0-8191-e0dcf485c344/",
      },
      {
        title: "Data Structures with Python",
        issuer: "Udemy",
        imgUrl: certificateImg8,
        link: "https://www.udemy.com/certificate/UC-e2d96c5a-c101-46b8-b54f-203b0f2b2e37/",
      },
      {
        title: "Executive Briefing: Artificial Intelligence (AI) + ChatGPT",
        issuer: "Udemy",
        imgUrl: certificateImg9,
        link: "https://www.udemy.com/certificate/UC-e2d96c5a-c101-46b8-b54f-203b0f2b2e37/",
      },
      {
        title: "Git",
        issuer: "Udemy",
        imgUrl: certificateImg10,
        link: "https://www.udemy.com/certificate/UC-fad38cb7-2aae-4248-bc7a-94e561c93014/",
      },
      {
        title: "Guitar",
        issuer: "Udemy",
        imgUrl: certificateImg11,
        link: "https://www.udemy.com/certificate/UC-cf1818ea-5f68-443d-b032-1ad3f9653e7f/",
      },
      {
        title: "MERN Stack",
        issuer: "Udemy",
        imgUrl: certificateImg12,
        link: "https://www.udemy.com/certificate/UC-e64741e4-791c-46e7-ba2e-1a89ad0b1a26/",
      },
      {
        title: "React.js",
        issuer: "Udemy",
        imgUrl: certificateImg13,
        link: "https://www.udemy.com/certificate/UC-c8003dc8-388b-48f9-b21f-3b8291470ae8/",
      },
      {
        title: "2D Game with React.js",
        issuer: "Udemy",
        imgUrl: certificateImg14,
        link: "https://www.udemy.com/certificate/UC-d44bb802-1315-4dff-97eb-dbd0e9f56b7e/",
      },
      {
        title: "Web Developement",
        issuer: "Progate.com",
        imgUrl: certificateImg14,
        link: "https://drive.google.com/file/d/15LBo5Gpnp2Q8RIVNB-FFxhly_eEXOJeU/view?pli=1",
      },
    ];

    return (
        <div>
      {certificates.map((certificate, index) => (
        <a key={index} href={certificate.link} target="__blank">
          <div className="mb-8 bg-gray-200 shadow-xl border-white border rounded-xl h-64 p-7" style={cardContentStyles}>
            <div className="header">
              <div className="flex items-center gap-7 max-md:gap-10">
                <img
                  src={certificate.imgUrl}
                  alt="certificate"
                  className="max-w-[100px] border border-[#00040f]"
                />
                <div className="max-w-[calc(100% - 100px)]">
                  <h1 className="font-semibold tracking-wide bg-clip-text text-gray-900 text-xl mb-2">
                    {certificate.title}
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Issued by: {certificate.issuer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    );
};

export default CertificatePage;
