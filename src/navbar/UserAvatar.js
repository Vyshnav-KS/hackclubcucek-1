import {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const UserAvatar = () => {
  const [target, setTarget] = useState({uri: `${serverAddress}/getUserInfo.php`, data: {name: getCookie('username'), type: 'avatar'}});
  const serverResponse = useFetch(target);
  const history = useHistory();

  const onLoginClick = () => {
    history.push("/join/login");
  }

  // Shown when logged out
  let output = (<Button color="inherit" onClick={onLoginClick}>Sign in</Button>);

  // Set Output to avatar if logged in
  if (serverResponse.data && serverResponse.data.result) { 
    console.log("Avatar set");
    output = (
      <Link to="/me">
        <Avatar
          alt={getCookie('username')}
          src={serverResponse.data.avatar}
        />
      </Link>
    )
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default UserAvatar
