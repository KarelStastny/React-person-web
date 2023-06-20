import { useState } from "react";
import "./Navbar.css"
import { FcHome } from "react-icons/fc";
import { BsInstagram, BsFacebook, BsDiscord  } from "react-icons/bs";
import { GiHamburgerMenu,  } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    // const hamburger = document.querySelector(".hamburger")

    // console.log(hamburger);

    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.toggle("active")
        
    // })
    // const [hamburger, setHamburger] = useState(false)
    // const hamburgerChange = () => {
   
    // }

    



  return (
    <section className="navbar-container">
        <div className="logo">
            <a href="#"><i><FcHome/></i></a>
            <h1>My web</h1>
        </div>
        <i className="hamburger" ><GiHamburgerMenu/></i>
        <nav>
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