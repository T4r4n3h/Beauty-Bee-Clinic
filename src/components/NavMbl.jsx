import React from "react";
import { Link } from "react-scroll";

function NavMbl(props) {
  return (
    <div className={props.menuClass}>
      <button
        onClick={props.hideMenu}
        className=" text-lavender text-center  "
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </button>

      <ul className="flex justify-around border-2 w-5/6">
        <li className="text-xl ">
          <Link to="ServiceSection" smooth="true" duration={1000}>
            {" "}
            Services
          </Link>
        </li>
        <li className="text-xl">
          <Link to="About" smooth="true" duration={1000}>
            About
          </Link>
        </li>
        <li>
          <a className=" mt-2 flex" href="tel:+1647-223-1975">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 "
              viewBox="0 - 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavMbl;
