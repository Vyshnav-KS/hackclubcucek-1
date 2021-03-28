import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {serverAddress} from '../Utility';
import * as Messages from "../Messages";
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  container: {
    margin: 'auto',
    width: '80%',
    maxWidth: 600
  }
})

const Signup = () => {
  const classes = useStyles()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [target, setTarget] = useState({uri: "", data:{}});

  const history = useHistory();

  // This variable is used to show status when submit button is pressed.
  let currentStatus = "";

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
      currentStatus = Messages.Msg_Loading();
    } 
    else {
      // Got response, but resulted in error
      if (error && error.error) {
        // Fetch request failed
        currentStatus = Messages.Error_showError(error.msg);
      }
      else if (!data.result) {
        // Error from server
        currentStatus = Messages.Error_showError(data.err);
      }
      else {
        // All ok
        history.push("/join/login");
      }
    }
  } 

  return (
    // <div className="signup">
    //     <h1>Signup</h1>
    //     <div className="input-box">
    //         <label>Username</label>
    //         <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}/> 
    //         <label>Password</label>
    //         <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
    //         <label>Re-enter Password</label>
    //         <input required type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
    //         <button onClick={handleSubmit}>Submit</button>
    //     </div>
    //     {currentStatus}
    // </div>


      <Container className={classes.container}>
        {/* heading */}
        <Typography variant="h2">
          Login
        </Typography>

        {/* Username */}
        <TextField className={classes.field}
          onChange={(e) => setUserName(e.target.value)}
          label="Username" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
        />


        {/* Password */}
        <TextField className={classes.field}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          color="secondary"
          fullWidth
          type="password"
          required
        />

        {/* Password 2 */}
        <TextField className={classes.field}
          onChange={(e) => setPassword2(e.target.value)}
          label="Re-enter Password"
          variant="outlined"
          color="secondary"
          fullWidth
          type="password"
          required
        />

        {/* Submit Button */}
        <Button className={classes.field}
          type="submit" 
          color="secondary" 
          variant="contained"
          onClick= {handleSubmit}
        >
          Submit
        </Button>
        <Typography variant="button" color="error">
          {currentStatus}
        </Typography>
      </Container>
  );
}

export default Signup
