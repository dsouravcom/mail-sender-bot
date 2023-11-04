import React from "react";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center pt-16 sm:pt-20 md:pt-40 min-h-screen bg-gray-900 ">
        <h1 className="text-3xl font-bold mb-4 text-white">About Us</h1>
        <div className="bg-gray-800 text-white text-xl p-8 rounded-lg w-full sm:w-1/2">
          <p className="text-lg">
            Explore our user-friendly platform. Effortlessly send files or
            messages to any email address. Share documents, images, or content
            seamlessly. Input the recipient's email, attach your file, and send
            with a few clicks. Your content reaches its destination securely and
            quickly.
          </p>
        </div>
        <div className="flex items-center mt-6">
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
            alt="GitHub Icon"
            className="w-6 h-6 text-gray-400 mr-2"
          />
          <a
            href="https://github.com/isouravcom/mail-sender-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub Repository
          </a>
        </div>
        <p className="text-gray-500 mt-2">
          Contribute to our project on GitHub!
        </p>
      </div>
    </div>
  );
}

export default About;
