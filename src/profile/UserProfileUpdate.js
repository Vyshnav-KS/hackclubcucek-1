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
    width: '90%',
    maxWidth: 600
  },

  buttonContainer: {
    display: 'flex',
  }
})

const UserProfileUpdate = () => {
  const classes = useStyles()
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const [target, setTarget] = useState({uri: "", data:{}});

  const history = useHistory();

  // This variable is used to show status when submit button is pressed.
  let currentStatus = "";

  const {data, isLoading, error} = useFetch(target);

  const handleSubmit = () => {
    setIsSubmitPressed(true);
    setTarget({uri: `${serverAddress}/userUpdate.php`, data: {
      bio: bio,
      avatar: avatar
    }});
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
      <Container className={classes.container}>
        {/* heading */}
        <Typography variant="h2">
          Update Profile
        </Typography>

        {/* Bio */}
        <TextField className={classes.field}
          onChange={(e) => setBio(e.target.value)}
          label="Your Bio" 
          variant="outlined" 
          color="secondary" 
          multiline
          rows={3}
          fullWidth
        />

        {/* Preview Img avatar */}
        <TextField className={classes.field}
          onChange={(e) => setAvatar(e.target.value)}
          label="Avatar Image (Link)" 
          variant="outlined" 
          color="secondary" 
          fullWidth
        />

          {/* Ypdate Button */}
          <Button className={classes.field}
            type="submit" 
            color="primary" 
            variant="contained"
            onClick= {handleSubmit}
          >
            UPDATE
          </Button>

        <Typography variant="button" color="error">
          {currentStatus}
        </Typography>
      </Container>
  );
}

export default UserProfileUpdate
