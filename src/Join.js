import {Link} from "react-router-dom";

const Join = () => {
    return (
        <div className="join">
            <h1>Join</h1>
            <div className="cards">
                <div className="card">
                    <Link to="/join/login">Login</Link>
                    <Link to="/join/signup">signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Join
