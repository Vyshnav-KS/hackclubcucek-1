import {useState} from "react";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="input-box">
                <label>Username</label>
                <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}/> 
                <label>Password</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={() => handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Login
