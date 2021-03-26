import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {serverAddress} from '../Utility';
import * as Messages from "../Messages";

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const [target, setTarget] = useState({uri: "", data:{}});

    const history = useHistory();

    // This variable is used to show status when submit button is pressed.
    let currentStatusJsx = "";

    const {data, isLoading, error} = useFetch(target);

    const handleSubmit = () => {
        setIsSubmitPressed(true);
        setTarget({uri: `${serverAddress}/register.php`, data: {name: userName, pass: password}});
        console.log("button pressed");
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
                history.push("/join/login");
            }
        }
    } 

    return (
        <div className="signup">
            <h1>Signup</h1>
            <div className="input-box">
                <label>Username</label>
                <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}/> 
                <label>Password</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <label>Re-enter Password</label>
                <input required type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {currentStatusJsx}
        </div>
    );
}

export default Signup
