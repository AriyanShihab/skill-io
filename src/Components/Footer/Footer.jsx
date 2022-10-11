import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
//<FontAwesomeIcon icon="fa-brands " />
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-900 py-5 text-slate-200   w-full  border-t border-opacity-20 border-slate-200 ">
      <div className="grid grid-cols-2 md:w-3/4 mx-auto px-4 ">
        <div>
          <NavLink
            end
            to="/"
            aria-label="Smart Home"
            title="Smart Home"
            className="inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-8 h-8 rounded-full text-cyan-500"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-cyan-500 ">
              skill.io
            </span>
          </NavLink>
          <h2 className="text-slate-200 text-[14px] md:text-xl">
            An Quiz App using React
          </h2>
        </div>
        {/* <div className=" grid items-end">
          <p className="text-slate-100">All right reseved by, Ariyan Shihab</p>
        </div> */}
        <div className="text-cyan-500 text-2xl m-2 flex items-end justify-end">
          <FontAwesomeIcon className="m-2" icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon className="m-2" icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className="m-2" icon={faGithub}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
