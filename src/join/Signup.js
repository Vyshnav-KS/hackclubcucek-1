import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const [target, setTarget] = useState({uri: "", data:{}});

    const history = useHistory();

    // This variable is used to show status when submit button is pressed.
    let statusJsx = "";

    const {data, isLoading, error} = useFetch(target);

    const handleSubmit = () => {
        setIsSubmitPressed(true);
        setTarget({uri: "http://cuceksite.com/register.php", data: {name: userName, pass: password}});
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
                    history.push("/join/login");
                }
            } else {
                statusJsx = "";
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
            {statusJsx}
        </div>
    );
}

export default Signup
