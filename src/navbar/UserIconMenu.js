import {useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import useFetch from "../useFetch";
import {getCookie, serverAddress, setCookie} from "../Utility";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserAvatar from "../components/UserAvatar";

const UserIconMenu = () => {
  const [target, ] = useState({uri: `${serverAddress}/users.php`, data: {name: getCookie('username'), hash: getCookie('hash'), type: 'auth'}});
  const serverResponse = useFetch(target);
  const history = useHistory();

  const buttonRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const onLoginClick = () => {
    history.push("/join/login");
  }

  const onLogoutClick = () => {
    setCookie('username', '');
    setCookie('hash', '');
    window.location.reload();
  }

  // Shown when logged out
  let output = (<Button color="inherit" onClick={onLoginClick}>Sign in</Button>);

  // Set Output to avatar if logged in
  if (serverResponse.data && serverResponse.data.result) { 
    output = (
      <Button ref={buttonRef} onClick={() => {setShowMenu(!showMenu)}}>
        <Menu
          id="simple-menu"
          anchorEl={buttonRef.current}
          keepMounted
          open={showMenu}
        >
          <MenuItem onClick={() => history.push("/profile/" + getCookie("username"))}>Profile</MenuItem>
          <MenuItem onClick={() => history.push("/me")}>My account</MenuItem>
          <MenuItem onClick={() => onLogoutClick()}>Logout</MenuItem>
        </Menu>
        <UserAvatar
          username={getCookie('username')}
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

export default UserIconMenu
