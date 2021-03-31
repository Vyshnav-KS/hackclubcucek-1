// Login Menu
import {useState} from "react";
import {useHistory} from "react-router";
import useFetch from "../useFetch";
import {serverAddress} from '../Utility'
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
    width: '90%',
    maxWidth: 600
  },
  buttonContainer: {
    display: 'flex',
  }
})

const Login = () => {
  const classes = useStyles()
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
  let currentStatus = "";

  // Fetch response
  const {data, isLoading, error} = useFetch(target);

  // Called when submit button is pressed
  const handleSubmit = () => {
    setIsSubmitPressed(true);
    setTarget({uri: `${serverAddress}/login.php`, data: {name: userName, pass: password}});
    console.log("button pressed");
  }

  const handleCreateAccount = () => {
    history.push('/join/signup')
  }

  // Called when Login success
  const onSuccess = () => {
    currentStatus = "";
    // Set cookies
    document.cookie = `username=${userName}; path=/`;
    document.cookie = `hash=${data.hash}; path=/`;
    window.location.replace("/");
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
        onSuccess();
      }
    }
  } 

  return (
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
        required
      />

      <Container className={classes.buttonContainer}>
        {/* Create Button */}
        <Button className={classes.field}
          type="submit" 
          color="secondary" 
          variant="contained"
          onClick= {handleCreateAccount}
        >
          Create Account?
        </Button>

        {/* Submit Button */}
        <Button className={classes.field}
          type="submit" 
          color="primary" 
          variant="contained"
          onClick= {handleSubmit}
        >
          Submit
        </Button>

      </Container>
      <Typography variant="button" color="error" >
        {currentStatus}
      </Typography>
    </Container>
  );
}

export default Login
