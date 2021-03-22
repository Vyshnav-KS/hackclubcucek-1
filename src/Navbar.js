import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className= "links">
        <input type="checkbox" id= "check"/>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="nav_logo"><img className="nav_logo" src="" alt="Image"/></label>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="" className="nav_active">Join Now</a></li>
        </ul>
        </div>
    </nav>
    );
}

export default Navbar
