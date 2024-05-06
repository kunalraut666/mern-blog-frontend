import React from 'react';
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/project-imgs/project-img1.png";
import projImg2 from "../assets/project-imgs/project-img2.png";
import projImg3 from "../assets/project-imgs/project-img3.png";
import projImg4 from "../assets/project-imgs/project-img4.png";
import projImg5 from "../assets/project-imgs/project-img5.png";
import projImg6 from "../assets/project-imgs/project-img6.png";
import projImg7 from "../assets/project-imgs/project-img7.png";
import projImg8 from "../assets/project-imgs/project-img8.png";
import projImg9 from "../assets/project-imgs/project-img9.png";
import projImg10 from "../assets/project-imgs/project-img10.png";
import projImg11 from "../assets/project-imgs/project-img11.png";
import projImg12 from "../assets/project-imgs/project-img12.png";


export const Projects = () => {

  const projects = [
    {
      title: "Campus Prediction",
      description: "I've whipped up a Python project that predicts whether students will get hired by companies based on their grades and interests. It crunches data and uses clever algorithms to make these predictions, giving students and recruiters valuable insights into future career prospects.",
      imgUrl: projImg1,
      link: 'https://colab.research.google.com/drive/1O6aM_P9nBEPhij3nLRr4Aj1s6LTIbNWs',
    },
    {
      title: "Harry Potter's Invisibility Cloak",
      description: "I made Harry Potter's invisibility cloak using Python and OpenCV. My code detects red color in live video and replaces it with the background, creating the illusion of invisibility.",
      imgUrl: projImg2,
      link: 'https://github.com/kunalraut666/Project-Invisible'
    },
    {
      title: "Yellow Color Obeject Detection",
      description: "I created a Python project with OpenCV to detect yellow objects in live video. Using color thresholding, it outlines regions matching the yellow criteria in real-time, showcasing color-based object detection.",
      imgUrl: projImg3,
      link: "https://github.com/kunalraut666/Object-Detection"
    },
    {
      title: "URL QR Code Generator",
      description: "I've built a QR code generator using Python and Flask. Users can input a URL, and the program generates a QR code representing that link. Simple and efficient for sharing URLs digitally!",
      imgUrl: projImg4,
      link: 'https://qr-code-generator-xsan.onrender.com/generate'
    },
    {
      title: "Wall Crack Detection",
      description: "I've created a wall crack detection system using Python and OpenCV. It analyzes images or video to identify cracks on walls, highlighting them and providing measurements like length and area. It's a handy tool for assessing structural integrity quickly.",
      imgUrl: projImg5,
      link: 'https://github.com/kunalraut666/wall-crack-detection'
    },
    {
      title: "Gamer Area",
      description: "I've built a gaming news web app using Drupal. It's a hub for gamers to find the latest updates, reviews, and industry news. With categorized content and interactive features, it keeps gaming enthusiasts engaged and informed.",
      imgUrl: projImg6,
      link: 'https://live-gamer-area.pantheonsite.io/'
    },
    {
      title: "My Personal Portfolio",
      description: "I built a personal portfolio using HTML, CSS, and JavaScript. It showcases my skills and projects in a visually appealing and interactive way, helping me to make a strong impression on potential clients or employers.",
      imgUrl: projImg7,
      link: "https://kunalraut.netlify.app/"
    },
    {
      title: "COVID-19 News Tracker",
      description: "I developed a COVID-19 news tracker using Python. For the user interface, I used Tkinter to create a graphical user interface (GUI). On the backend, I implemented web scraping techniques to gather the latest COVID-19 news articles from various sources across India. The application fetches this news data and presents it to the user through the Tkinter-based GUI.",
      imgUrl: projImg8,
      link: "https://github.com/kunalraut666/Covid_19"
    },
    {
      title: "Image Text Extractor",
      description: " I developed an image text extractor using Python. For the graphical user interface (GUI), I utilized Tkinter to create an interactive interface for users to interact with. As for the backend, I employed pytesseract, which is a Python wrapper for Google's Tesseract-OCR engine. This allowed the application to extract text from images that users input through the GUI, making it easier to retrieve and work with text content from images.",
      imgUrl: projImg9,
      link: "https://github.com/kunalraut666/image-text-extractor"
    },
    {
      title: "Volume Control Hand Gesture",
      description: "I built a volume control system using hand gestures with Python. I used OpenCV for video capture, Mediapipe for hand gesture tracking, comtypes to interact with Windows APIs, and pycaw to control the system's audio volume. Essentially, the system adjusts the audio volume based on detected hand gestures in real-time.",
      imgUrl: projImg10,
      link: "https://github.com/kunalraut666/volume-control-hand-gesture"
    },
    {
      title: "Text Analyzer",
      description: "I've developed a text analyzer in React for easy text input and analysis. With functions like converting case, extracting sentences and words, and providing statistics such as word count and density, it offers a user-friendly experience. Powered by React's structure and state management, it ensures quick updates and responsive interactions, making it a valuable tool for text insights.",
      imgUrl: projImg11,
      link: "https://texttribe.netlify.app/"
    },
    {
      title: "Bulletin Spot News Platform",
      description: "I've built a news website using React for the frontend and NewsAPI for fetching news articles. It offers a dynamic interface to keep users informed about current events.",
      imgUrl: projImg12,
      link: 'https://github.com/kunalraut666/react-news-app'
    },
  ];

  return (
    <section className="project" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-gray-900">I've been tinkering with some web development projects lately, and it's been quite the journey diving into Drupal, Python, and PHP. Drupal's been my go-to for managing content and structuring websites in a scalable way. Python's been super handy for all sorts of backend tasks – from handling data processing to automating repetitive stuff. And PHP? Well, it's been my trusty tool for whipping up dynamic web pages and handling server-side magic. Mixing these technologies together has been a blast, and it's really allowed me to create some slick, feature-rich web solutions tailored to different needs.</p>
        </div>
        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
