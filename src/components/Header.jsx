import { useState } from 'react';
import {Link} from 'react-scroll';
import NavMbl from './NavMbl';



const Header = () => {
  const [menuClass, setMenuClass] = useState("hide");
  const [burger, setBurger] = useState("mt-2 w-6 h-7");
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
            <li className="text-2xl">
              <Link to="ServiceSection" smooth="true"duration={1000}> Services & Pricing</Link>
              
             </li> 
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
        <button className="" onClick={showMenu}>
             <svg className={burger} 
             
             fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
             <svg
          className={drop}
            width="24"
            height="30"
            viewBox="0 0 24 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.25 0.999999C23.25 0.861929 23.1381 0.75 23 0.75H12H1C0.861929 0.75 0.75 0.861928 0.75 1V5.90658C0.75 6.01888 0.824884 6.1174 0.933088 6.14746L11.9331 9.20302C11.9769 9.21518 12.0231 9.21518 12.0669 9.20302L23.0669 6.14746C23.1751 6.1174 23.25 6.01888 23.25 5.90658V0.999999Z"
              fill="#54301A"
              stroke="#54301A"
              strokeWidth="1.5"
            />
            <path
              d="M23.25 13C23.25 12.8619 23.1381 12.75 23 12.75H11.3333H0.999998C0.861929 12.75 0.75 12.8619 0.75 13V17.1358C0.75 17.2424 0.817549 17.3372 0.918253 17.372L11.9183 21.1781C11.9712 21.1964 12.0288 21.1964 12.0817 21.1781L23.0817 17.372C23.1825 17.3372 23.25 17.2424 23.25 17.1358V13Z"
              fill="#54301A"
              stroke="#54301A"
              strokeWidth="1.5"
            />
            <path
              d="M23.25 25C23.25 24.8619 23.1381 24.75 23 24.75H12H1C0.861929 24.75 0.75 24.8619 0.75 25V28.5C0.75 28.5787 0.787048 28.6528 0.85 28.7L11.85 36.95C11.9389 37.0167 12.0611 37.0167 12.15 36.95L23.15 28.7L23.6 29.3L23.15 28.7C23.213 28.6528 23.25 28.5787 23.25 28.5V25Z"
              fill="#54301A"
              stroke="#54301A"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        </div>
       
        {/* <NavMbl showMenu={menuClass} hideMenu={hideMenu}/> */}
    </div>
  )
}

export default Header
