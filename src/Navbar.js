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


                
                
                
                