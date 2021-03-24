import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState("");
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const [target, setTarget] = useState({uri: "", data:{}});

    const history = useHistory();
    
    // This variable is used to show status when submit button is pressed.
    let statusJsx = "";

    const {data, isLoading, error} = useFetch(target);

    const HandleSubmit = () => {
        setIsSubmitPressed(true);
        setTarget({uri: "http://cuceksite.com/login.php", data: {name: userName, pass: password}});
        console.log("button pressed");
    }

    const onSuccess = () => {
        // Set cookies
        document.cookie = `username=${userName}; path=/`;
        document.cookie = `password=${password}; path=/`;
        history.push("/");
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
            }
            // Check respose from the server
            else if (data) {
                if (!data.result) {
                    // Show error
                    statusJsx = (
                        <div className="errorMsg">
                            <h2>Error</h2>
                            <p>{data.err}</p>
                        </div> 
                    )
                } else {
                    // All ok
                    onSuccess();
                }
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
            </div>
            {statusJsx}
        </div>
    );
}

export default Login
