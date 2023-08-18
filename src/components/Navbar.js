import { useState } from "react";
import "./Navbar.css"
import { FcHome } from "react-icons/fc";
import { BsInstagram, BsFacebook, BsDiscord  } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [hamburger, setHamburger] = useState(true)

    const changeHamburger = () => {
      setNav(!nav)
      setHamburger(!hamburger)
    }




  return (
    <section className="navbar-container">
        <div className="logo">
            <a href="#"><i><FcHome/></i></a>
            <h1>First React Web</h1>
        </div>
        {/* Po kliknutí se zavolá funkce která změní hamburger i navigaci */}
        <i onClick={() => changeHamburger() } className="hamburger" >
          {hamburger ? <GiHamburgerMenu/>  :  <RxCross2/> }
          
          </i>
        {/* podle toho jestli je hodnota true nebo false se přidá classa */}
        <nav className={`${nav ? "show" : "hide"}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">About me</a></li>
                <li>
                    <span><BsFacebook/></span>
                    <span><BsInstagram/></span>
                    <span><BsDiscord/></span>
                </li>
      
        </nav>
    </section>
  )
}

export default Navbar