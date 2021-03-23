import {useState} from "react";
import useFetch from "../useFetch";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const [obj, setObj] = useState({user_name: "", pass: ""});
    const [uri, setUri] = useState("");
    
    // This variable is used to show status when submit button is pressed.
    let statusJsx = "";

    const {data, isLoading, error} = useFetch(uri, obj);

    const HandleSubmit = () => {
        setIsSubmitPressed(true);
        setUri("haha");
        setObj({user_name: userName, pass: password});
        console.log("button pressed");
    }

    // Execute after submit press
    if (isSubmitPressed) {
        // waiting for response 
        if (isLoading) {
            statusJsx = (
                <div className="loadingMsg">
                    <h2>Loading ...</h2>
                    <p></p>
                </div> 
            )
        } else {
            // Got response, but resulted in error
            if (error && error.error) {
                statusJsx = (
                    <div className="errorMsg">
                        <h2>Error</h2>
                        <p>{error.msg}</p>
                    </div> 
                )
            } else {
                statusJsx = "";
            }
        }
    } 

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="input-box">
                <label>Username</label>
                <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}/> 
                <label>Password</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={HandleSubmit}>Submit</button>
                {statusJsx}
            </div>
        </div>
    );
}

export default Login
