import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className= "links">
        <input type="checkbox" id= "check"/>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <label class="nav_logo"><img class="nav_logo" src="" alt="Image"/></label>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="" class="nav_active">Join Now</a></li>
        </ul>
        </div>
    </nav>
    );
}

export default Navbar
