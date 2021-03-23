import {Link} from "react-router-dom";
import hackclub_logo from './images/hackclub.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className= "links">
        <input type="checkbox" id= "check"/>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="nav_logo"><img className="nav_logo" src={hackclub_logo} alt="Hack club logo"/></label>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/join" className="nav_active">Join</Link></li>
        </ul>
        </div>
    </nav>
    );
}

export default Navbar


                
                
                
                
