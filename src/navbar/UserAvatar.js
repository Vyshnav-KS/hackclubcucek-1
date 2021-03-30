import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import useFetch from "../useFetch";
import {getCookie, serverAddress} from "../Utility";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const UserAvatar = () => {
  const [target, ] = useState({uri: `${serverAddress}/getUserInfo.php`, data: {name: getCookie('username'), type: 'avatar'}});
  const serverResponse = useFetch(target);
  const history = useHistory();

  const buttonRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const onLoginClick = () => {
    history.push("/join/login");
  }

  const onLogoutClick = () => {
    history.push("/join/login");
  }

  const handleClose = () => {
  };
  // Shown when logged out
  let output = (<Button color="inherit" onClick={onLoginClick}>Sign in</Button>);

  // Set Output to avatar if logged in
  if (serverResponse.data && serverResponse.data.result) { 
    console.log("Avatar set");
    output = (
      <Button ref={buttonRef} onClick={() => {setShowMenu(!showMenu)}}>
        <Menu
          id="simple-menu"
          anchorEl={buttonRef.current}
          keepMounted
          open={showMenu}
          onClose={handleClose}
        >
          <MenuItem onClick={() => history.push("/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => history.push("/me")}>My account</MenuItem>
          <MenuItem onClick={() => onLogoutClick}>Logout</MenuItem>
        </Menu>
        <Avatar
          alt={getCookie('username')}
          src={serverResponse.data.avatar}
        />
      </Button>
    )
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default UserAvatar
