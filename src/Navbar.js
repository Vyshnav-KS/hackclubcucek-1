import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Hack Club cucek</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/join">Join</Link>
            </div>
        </nav>
    );
}

export default Navbar
