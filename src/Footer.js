import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h3>Social</h3>
            <ul>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">GitHub</a></li>
            </ul>

            <h3>Company</h3>
            <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/services">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Footer
