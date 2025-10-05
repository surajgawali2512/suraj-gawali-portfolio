import React from "react";

const Header = () => (
  <header className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl font-bold">Suraj Gawali</h1>
    <p className="mt-4 text-xl">Full Stack Developer | Java, React, Spring Boot</p>
    <div className="mt-6 flex space-x-4">
      <a href="/assets/Suraj_Gawali_Resume.pdf" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Resume</a>
      <a href="https://github.com/surajgawali2512" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">GitHub</a>
      <a href="https://linkedin.com/in/suraj-gawali-1807b1246" className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">LinkedIn</a>
    </div>
  </header>
);

export default Header;
