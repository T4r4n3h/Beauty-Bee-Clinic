import { useState } from 'react';
import {Link} from 'react-scroll';
import NavMbl from './NavMbl';



const Header = () => {
  const [menuClass, setMenuClass] = useState("hide");
  const [burger, setBurger] = useState("show");
  const [drop, setDrop] = useState("hide");

  const hideMenu = () => {
    console.log("you are clicking on back button");
    setMenuClass("hide");
    setBurger("show");
    setDrop("hide");
  };

  const showMenu = () => {
    console.log("this is to show");
    setMenuClass("showMenu");
    setBurger("hide");
    setDrop("");
  };

  return (
    <div className="Header flex justify-between md:mt-10 ">
        <nav className="nav hidden lg:flex lg:justify-between " >
          <ul className='flex cursor-pointer'>
            <li className="text-2xl">Services & Pricing</li> 
            <li className="text-2xl ml-10">
              <Link to="About" smooth="true"duration={1000}>About</Link>
            </li> 
    
  
          </ul>
            {/* <a className="text-2xl" href="#">Services & Pricing</a>            
            <a className="text-2xl ml-10" href="#">About</a> */}
        </nav>
        <div className="logo font-typo font-bold text-2xl lg:text-4xl">Beauty Bee Clinic</div>
        <div className="number hidden  md:block">
           <a className=" mt-2 flex" href="tel:+1647-223-1975">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 - 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
             </svg>+1 647-223-1975
           </a>
        </div>
        <div className="nav-mobile lg:hidden h-10">
        <button>
             <svg className="mt-2 w-6 h-7" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
        </button>
        </div>
        <NavMbl showMenu={menuClass} hideMenu={hideMenu}/>
    </div>
  )
}

export default Header
