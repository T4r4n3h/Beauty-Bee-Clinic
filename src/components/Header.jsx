
// import {Link} from 'react-router-dom'
function Header
() {
  return (
    <div className="Header flex justify-between md:mt-4">
        <div className="logo font-typo font-bold text-2xl lg:text-3xl">Beauty Bee Clinic</div>
        <nav className="nav hidden lg:block w-1/3 lg:flex lg:justify-between ">
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
        <div className="nav-mobile lg:hidden h-10">
             <svg className="mt-2 w-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
        <button></button>
        </div>
    </div>
  )
}

export default Header
