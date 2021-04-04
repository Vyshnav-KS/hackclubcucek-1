import {useState} from "react";
import {useParams} from "react-router";
import useFetch from "../useFetch";
import {serverAddress} from "../Utility";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import {Error_showError} from "../Messages";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  avatar: {
    display: 'block',
    margin: 'auto',
    width: '90%',
    maxWidth: 800,
    textAlign: 'center'
  },
  largeIcon: {
    width: '100%',
    height: '100%'
  },
}));

const Profile = () => {
  const classes = useStyles();
  const {username} = useParams();
  const [target, ] = useState({uri: `${serverAddress}/users.php`, data: {type: 'info', name: username, field: 'avatar,bio'}});
  const serverResponse = useFetch(target);
  
  let currentStatus = "Loading...";
  let userData = '';

  if (serverResponse.error.error) {
    currentStatus = Error_showError(serverResponse.error.msg);
  }
  else if (serverResponse.data) {
    if (serverResponse.data.result) {
      currentStatus = "";
      userData = (
        <div>
          <Avatar
            className={classes.largeIcon}
            variant="square"
            alt={username}
            src={serverResponse.data.userInfo.avatar}
          />
          <Typography variant="h5">
            {username}
          </Typography>
          <br/>
          <TextField
            id="standard-read-only-input"
            label="User Bio"
            defaultValue={serverResponse.data.userInfo.bio}
            multiline
            fullWidth
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      );
    } else {
      currentStatus = Error_showError(serverResponse.data.err);
    }
  }

  return (
    <div>
      <Container className={classes.avatar}>
        {userData}
      </Container>
      <Typography variant="button" color="error" >
        {currentStatus}
      </Typography>
    </div>
  );
}

export default Profile
