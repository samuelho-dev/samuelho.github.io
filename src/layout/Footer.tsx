import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin } from 'react-icons/fi';
function Footer() {
  return (
    <footer className="flex justify-between">
      <div className="bg-customYellow px-1">Thanks for coming!</div>
      <div className="flex gap-2">
        <a
          href="https://github.com/samuelho-dev"
          className=" cursor-pointer items-center gap-2"
        >
          <BsGithub className="h-6 w-6 rounded-full text-customYellow" />
        </a>
        <a
          href="https://www.linkedin.com/in/samuelho7/"
          className=" cursor-pointer items-center gap-2"
        >
          <FiLinkedin className="h-6 w-8 rounded-full text-customYellow" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
