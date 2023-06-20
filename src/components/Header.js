import "./Header.css"
import Navbar from "./Navbar"

import person2 from"../images/2.jpg"

const Header = () => {
  return <section>
    <Navbar/>
        <header>
            <div className="left-header">
                <img src={person2} alt="" />
            </div>
            <div className="righ-header">
                <h2>I'am</h2>
                <h2>Web Developer</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis ut tempora distinctio quibusdam architecto quas consectetur quod aliquam ducimus quae dicta aliquid quos enim repellat numquam, eligendi molestias vitae?</p>
                <button>Contact</button>
            </div>

        </header>

    </section>
    

  
}

export default Header