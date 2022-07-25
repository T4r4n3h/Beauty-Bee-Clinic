import React from 'react'
import { Link } from "react-scroll";

function NavMbl(props) {
  return (
    <div className="MblNav showMenu lg:hidden ">

        <ul className=''>
        <li className="text-xl ">
               <Link to="ServiceSection" smooth="true"duration={1000}> Services</Link>
            </li>
            <li className="text-xl">
              <Link to="About" smooth="true"duration={1000}>About</Link>
            </li> 
        </ul>
        
      <button
        onClick={props.hideMenu}
        className="w-full text-lavender text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-6"
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
    </div>
  )
}

export default NavMbl