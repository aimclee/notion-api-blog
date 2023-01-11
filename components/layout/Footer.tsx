import React from "react";
import {
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 text-white">
      <div className="flex flex-row flex-wrap justify-around items-center max-w-5xl mx-auto">
        <a href="mailto:dev.caesiumy@gmail.com" className="hover:underline">
          dhy04057@gmail.com
        </a>
        <p className="hover:underline">&copy;aimclee</p>
        <div>
          <ul className="flex flex-row flex-wrap justify-center items-center gap-2">
            <li className="hover:text-white/50">
              <a href="https://github.com/aimclee" target="_blank" rel="noreferrer">
                <span>
                  <AiFillGithub size="2rem" />
                </span>
              </a>
            </li>
            <li className="hover:text-white/50">
              <a href="https://www.linkedin.com/in/andy-aimclee/" target="_blank" rel="noreferrer">
                <span>
                  <AiOutlineLinkedin size="2rem" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;