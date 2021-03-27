// Login Menu
import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {serverAddress} from '../Utility'
import * as Messages from "../Messages";

const Login = () => {
    // Username, Password
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");
    // State to hold submit button press
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    // Our Fetch target
    const [target, setTarget] = useState({uri: "", data:{}});
    // Hook for navigation, to redirect to another page
    const history = useHistory();
    // This variable is used to show status when submit button is pressed.
    let currentStatusJsx = "";
    // Fetch response
    const {data, isLoading, error} = useFetch(target);

    // Called when submit button is pressed
    const HandleSubmit = () => {
        setIsSubmitPressed(true);
        setTarget({uri: `${serverAddress}/login.php`, data: {name: userName, pass: password}});
        console.log("button pressed");
    }

    // Called when Login success
    const onSuccess = () => {
        currentStatusJsx = "";
        // Set cookies
        document.cookie = `username=${userName}; path=/`;
        document.cookie = `hash=${data.hash}; path=/`;
        history.push("/");
    }

    // Execute after submit press
    if (isSubmitPressed) {
        // waiting for response 
        if (isLoading) {
            // Show Loading Message
            currentStatusJsx = Messages.Msg_Loading();
        } 
        else {
            // Got response, but resulted in error
            if (error && error.error) {
                // Fetch request failed
                currentStatusJsx = Messages.Error_showError(error.msg);
            }
            else if (!data.result) {
                // Error from server
                currentStatusJsx = Messages.Error_showError(data.err);
            }
            else {
                // All ok
                onSuccess();
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
            </div>
            {currentStatusJsx}
        </div>
    );
}

export default Login
