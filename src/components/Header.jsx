
import {Link} from 'react-router-dom'
function Header
() {
  return (
    <div className="Header flex justify-between">
        <div className="logo font">Beauty Bee Clinic</div>
        <nav className="nav hidden lg:block w-1/3 lg:flex lg:justify-between border  border-green-600">
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
        <div className="nav-mobile lg:hidden border border-purple-600">
             <svg className="h-10 w-10" fill="none" viewBox="0 0 24 14" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
        <button></button>
        </div>
    </div>
  )
}

export default Header
